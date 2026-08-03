import os
import signal
import subprocess
import sys
import time
from pathlib import Path

import pytest

from verified_autoresearch.container import ContainerExecutor, ContainerFailure

IMAGE = os.environ.get("AUTORESEARCH_LIVE_IMAGE")
WORKSPACE = os.environ.get("AUTORESEARCH_LIVE_WORKSPACE")
pytestmark = pytest.mark.skipif(
    not IMAGE or not WORKSPACE,
    reason="set AUTORESEARCH_LIVE_IMAGE and AUTORESEARCH_LIVE_WORKSPACE",
)


def executor() -> ContainerExecutor:
    assert IMAGE and WORKSPACE
    return ContainerExecutor(Path(WORKSPACE), IMAGE)


def test_live_identity_mounts_and_environment_are_contained() -> None:
    code = """
import os
from pathlib import Path
assert os.geteuid() == 65534
assert os.getegid() == 65534
assert not Path('/var/run/docker.sock').exists()
assert not Path('/Users/samdonworth').exists()
assert not Path('/host').exists()
assert Path('/sys/fs/cgroup/memory.max').read_text().strip() == '2147483648'
assert Path('/sys/fs/cgroup/memory.swap.max').read_text().strip() == '0'
assert Path('/sys/fs/cgroup/pids.max').read_text().strip() == '64'
quota, period = Path('/sys/fs/cgroup/cpu.max').read_text().split()
assert int(quota) / int(period) == 2
assert 'AUTORESEARCH_CANARY_SECRET' not in os.environ
for key in ('OPENAI_API_KEY', 'ANTHROPIC_API_KEY', 'HF_TOKEN', 'GITHUB_TOKEN'):
    assert key not in os.environ
for target in ('/workspace/evaluate.py', '/etc/autoresearch-escape'):
    try:
        Path(target).write_text('escape', encoding='utf-8')
    except OSError:
        pass
    else:
        raise AssertionError(f'writable protected path: {target}')
print('CONTAINMENT_IDENTITY_OK')
"""
    result = executor().run(("python3", "-c", code), timeout_seconds=10)
    assert result.returncode == 0, result.stderr
    assert result.stdout.strip() == "CONTAINMENT_IDENTITY_OK"


def test_live_network_is_disabled() -> None:
    code = """
import socket
sock = socket.socket()
sock.settimeout(2)
sock.connect(('1.1.1.1', 53))
raise AssertionError('network unexpectedly reachable')
"""
    result = executor().run(("python3", "-c", code), timeout_seconds=10)
    assert result.returncode != 0
    assert "network unexpectedly reachable" not in result.stderr


def test_live_tmp_is_noexec() -> None:
    code = """
import os
import subprocess
from pathlib import Path
probe = Path('/tmp/probe')
probe.write_text('#!/bin/sh\\nexit 0\\n', encoding='utf-8')
os.chmod(probe, 0o755)
try:
    completed = subprocess.run([str(probe)], check=False)
except PermissionError:
    print('NOEXEC_OK')
else:
    assert completed.returncode != 0
    print('NOEXEC_OK')
"""
    result = executor().run(("python3", "-c", code), timeout_seconds=10)
    assert "NOEXEC_OK" in result.stdout


def test_live_pid_limit_is_enforced() -> None:
    code = """
import os
import signal
import time
children = []
limited = False
try:
    for _ in range(100):
        try:
            pid = os.fork()
        except OSError:
            limited = True
            break
        if pid == 0:
            time.sleep(10)
            os._exit(0)
        children.append(pid)
finally:
    for pid in children:
        try:
            os.kill(pid, signal.SIGKILL)
        except ProcessLookupError:
            pass
    for pid in children:
        try:
            os.waitpid(pid, 0)
        except ChildProcessError:
            pass
assert limited
assert len(children) < 64
print('PID_LIMIT_OK')
"""
    result = executor().run(("python3", "-c", code), timeout_seconds=15)
    assert result.stdout.strip() == "PID_LIMIT_OK"


def test_live_wall_time_limit_is_enforced() -> None:
    with pytest.raises(ContainerFailure, match="timed out"):
        executor().run(("python3", "-c", "import time; time.sleep(10)"), timeout_seconds=1)


def test_live_sigkill_watchdog_removes_orphaned_container() -> None:
    assert IMAGE and WORKSPACE

    def names() -> set[str]:
        output = subprocess.run(
            ["/opt/homebrew/bin/docker", "ps", "--format", "{{.Names}}"],
            check=True,
            capture_output=True,
            text=True,
        ).stdout
        return {
            name
            for name in output.splitlines()
            if name.startswith("verified-autoresearch-")
        }

    before = names()
    script = """
import sys
from pathlib import Path
from verified_autoresearch.container import ContainerExecutor
ContainerExecutor(Path(sys.argv[1]), sys.argv[2]).run(
    ('python3', '-c', 'import time; time.sleep(30)'), timeout_seconds=2
)
"""
    controller = subprocess.Popen(
        [sys.executable, "-c", script, WORKSPACE, IMAGE],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    deadline = time.monotonic() + 10
    created: set[str] = set()
    while time.monotonic() < deadline:
        created = names() - before
        if created:
            break
        if controller.poll() is not None:
            pytest.fail("controller exited before creating a test container")
        time.sleep(0.1)
    assert created
    os.kill(controller.pid, signal.SIGKILL)
    controller.wait(timeout=10)

    deadline = time.monotonic() + 10
    while time.monotonic() < deadline and created & names():
        time.sleep(0.1)
    assert not (created & names())


def test_live_output_limit_is_enforced() -> None:
    with pytest.raises(ContainerFailure, match="exceeded limit"):
        executor().run(("python3", "-c", "print('x' * 1200000)"), timeout_seconds=10)


def test_live_file_size_limit_is_enforced() -> None:
    code = """
from pathlib import Path
try:
    Path('/tmp/oversized').write_bytes(b'x' * 20000000)
except OSError:
    print('FILE_LIMIT_OK')
else:
    raise AssertionError('file size limit not enforced')
"""
    result = executor().run(("python3", "-c", code), timeout_seconds=10)
    assert result.returncode == 0, result.stderr
    assert result.stdout.strip() == "FILE_LIMIT_OK"
