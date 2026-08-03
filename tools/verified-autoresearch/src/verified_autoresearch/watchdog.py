from __future__ import annotations

import subprocess
import sys
import time
from pathlib import Path
from typing import Optional


def main(argv: Optional[list[str]] = None) -> int:
    values = sys.argv[1:] if argv is None else argv
    if len(values) != 3:
        return 2
    try:
        runtime_limit = float(values[0])
    except ValueError:
        return 2
    docker_path = Path(values[1])
    container_name = values[2]
    if (
        not 0 < runtime_limit <= 600
        or not docker_path.is_file()
        or not container_name.startswith("verified-autoresearch-")
    ):
        return 2
    environment = {"PATH": "/usr/bin:/bin:/usr/sbin:/sbin:/opt/homebrew/bin"}
    inspect_command = [str(docker_path), "inspect", container_name]
    registration_deadline = time.monotonic() + 30
    while True:
        remaining = registration_deadline - time.monotonic()
        if remaining <= 0:
            return 0
        try:
            inspected = subprocess.run(
                inspect_command,
                stdin=subprocess.DEVNULL,
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
                check=False,
                timeout=min(2, remaining),
                env=environment,
            )
        except subprocess.TimeoutExpired:
            inspected = None
        if inspected is not None and inspected.returncode == 0:
            break
        time.sleep(min(0.1, max(0, registration_deadline - time.monotonic())))
    time.sleep(runtime_limit + 2)
    command = [str(docker_path), "kill", container_name]
    cleanup_deadline = time.monotonic() + 30
    while True:
        remaining = cleanup_deadline - time.monotonic()
        if remaining <= 0:
            return 1
        try:
            completed = subprocess.run(
                command,
                stdin=subprocess.DEVNULL,
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
                check=False,
                timeout=min(2, remaining),
                env=environment,
            )
        except subprocess.TimeoutExpired:
            completed = None
        if completed is not None and completed.returncode == 0:
            return 0
        time.sleep(min(0.5, max(0, cleanup_deadline - time.monotonic())))


if __name__ == "__main__":
    raise SystemExit(main())
