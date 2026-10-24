import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "O NebulaSync unificou nossas ferramentas e nos devolveu horas por semana. O assistente com IA virou parte essencial da nossa rotina.",
    name: "Marina Costa",
    role: "Product Lead • Vertex Labs",
  },
  {
    quote:
      "Clareza, velocidade e organização em um só lugar. Conseguimos alinhar todo o time sem reuniões desnecessárias.",
    name: "Rafael Mendes",
    role: "Head of Ops • Atlas Co.",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">O que dizem as equipes</h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Resultados reais de times que adotaram o NebulaSync.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 lg:mt-12 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <Quote className="h-5 w-5 text-indigo-500" aria-hidden="true" />
              <blockquote className="mt-4 text-base text-zinc-700 dark:text-zinc-300">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-sm font-medium text-white">
                  {testimonial.name
                    .split(" ")
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-medium">{testimonial.name}</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500">{testimonial.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
