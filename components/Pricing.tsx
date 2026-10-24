import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "R$ 49",
    period: "/mês",
    description: "Ideal para pequenos times começando.",
    features: ["Até 5 membros", "3 projetos", "Assistente com IA (50 usos/mês)", "Base de conhecimento"],
    cta: "Começar agora",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "R$ 149",
    period: "/mês",
    description: "O melhor equilíbrio para times em crescimento.",
    features: [
      "Até 20 membros",
      "Projetos ilimitados",
      "Assistente com IA (ilimitado)",
      "Permissões granulares",
      "Integrações prioritárias",
    ],
    cta: "Teste grátis por 14 dias",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "Sob consulta",
    period: "",
    description: "Para empresas com necessidades avançadas.",
    features: ["Membros ilimitados", "SSO/SAML", "Políticas personalizadas", "Suporte dedicado", "SLA garantido"],
    cta: "Falar com vendas",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="precos" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Preços simples e transparentes</h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Escolha o plano certo para o momento da sua equipe. Cancele quando quiser.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 lg:mt-12 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col overflow-hidden rounded-2xl border p-6 ${
                plan.highlighted
                  ? "border-indigo-500 shadow-lg shadow-indigo-500/10 dark:border-indigo-400"
                  : "border-zinc-200 dark:border-zinc-800"
              } bg-white dark:bg-zinc-950`}
            >
              {plan.highlighted && (
                <div className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-3 py-1 text-xs font-medium text-white">
                  Recomendado
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{plan.name}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{plan.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-semibold tracking-tight">{plan.price}</span>
                  {plan.period && <span className="text-sm text-zinc-500 dark:text-zinc-500">{plan.period}</span>}
                </div>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-emerald-500" aria-hidden="true" />
                    <span className="text-zinc-600 dark:text-zinc-400">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#teste-gratis"
                className={`mt-8 inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none ${
                  plan.highlighted
                    ? "bg-zinc-900 text-white hover:bg-zinc-800 focus-visible:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 dark:focus-visible:bg-zinc-100"
                    : "border border-zinc-200 hover:bg-zinc-100 focus-visible:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900 dark:focus-visible:bg-zinc-900"
                }`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
