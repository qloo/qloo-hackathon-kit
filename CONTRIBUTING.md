# Contributing to the Qloo Hackathon Kit

This kit is for participant-facing documentation, starter configurations, and
event operations. Changes must keep the first-run path short, accurate, and
safe for people outside Qloo.

## Before opening a pull request

- Keep every starter compatible with the versions in `manifest.json`.
- Never add a real Qloo key, internal URL, customer data, or copied production
  response.
- Do not introduce a dependency on an internal service, repository, or private
  npm package.
- Keep `qloo exec` and `qloo mcp` examples aligned with the public harness.
- Update the relevant guide and run every starter command your change affects.

## Scope

Good contributions improve setup, clarify a supported Qloo workflow, add a
tested participant-facing starter, or improve accessibility and troubleshooting.
Changes to the Qloo API or to the harness itself are out of scope for this
repository.

## Pull requests

Explain the participant problem, list the tested command(s), and call out any
new data, credential, privacy, or support implication. Maintainers may defer a
feature that broadens the public support boundary until it has an owner,
security review, and release test.
