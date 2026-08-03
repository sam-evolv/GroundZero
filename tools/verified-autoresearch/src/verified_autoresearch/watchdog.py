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
        delay = float(values[0])
    except ValueError:
        return 2
    docker_path = Path(values[1])
    container_name = values[2]
    if (
        not 0 < delay <= 602
        or not docker_path.is_file()
        or not container_name.startswith("verified-autoresearch-")
    ):
        return 2
    time.sleep(delay)
    command = [str(docker_path), "kill", container_name]
    for _ in range(60):
        completed = subprocess.run(
            command,
            stdin=subprocess.DEVNULL,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
            check=False,
            timeout=10,
            env={"PATH": "/usr/bin:/bin:/usr/sbin:/sbin:/opt/homebrew/bin"},
        )
        if completed.returncode == 0:
            return 0
        time.sleep(0.5)
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
