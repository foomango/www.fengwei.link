# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # local dev server (Next.js, port 3000)
npm run build        # Next.js build (type-check + bundle)
npm run build:cf     # Cloudflare build via @opennextjs/cloudflare
npm run preview      # local Cloudflare Workers preview of the CF build
npm run deploy       # deploy to Cloudflare Pages via wrangler
npm run lint         # ESLint
```

## Stack

- **Next.js 16** (App Router, TypeScript, Tailwind CSS v4)
- **Cloudflare Pages** deployment via **@opennextjs/cloudflare** adapter
- The adapter transforms the Next.js output into a Cloudflare Worker (`wrangler.jsonc` points to `.open-next/worker.js`)

## Cloudflare deployment

Two paths:

1. **Git-connected Pages project** (recommended for CI) — connect the GitHub repo in the Cloudflare dashboard, set build command `npm run build:cf`, output dir `.open-next/assets`.
2. **CLI** — `npm run deploy` runs `opennextjs-cloudflare deploy` which calls wrangler under the hood. Requires `wrangler login` first.

`wrangler.jsonc` at the repo root holds the Pages/Worker config. Add KV namespaces, D1 databases, or R2 buckets there when needed.

## Notes

- `npm run build` alone is not enough for Cloudflare — always use `build:cf` for production.
- `.open-next/` and `.wrangler/` are gitignored build artifacts.
