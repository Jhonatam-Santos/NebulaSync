import { ArrowRight, PlayCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:border-indigo-500/40 dark:bg-indigo-500/10 dark:text-indigo-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
            </span>
            Novo: Assistente com IA para documentos
          </div>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Colabore, automatize e entregue mais rápido com{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              NebulaSync
            </span>
          </h1>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            Centralize projetos, fluxos e conhecimento da equipe em um único painel inteligente. Reduza o tempo gasto com
            alinhamentos e foque no que realmente importa.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#teste-gratis"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus-visible:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 dark:focus-visible:bg-zinc-100 sm:w-auto"
            >
              Teste grátis
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#recursos"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-200 px-6 py-3 text-sm font-medium transition-colors hover:bg-zinc-100 focus-visible:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900 dark:focus-visible:bg-zinc-900 sm:w-auto"
            >
              <PlayCircle className="h-4 w-4" aria-hidden="true" />
              Saiba mais
            </a>
          </div>
          <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-500">
            Sem cartão de crédito • Configuração em minutos • Suporte em português
          </p>
        </div>
        <div className="relative mx-auto mt-12 max-w-5xl sm:mt-16">
          <div className="absolute -inset-x-20 -bottom-16 -z-10 h-64 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-zinc-950 dark:via-zinc-950/80"></div>
          <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl shadow-indigo-500/10 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-center gap-2 border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
              <div className="ml-4 h-2 w-40 rounded-full bg-zinc-100 dark:bg-zinc-800"></div>
            </div>
            <div className="grid gap-4 p-4 sm:grid-cols-[240px_1fr] sm:p-6">
              <div className="hidden flex-col gap-2 rounded-xl border border-zinc-200 p-4 dark:border-zinc-800 sm:flex">
                <div className="h-2 w-24 rounded-full bg-zinc-200 dark:bg-zinc-700"></div>
                <div className="mt-2 flex flex-col gap-2">
                  <div className="h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800"></div>
                  <div className="h-8 rounded-lg"></div>
                  <div className="h-8 rounded-lg"></div>
                  <div className="h-8 rounded-lg"></div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
                  <div className="flex items-center justify-between">
                    <div className="h-2 w-32 rounded-full bg-zinc-200 dark:bg-zinc-700"></div>
                    <div className="h-2 w-16 rounded-full bg-zinc-100 dark:bg-zinc-800"></div>
                  </div>
                  <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
                    <div className="h-16 rounded-lg bg-gradient-to-br from-indigo-500/10 to-violet-500/10"></div>
                    <div className="h-16 rounded-lg bg-zinc-50 dark:bg-zinc-900"></div>
                    <div className="h-16 rounded-lg bg-zinc-50 dark:bg-zinc-900"></div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <div className="h-40 rounded-xl border border-zinc-200 dark:border-zinc-800"></div>
                  <div className="h-40 rounded-xl border border-zinc-200 dark:border-zinc-800"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
