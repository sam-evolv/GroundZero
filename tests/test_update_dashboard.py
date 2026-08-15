import importlib.util
import unittest
from pathlib import Path


MODULE_PATH = Path(__file__).resolve().parents[1] / "scripts" / "update-dashboard.py"
SPEC = importlib.util.spec_from_file_location("update_dashboard", MODULE_PATH)
assert SPEC is not None
update_dashboard = importlib.util.module_from_spec(SPEC)
assert SPEC.loader is not None
SPEC.loader.exec_module(update_dashboard)


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
