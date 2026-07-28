# tanstack-start-hello-world-app

Minimal [TanStack Start](https://tanstack.com/start/latest) SSR app (Nitro Node output) on Zerops `nodejs@22`.

## Zerops service facts

- HTTP port: `3000` (dev `npm run dev` / prod `node .output/server/index.mjs`)
- Siblings: —
- Runtime base: `nodejs@22`

## Zerops dev

`setup: dev` idles on `zsc noop --silent`; the agent starts the dev server.

- Dev command: `npm run dev -- --host 0.0.0.0`
- In-container rebuild without deploy: `npm run build`
- Local prod smoke test: `npm run build && npm run start`

**All platform operations (start/stop/status/logs of the dev server, deploy, env / scaling / storage / domains) go through the Zerops development workflow via `zcp` MCP tools. Don't shell out to `zcli`.**

## Notes

- Uses the Nitro Vite plugin — production output lives in `.output/` ([hosting guide](https://tanstack.com/start/latest/docs/framework/react/guide/hosting)).
- Build uses `npm install --ignore-scripts=false --min-release-age=0` — TanStack Start RC packages may be blocked by the repo `.npmrc` `min-release-age=7` default.
- `@tanstack/react-router-devtools` is omitted from this hello-world recipe to keep the prod bundle lean.
- Favicon lives in `public/favicon.ico`.
