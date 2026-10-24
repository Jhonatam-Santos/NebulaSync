import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NebulaSync | Dashboard de Colaboração em Equipe com IA",
  description:
    "Centralize projetos, documentos e fluxos com IA em um único painel. Aumente a produtividade da sua equipe com automações inteligentes.",
  metadataBase: new URL("https://nebulasync.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NebulaSync | Dashboard de Colaboração em Equipe com IA",
    description:
      "Centralize projetos, documentos e fluxos com IA em um único painel. Aumente a produtividade da sua equipe com automações inteligentes.",
    url: "https://nebulasync.app",
    siteName: "NebulaSync",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NebulaSync | Dashboard de Colaboração em Equipe com IA",
    description:
      "Centralize projetos, documentos e fluxos com IA em um único painel. Aumente a produtividade da sua equipe com automações inteligentes.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-50">
        {children}
      </body>
    </html>
  );
}
