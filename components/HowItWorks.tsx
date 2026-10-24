import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Conecte sua equipe",
    description: "Convide membros, crie espaços por projeto e defina permissões em poucos cliques.",
  },
  {
    number: "02",
    title: "Organize e automatize",
    description: "Crie fluxos, vincule documentos e deixe o assistente gerar resumos e lembretes para você.",
  },
  {
    number: "03",
    title: "Acompanhe resultados",
    description: "Monitore progresso, prazos e entregas com painéis claros e atualizações em tempo real.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Como funciona</h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Comece em minutos com um fluxo simples e intuitivo.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 lg:mt-12 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl font-semibold text-zinc-200 dark:text-zinc-800">
                  {step.number}
                </span>
                <CheckCircle2 className="h-5 w-5 text-emerald-500" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
