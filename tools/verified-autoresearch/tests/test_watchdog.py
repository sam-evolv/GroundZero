import subprocess
from pathlib import Path
from types import SimpleNamespace

from verified_autoresearch import watchdog


def test_watchdog_container_registration_wait_has_true_wall_clock_bound(
    tmp_path: Path, monkeypatch
) -> None:
    docker = tmp_path / "docker"
    docker.write_text("", encoding="utf-8")
    clock = {"now": 0.0}
    calls = {"count": 0}

    def monotonic() -> float:
        return clock["now"]

    def sleep(seconds: float) -> None:
        clock["now"] += seconds

    def stalled_run(*args, **kwargs):
        calls["count"] += 1
        clock["now"] += float(kwargs["timeout"])
        return SimpleNamespace(returncode=1)

    monkeypatch.setattr(watchdog.time, "monotonic", monotonic)
    monkeypatch.setattr(watchdog.time, "sleep", sleep)
    monkeypatch.setattr(watchdog.subprocess, "run", stalled_run)

    result = watchdog.main(
        ["1", str(docker), "verified-autoresearch-registration-delay"]
    )

    assert result == 0
    assert clock["now"] <= 31
    assert calls["count"] < 20


def test_watchdog_registration_survives_docker_client_timeouts(
    tmp_path: Path, monkeypatch
) -> None:
    docker = tmp_path / "docker"
    docker.write_text("", encoding="utf-8")
    clock = {"now": 0.0}

    def monotonic() -> float:
        return clock["now"]

    def sleep(seconds: float) -> None:
        clock["now"] += seconds

    def timed_out_run(*args, **kwargs):
        clock["now"] += float(kwargs["timeout"])
        raise subprocess.TimeoutExpired(args[0], kwargs["timeout"])

    monkeypatch.setattr(watchdog.time, "monotonic", monotonic)
    monkeypatch.setattr(watchdog.time, "sleep", sleep)
    monkeypatch.setattr(watchdog.subprocess, "run", timed_out_run)

    result = watchdog.main(
        ["1", str(docker), "verified-autoresearch-registration-timeout"]
    )

    assert result == 0
    assert clock["now"] <= 31


def test_watchdog_cleanup_survives_docker_client_timeouts(
    tmp_path: Path, monkeypatch
) -> None:
    docker = tmp_path / "docker"
    docker.write_text("", encoding="utf-8")
    clock = {"now": 0.0}
    calls = {"count": 0}

    def monotonic() -> float:
        return clock["now"]

    def sleep(seconds: float) -> None:
        clock["now"] += seconds

    def inspect_then_time_out(*args, **kwargs):
        calls["count"] += 1
        if calls["count"] == 1:
            return SimpleNamespace(returncode=0)
        clock["now"] += float(kwargs["timeout"])
        raise subprocess.TimeoutExpired(args[0], kwargs["timeout"])

    monkeypatch.setattr(watchdog.time, "monotonic", monotonic)
    monkeypatch.setattr(watchdog.time, "sleep", sleep)
    monkeypatch.setattr(watchdog.subprocess, "run", inspect_then_time_out)

    result = watchdog.main(
        ["1", str(docker), "verified-autoresearch-cleanup-timeout"]
    )

    assert result == 1
    assert clock["now"] <= 34
