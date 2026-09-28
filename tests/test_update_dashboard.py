import importlib.util
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch


MODULE_PATH = Path(__file__).resolve().parents[1] / "scripts" / "update-dashboard.py"
SPEC = importlib.util.spec_from_file_location("update_dashboard", MODULE_PATH)
assert SPEC is not None
update_dashboard = importlib.util.module_from_spec(SPEC)
assert SPEC.loader is not None
SPEC.loader.exec_module(update_dashboard)


class DashboardActiveSectionTests(unittest.TestCase):
    def test_blocked_signal_uses_project_state_short_id(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            items_dir = root / "items"
            project_state_dir = root / "project_state"
            items_dir.mkdir()
            project_state_dir.mkdir()
            (project_state_dir / "oh.md").write_text(
                "---\nid: oh\n---\nBlocked by tenant verification.\n",
                encoding="utf-8",
            )

            with (
                patch.object(update_dashboard, "ITEMS_DIR", items_dir),
                patch.object(update_dashboard, "PROJECT_STATE_DIR", project_state_dir),
            ):
                section = update_dashboard.render_active_section()

        self.assertIn("[[project_state/oh|OpenHouse AI]]", section)
        self.assertNotIn("project_state/openhouse-ai", section)


class DashboardMonitoringStatusTests(unittest.TestCase):
    def test_building_state_stays_red_despite_historical_healthy_prose(self):
        status = update_dashboard.monitoring_status(
            {"status": "building"},
            "Work still needs runtime repair.",
        )
        self.assertEqual(status, "🔴")

    def test_stable_state_stays_green_despite_historical_error_prose(self):
        status = update_dashboard.monitoring_status(
            {"status": "stable"},
            "Service is stable.",
        )
        self.assertEqual(status, "🟢")

    def test_unknown_state_defaults_to_monitoring(self):
        self.assertEqual(update_dashboard.monitoring_status({}, "Reporting is manual."), "🟡")


if __name__ == "__main__":
    unittest.main()
