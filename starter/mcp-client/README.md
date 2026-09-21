# MCP Starter

Use this configuration with an MCP client that can start a local stdio server.
It exposes Qloo's canonical `qloo_*` workflows through the locally installed
public harness.

## Configure the client

1. Install `@qloo/qloo-harness` and run `qloo setup --qloo`.
2. Copy the `qloo` server entry from `qloo.mcp.json` into your MCP client's
   configuration file.
3. Restart or reconnect the client.
4. Ask the client to inspect `qloo_capabilities` before choosing a workflow.

The command uses the credential held by the local harness; `qloo.mcp.json`
contains no key and must stay that way. The canonical server is `qloo mcp`.
Do not use the legacy `qloo api mcp` route for a new hackathon project.

If your client supports environment variables, do not use that feature to put a
Qloo API key in its shared configuration. Configure the key through `qloo
setup --qloo` or the event's approved credential mechanism instead.
