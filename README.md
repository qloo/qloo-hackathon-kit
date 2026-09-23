# Qloo Hackathon Kit

Build a taste-powered project with Qloo. One npm package gives you three ways
in: a chat agent, a command-line tool, and an MCP server.

## Start here

1. Install Node.js 22.19.0 or newer.
2. Install the public harness:

   ```sh
   npm install --global @qloo/qloo-harness
   qloo --version
   ```

   The version must be 0.1.26 or newer.

3. Run `qloo setup --qloo` and enter the event-provided Qloo credential.
   Do not paste the credential into a repository, issue, chat, or browser app.
4. Read [API access and limits](docs/API_ACCESS.md) and
   [safe use](docs/SAFE_USE.md) before making a live request.

## Choose a route

| Route | Use it to | Also needs | Starter |
| --- | --- | --- | --- |
| Chat agent: `qloo explore` | Ask Qloo questions in plain language and learn what the data can answer. | A model-provider sign-in (`qloo setup --model`). | [Agent chat](starter/agent-chat/README.md) |
| CLI: `qloo exec`, `qloo api` | Call Qloo from a script or backend and get JSON back. | Nothing else. | [CLI workflow](starter/cli-workflow/README.md) |
| MCP server: `qloo mcp` | Give Qloo tools to an MCP desktop client or to your own app's model. | An MCP client, or a backend that can start a local process. | [MCP](starter/mcp-client/README.md) |

`qloo explore`, `qloo exec`, and `qloo mcp` run the same validated workflows
and return the same result shape, so you can prototype in one and ship in
another. `qloo api` returns the raw API response.

The harness's `integrate`, `plan`, and `build` modes are not part of the
hackathon. Their approval controls are not an operating-system sandbox.

## What you can build

Use Qloo's workflows to find Qloo tags, describe an entity, discover
recommendations, compare audiences, rank a shortlist, or investigate trends
and geographic popularity. Qloo results describe aggregate affinities; they
are not evidence of a person's identity, preferences, or future behavior.

## Event documents

- [API access and limits](docs/API_ACCESS.md)
- [Safe use and data handling](docs/SAFE_USE.md)
- [Troubleshooting](docs/TROUBLESHOOTING.md)
- [Submission guide](docs/SUBMISSION.md)
- [Contribution guide](CONTRIBUTING.md)
- [Support](SUPPORT.md)
- [Security reporting](SECURITY.md)
