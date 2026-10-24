"use client";

import { useEffect, useState } from "react";

export function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-zinc-200 py-10 dark:border-zinc-800">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:text-left sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500">
            <span className="text-xs font-semibold text-white">NS</span>
          </div>
          <span className="font-display text-base font-semibold tracking-tight">NebulaSync</span>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          © {year} NebulaSync. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <a
            href="#"
            className="text-zinc-500 transition-colors hover:text-zinc-900 focus-visible:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-50 dark:focus-visible:text-zinc-50"
          >
            Política de Privacidade
          </a>
          <a
            href="#"
            className="text-zinc-500 transition-colors hover:text-zinc-900 focus-visible:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-50 dark:focus-visible:text-zinc-50"
          >
            Termos de Uso
          </a>
        </div>
      </div>
    </footer>
  );
}
