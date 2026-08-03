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
