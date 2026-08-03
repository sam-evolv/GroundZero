from __future__ import annotations

import argparse
import json
import sys
from dataclasses import asdict
from pathlib import Path
from typing import Optional, Sequence

from .config import ExperimentConfig
from .container import ContainerExecutor
from .evaluator import Executor, run_evaluator, run_guard
from .ollama import OllamaClient
from .runner import _validated_allowed_paths, run_campaign
from .sandbox import verify_sandbox
from .state import workspace_state


def _parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(prog="verified-autoresearch")
    subparsers = parser.add_subparsers(dest="command", required=True)
    for name in ("verify", "run"):
        command = subparsers.add_parser(name)
        command.add_argument("config", type=Path)
    return parser


def main(
    argv: Optional[Sequence[str]] = None,
    *,
    executor: Optional[Executor] = None,
) -> int:
    args = _parser().parse_args(argv)
    config = ExperimentConfig.load(args.config)
    if executor is None:
        executor = ContainerExecutor(config.workspace, config.container_image)
    with workspace_state(config) as store:
        _validated_allowed_paths(config)
        store.recover()
        state = verify_sandbox(config.workspace)
        baseline = run_evaluator(
            config.evaluator, executor, config.command_timeout_seconds
        ).metric
        for guard in config.guards:
            run_guard(guard, executor, config.command_timeout_seconds)

    if args.command == "verify":
        print(json.dumps({
            "status": "verified",
            "workspace": str(state.root),
            "branch": state.branch,
            "head": state.head,
            "baseline_metric": baseline,
        }, sort_keys=True))
        return 0

    model = OllamaClient(config.ollama_url, config.model)
    results = run_campaign(config, model, executor=executor)
    print(json.dumps({
        "status": "completed",
        "baseline_metric": baseline,
        "iterations": [asdict(result) for result in results],
    }, sort_keys=True))
    return 0 if results else 2


if __name__ == "__main__":
    sys.exit(main())
