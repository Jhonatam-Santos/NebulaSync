import { Bot, FileText, KanbanSquare, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: KanbanSquare,
    title: "Painel unificado",
    description: "Visualize sprints, tarefas e entregas em um único local, sem trocar entre ferramentas.",
  },
  {
    icon: Bot,
    title: "Assistente com IA",
    description: "Gere resumos, atas e próximos passos automaticamente com base nas conversas e documentos.",
  },
  {
    icon: FileText,
    title: "Base de conhecimento",
    description: "Centralize documentos com busca semântica para encontrar respostas em segundos.",
  },
  {
    icon: ShieldCheck,
    title: "Permissões granulares",
    description: "Controle quem vê, edita ou compartilha cada espaço com níveis de acesso flexíveis.",
  },
];

export function FeaturesSection() {
  return (
    <section id="recursos" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Tudo que sua equipe precisa para colaborar
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Recursos pensados para acelerar a comunicação, organizar o trabalho e manter o conhecimento acessível.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-indigo-500/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500/10 to-violet-500/10 text-indigo-600 dark:text-indigo-400">
                <feature.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{feature.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
