# Troubleshooting

## `qloo` is not found

Confirm Node.js 22.19.0 or newer is installed, reinstall the harness globally,
then open a new terminal:

```sh
npm install --global @qloo/qloo-harness
qloo --version
```

## Credential or connectivity problem

Run the non-mutating readiness check first:

```sh
qloo setup --status --json
qloo doctor
```

Use `qloo doctor --network` only when you intend to make a bounded network
probe. If the credential is missing, expired, or rate limited, ask through
[Support](../SUPPORT.md) with the redacted error category and time; never
include the key.

## MCP client cannot see Qloo tools

Confirm the client runs `qloo mcp`, not `qloo api mcp`, and reconnect after
editing the configuration. Run `qloo mcp` in a terminal only to confirm that
the process starts; it is a stdio server and will wait for an MCP client.

## A result is ambiguous or unexpected

Do not force a fuzzy tag or entity match into your project. Refine the concept,
inspect the workflow request/provenance, and describe the assumption in your
submission.
