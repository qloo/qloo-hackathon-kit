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

## A desktop MCP client cannot start `qloo`

Desktop apps often start with a shorter `PATH` than your terminal, for
example when Node.js comes from a version manager. Find the full path:

```sh
command -v qloo
```

On Windows, use:

```sh
where.exe qloo
```

Put that full path in the client's `command` field instead of `qloo`, then
restart the client.

## MCP client cannot see Qloo tools

Confirm the client runs `qloo mcp`, not `qloo api mcp`, and reconnect after
editing the configuration. Run `qloo mcp` in a terminal only to confirm that
the process starts; it is a stdio server and will wait for an MCP client.

## The MCP backend exits with QLOO_AUTH

The server started but has no usable Qloo credential. Run
`qloo setup --status`. On a server, confirm that `QLOO_API_KEY` is set in the
backend's environment and that the backend passes `env: process.env` to the
stdio transport.

If a key is set and the backend exits with `MCP_ADAPTER_FAILURE` instead,
Qloo most likely rejected the key. Run `qloo doctor --network` to confirm,
then ask through [Support](../SUPPORT.md) for a replacement credential.

## The agent says no model is configured

`qloo explore` needs a model-provider sign-in in addition to the Qloo
credential:

```sh
qloo setup --model
qloo setup --status
```

## A result is ambiguous or unexpected

Do not force a fuzzy tag or entity match into your project. Refine the concept,
inspect the workflow request/provenance, and describe the assumption in your
submission.
