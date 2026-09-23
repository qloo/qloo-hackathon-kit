# Agent Chat Starter

Use this starter to ask Qloo questions in plain language from your terminal
before you write code. The agent runs Qloo workflows for you and shows the
requests it made.

## Before you start

Complete the install and credential steps in the [kit README](../../README.md).
The agent also needs a model provider. Sign in once:

```sh
qloo setup --model
qloo setup --status
```

## Ask a first question

Start the agent from a project folder, not your home folder:

```sh
mkdir -p ~/qloo-hack && cd ~/qloo-hack
qloo explore
```

Then try:

```text
Which Qloo tags match "cozy mystery"? Show me the candidates before you use one.
```

Useful commands inside the chat:

- `/journey insight` walks through a question, a refinement, and how to read the result.
- `/request` shows the Qloo API requests behind the latest answer.

## What `explore` can and cannot do

`explore` can run Qloo workflows. It can also read, search, and list any file
your user account can read. The current folder is only where it starts.

Files it reads are sent to your model provider. Do not point it at untrusted
repositories. Do not ask it about files that hold secrets.

`explore` cannot run shell commands or change your files. It may still write
its own private Qloo state.

The `integrate`, `plan`, and `build` modes are not supported for this event.

## Next steps

When a question works well in chat, move it into code with the
[CLI starter](../cli-workflow/README.md) or the
[MCP starter](../mcp-client/README.md).
