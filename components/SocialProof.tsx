const logos = [
  "Vertex Labs",
  "Atlas Co.",
  "Nordic Forms",
  "Forma Studio",
  "Lumen Group",
];

export function SocialProof() {
  return (
    <section className="py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-zinc-500 dark:text-zinc-500">
          Usado por equipes modernas em todo o Brasil
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-medium text-zinc-400 dark:text-zinc-600">
          {logos.map((logo) => (
            <span key={logo} className="tracking-tight">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
