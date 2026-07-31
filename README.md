# Stacks Wars Docs

Production documentation for [Stacks Wars](https://stackswars.com), built with [Fumadocs](https://fumadocs.dev).

Live site: https://docs.stackswars.com/

## Develop

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) — docs are served from `/`.

## Content

MDX lives in `content/docs/`:

- `user/` — player guide
- `troubleshooting/` — common issues
- `develop/` — game developer guide

## Build

Uses webpack (`next build --webpack`) for reliable Fumadocs MDX packaging on current Node/Next versions.

```bash
bun run build
bun start
```
