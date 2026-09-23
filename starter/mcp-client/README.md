# MCP Starter

`qloo mcp` is a local MCP server. It runs on your machine or your backend,
talks MCP over stdin and stdout, and calls Qloo with your event credential.
There is no hosted URL.

Use steps 1–3 to explore in a desktop client. Use steps 1 and 3–6 to build it
into your own app.

## 1. Install and add the event key

```sh
npm install --global @qloo/qloo-harness
qloo setup --qloo
qloo setup --status
```

The key stays in the harness's private configuration. On a server, set the
`QLOO_API_KEY` environment variable instead. Never put the key in a client
configuration file, a repository, or a browser bundle.

## 2. Connect a desktop MCP client

Copy the `qloo` entry from [`qloo.mcp.json`](qloo.mcp.json) into your MCP
client's configuration, then restart or reconnect the client:

```json
{ "mcpServers": { "qloo": { "command": "qloo", "args": ["mcp"] } } }
```

Ask the client to run `qloo_capabilities`. It reports readiness without
calling Qloo. Use the canonical `qloo mcp` server, not the legacy
`qloo api mcp` server.

## 3. Choose a tool chain

Most projects follow one shape: resolve vague words into Qloo IDs, confirm the
matches, then ask the taste question.

`qloo_find_tags` or `qloo_describe` → confirm → `qloo_recommend`,
`qloo_rank`, or `qloo_where_popular`

| Idea | Tools |
| --- | --- |
| "Fans of X also like…" | `qloo_recommend` with `signals` and `target_type` |
| Pick the best of a shortlist for an audience | `qloo_rank` with `options`, `option_type`, and `signals` or `demographic` |
| Where should a pop-up or tour go? | `qloo_where_popular` with `entity` and `within` |
| How do two fan bases differ? | `qloo_compare_audiences` with `group_a` and `group_b` |
| Who is this audience? | `qloo_audience_demographics`, `qloo_entity_tags` |
| Is it rising? | `qloo_trends` with `entity_type`, one to five entities, and a date range |

Try the chain in a desktop client first, for example: "Find the Qloo tag for
cozy mystery, show me the matches, then recommend books for fans of Agatha
Christie with that tag."

## 4. Start the server from your backend

[`backend.mjs`](backend.mjs) starts `qloo mcp` with the official MCP SDK,
checks readiness, and runs `qloo_find_tags`:

From this directory, run:

```sh
npm install
node backend.mjs "cozy mystery"
```

It prints the result as JSON. If Qloo returns an error, it prints the error
code and recovery steps and exits with status 1. Any other status also
prints the result and exits with status 0.

Pass `env: process.env` when you create the stdio transport, as `backend.mjs`
does. Without it, the SDK does not forward `QLOO_API_KEY` to the server.

In Python, use the `mcp` package's stdio client with the same command and
arguments. Agent frameworks that accept a stdio MCP server take the same
`command` and `args` pair.

## 5. Let your model call the tools

Pass the list from `listTools()` to your model and run each tool call it makes
through `callTool()`. Every result has the same envelope shape, with one of
six statuses:

- `ok`: results are ready.
- `empty`: no match. Refine the input.
- `needs_input`: the input is ambiguous. Show the candidates to your user and
  ask.
- `partial`: some results came back. Check `summary`.
- `degraded`: results came back with reduced quality or a fallback. Check
  `summary`.
- `error`: see `error.code`, `error.retryable`, and `error.recovery`.

An `ok` result:

```json
{
  "status": "ok",
  "summary": "…",
  "results": [],
  "result_count": 0
}
```

An `error` result:

```json
{
  "status": "error",
  "summary": "…",
  "results": [],
  "result_count": 0,
  "error": { "code": "QLOO_AUTH", "retryable": false, "recovery": "…" }
}
```

`error` is present only when `status` is `error`. Retry only when
`error.retryable` is `true`. Show resolved matches to your user before you rely
on them.

If no model is in the loop, skip MCP and call `qloo exec <workflow>` from the
[CLI starter](../cli-workflow/README.md). It takes the same inputs and returns
the same result shape.

## 6. Deploy

Run your backend on a VM or container that has Node.js 22.19 or newer, the
harness installed, and `QLOO_API_KEY` set as a secret. Your web or mobile
front end calls your backend; it never calls Qloo directly.

A browser cannot start `qloo mcp`. Serverless functions are not a supported route.
