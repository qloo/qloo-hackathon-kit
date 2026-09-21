# CLI Workflow Starter

Use this starter when your project can call a local command from a backend,
script, or build job. It uses `find_tags`, a deterministic read-only workflow
that does not require you to know a Qloo tag ID in advance.

## Run it

1. Install the public harness and complete `qloo setup --qloo` from the kit root
   instructions.
2. Set the credential only in your shell or the harness's private configuration.
   The `.env.example` file is a placeholder and must never be committed with a
   real value.
3. From this directory, run:

   ```sh
   qloo exec find_tags --input-file request.json
   ```

The command prints one normalized JSON result. Edit `request.json` to change
the tag concept or set `limit` between 1 and 20. For automation lifecycle
events, add `--jsonl`.

```sh
qloo exec find_tags --input-file request.json --jsonl
```

## Next steps

Use the returned tag only after reviewing the result. A semantic search result
is a candidate, not proof that the tag matches your product meaning. If no
result clearly matches your concept, refine `query` and run the command again.
Do not pass an uncertain tag into later requests.

Keep live Qloo calls on a server or trusted local process. Do not embed an API
key in a static site, mobile application, or client-side bundle.
