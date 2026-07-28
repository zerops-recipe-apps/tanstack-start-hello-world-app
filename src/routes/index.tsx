import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'

const getGreeting = createServerFn({ method: 'GET' }).handler(() => {
  return { message: 'Hello from TanStack Start server functions on Zerops!' }
})

export const Route = createFileRoute('/')({
  loader: () => getGreeting(),
  component: Home,
})

const stack = [
  { label: 'SSR', accent: 'from-sky-400 to-blue-500' },
  { label: 'Server Functions', accent: 'from-violet-400 to-purple-500' },
  { label: 'Nitro', accent: 'from-fuchsia-400 to-pink-500' },
  { label: 'React 19', accent: 'from-orange-400 to-amber-500' },
] as const

function Home() {
  const greeting = Route.useLoaderData()

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.18),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-16 text-center sm:py-24">
        <div className="mb-8 flex flex-col items-center gap-5">
          <div className="relative">
            <div
              className="absolute inset-0 scale-110 rounded-3xl bg-gradient-to-br from-sky-500/40 via-violet-500/40 to-orange-500/40 blur-xl"
              aria-hidden
            />
            <img
              src="/android-chrome-512x512.png"
              alt="TanStack Start"
              width={88}
              height={88}
              className="relative rounded-3xl shadow-2xl shadow-violet-500/20 ring-1 ring-white/10"
            />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            TanStack Start on Zerops
          </p>
        </div>

        <h1 className="bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
          Full-stack React,
          <br />
          deployed in seconds
        </h1>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
          A minimal{' '}
          <a
            href="https://tanstack.com/start/latest"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-sky-400 underline decoration-sky-400/30 underline-offset-4 transition hover:text-sky-300 hover:decoration-sky-300/50"
          >
            TanStack Start
          </a>{' '}
          app with SSR, server functions, and Nitro — running on{' '}
          <a
            href="https://zerops.io/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-violet-400 underline decoration-violet-400/30 underline-offset-4 transition hover:text-violet-300 hover:decoration-violet-300/50"
          >
            Zerops
          </a>
          .
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {stack.map((item) => (
            <span
              key={item.label}
              className={`rounded-full bg-gradient-to-r ${item.accent} px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-black/20`}
            >
              {item.label}
            </span>
          ))}
        </div>

        <div className="mt-10 w-full max-w-lg rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left shadow-xl shadow-black/20 backdrop-blur-md sm:p-6">
          <div className="mb-3 flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
              Live server function
            </span>
          </div>
          <p className="font-mono text-sm leading-relaxed text-slate-200 sm:text-base">
            {greeting.message}
          </p>
        </div>

        <p className="mt-12 text-sm text-slate-500">
          Edit{' '}
          <code className="rounded-md bg-white/5 px-1.5 py-0.5 font-mono text-xs text-slate-300 ring-1 ring-white/10">
            src/routes/index.tsx
          </code>{' '}
          to customize this page
        </p>
      </div>
    </main>
  )
}
