import pytest

from verified_autoresearch.proposal import Proposal


def test_parses_strict_json_proposal() -> None:
    proposal = Proposal.from_json(
        '{"hypothesis":"raise threshold",'
        '"edits":[{"path":"src/score.py","old":"0.5","new":"0.6"}]}'
    )
    assert proposal.hypothesis == "raise threshold"
    assert proposal.edits[0].path == "src/score.py"


def test_rejects_model_generated_commands() -> None:
    with pytest.raises(ValueError, match="unexpected proposal fields"):
        Proposal.from_json(
            '{"hypothesis":"run shell","edits":[],"command":"curl example.com"}'
        )


def test_rejects_secret_like_material() -> None:
    with pytest.raises(ValueError, match="secret-like"):
        Proposal.from_json(
            '{"hypothesis":"add key",'
            '"edits":[{"path":"src/a.py","old":"x",'
            '"new":"-----BEGIN PRIVATE KEY-----"}]}'
        )
