// Start the local Qloo MCP server, check readiness, and run one workflow.
// Usage: node backend.mjs [concept]
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const INSTALL_HINT =
  "Cannot start `qloo`. Install it with: npm install --global @qloo/qloo-harness";

const query = process.argv[2] ?? "cozy mystery";

// The SDK forwards only a small default set of variables to the server.
// Forward the full environment so QLOO_API_KEY and QLOO_HOME reach it.
const transport = () =>
  new StdioClientTransport({ command: "qloo", args: ["mcp"], env: process.env });

const connect = async () => {
  const client = new Client({ name: "qloo-hackathon-backend", version: "0.1.0" });
  await client.connect(transport()).catch((error) => {
    throw error.code === "ENOENT" ? new Error(INSTALL_HINT) : error;
  });
  return client;
};

const credentialState = (capabilities) =>
  capabilities.structuredContent?.adapter?.ready ? "ready" : "missing";

const failureText = (envelope) =>
  [`${envelope.error?.code ?? "UNKNOWN"}: ${envelope.summary}`, envelope.error?.recovery]
    .filter(Boolean)
    .join("\n");

const run = async (client) => {
  const { tools } = await client.listTools();
  const capabilities = await client.callTool({ name: "qloo_capabilities", arguments: {} });
  process.stderr.write(`Connected to qloo mcp (${tools.length} tools).\n`);
  process.stderr.write(`Qloo credential: ${credentialState(capabilities)}\n`);

  const result = await client.callTool({
    name: "qloo_find_tags",
    arguments: { query, limit: 5 },
  });
  const rawEnvelope = result.structuredContent ?? {};
  const envelope =
    rawEnvelope.status === undefined
      ? { ...rawEnvelope, status: "error", error: { code: "UNKNOWN", ...rawEnvelope.error } }
      : rawEnvelope;

  if (envelope.status === "error") {
    process.stderr.write(`${failureText(envelope)}\n`);
    return 1;
  }
  if (envelope.status !== "ok") {
    process.stderr.write(`Status: ${envelope.status}: ${envelope.summary}\n`);
  }
  process.stdout.write(`${JSON.stringify(envelope, null, 2)}\n`);
  return 0;
};

const main = async () => {
  const client = await connect();
  try {
    return await run(client);
  } finally {
    await client.close();
  }
};

process.exitCode = await main().catch((error) => {
  process.stderr.write(`${error.message}\n`);
  return 1;
});
