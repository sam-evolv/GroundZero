from test_runner import FakeModel, TestExecutor, make_sandbox

from verified_autoresearch.proposal import Proposal
from verified_autoresearch.runner import run_campaign


class ChangingFailureModel(FakeModel):
    def __init__(self) -> None:
        super().__init__(0)
        self.calls = 0

    def propose(self, context: str, timeout_seconds: int) -> Proposal:
        proposal = super().propose(context, timeout_seconds)
        self.calls += 1
        return Proposal(hypothesis=f"failed attempt {self.calls}", edits=proposal.edits)


def test_campaign_stops_after_three_iterations_without_progress(tmp_path) -> None:
    root, config = make_sandbox(tmp_path)
    config = config.__class__(**{**config.__dict__, "max_iterations": 20})
    model = ChangingFailureModel()
    results = run_campaign(config, model, executor=TestExecutor(root))
    assert len(results) == 3
    assert all(result.status == "rejected" for result in results)
