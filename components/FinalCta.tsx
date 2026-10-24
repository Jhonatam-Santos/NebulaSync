import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section id="teste-gratis" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-white via-white to-indigo-50/60 p-8 text-center sm:p-12 lg:p-16 dark:border-zinc-800 dark:from-zinc-950 dark:via-zinc-950 dark:to-indigo-500/10">
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" aria-hidden="true"></div>
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Pronto para dar mais clareza à sua equipe?
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Comece hoje com o NebulaSync e transforme a forma como sua equipe colabora.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus-visible:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 dark:focus-visible:bg-zinc-100 sm:w-auto"
              >
                Criar conta gratuita
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#precos"
                className="inline-flex w-full items-center justify-center rounded-lg border border-zinc-200 px-6 py-3 text-sm font-medium transition-colors hover:bg-zinc-100 focus-visible:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900 dark:focus-visible:bg-zinc-900 sm:w-auto"
              >
                Ver planos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
