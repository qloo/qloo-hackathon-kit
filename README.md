# Qloo Hackathon Kit

Build a taste-powered project using Qloo's public terminal and MCP surfaces.

## Start here

1. Install Node.js 22.19.0 or newer.
2. Install the public harness:

   ```sh
   npm install --global @qloo/qloo-harness
   ```

3. Run `qloo setup --qloo` and authenticate with the event-provided Qloo credential.
   Do not paste the credential into a repository, issue, chat, or browser app.
4. Choose a starting route:

   - [CLI workflow starter](starter/cli-workflow/README.md) for a script or
     backend integration.
   - [MCP starter](starter/mcp-client/README.md) for an MCP-compatible client.
5. Read [API access and limits](docs/API_ACCESS.md) and
   [safe use](docs/SAFE_USE.md) before making a live request.

The supported event surface is intentionally small: deterministic `qloo exec`
workflows and canonical `qloo mcp`. The harness's model-backed integration and
build modes are not part of the hackathon because their approval controls are
not an operating-system sandbox.

## What you can build

Use Qloo's validated workflows to find Qloo tags, describe an entity, discover
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
