# API Access and Limits

Each participant must use an event-issued, individually attributable Qloo
credential or an organizer-approved authenticated gateway. Never share a
credential between teams or put one in source control, a browser app, a public
MCP configuration, or a demo recording.

Organizers must publish the event quota, rate limit, expiration time, and
support/escalation path before participants receive access. The access system
must return a clear authentication or rate-limit error instead of silently
falling back to another endpoint or credential.

Use the smallest request that can answer the product question. Cache only what
your project needs, respect the event quota, and make retry behavior bounded.
Do not automate bulk scraping or use Qloo calls to recreate an unrelated
database.

For the event, the supported surfaces are `qloo exec` and `qloo mcp` from the
public `@qloo/qloo-harness` package.
