# NebulaSync - Landing Page Comercial

Landing page de alto desempenho para o produto SaaS fictício **NebulaSync** (Dashboard de Colaboração em Equipe com IA). Desenvolvida com foco em performance, SEO, acessibilidade e experiência responsiva.

## Stack Tecnológico

- [Next.js 16](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (apenas para animações sutis quando necessário)
- [Lucide React](https://lucide.dev/)
- [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) (Inter e Sora)

## Pré-requisitos

- Node.js 18.18+ ou superior
- npm

## Comandos para execução local

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Build para produção

```bash
npm run build
npm start
```

## Estrutura do Projeto

```
.
├── app/
│   ├── globals.css
│   ├── layout.tsx        # Metadados, fontes e configuração global
│   ├── page.tsx          # Composição de todas as seções
│   ├── robots.ts         # Configuração robots.txt
│   └── sitemap.ts        # Configuração sitemap.xml
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── SocialProof.tsx
│   ├── FeaturesSection.tsx
│   ├── HowItWorks.tsx
│   ├── Testimonials.tsx
│   ├── Pricing.tsx
│   ├── FinalCta.tsx
│   └── Footer.tsx
├── public/               # Assets estáticos
└── .env.example          # Variáveis de ambiente (placeholders)
```

## Decisões de Otimização para Lighthouse

### Performance
- **Sem imagens pesadas na Hero**: Utilizamos apenas gradientes CSS puros e elementos SVG inline/geométricos, evitando requisições desnecessárias e melhorando o LCP.
- **next/font com `display: swap`**: Fontes carregadas otimamente pelo Next.js, eliminando FOIT e reduzindo layout shift.
- **Carregamento seletivo**: Framer Motion foi adicionado às dependências, mas não utilizado em componentes críticos da primeira dobra. Caso seja adicionado futuramente, deve ser lazy-loaded em seções abaixo da dobra.
- **Animações leves**: Efeitos decorativos com CSS (`blur`, `gradient`) ao invés de animações JS pesadas.
- **Componentes pequenos e modulares**: Reduzindo o tamanho do bundle inicial.

### Core Web Vitals
- **LCP**: Elementos textuais otimizados na Hero, sem imagens acima da dobra.
- **CLS**: Todos os elementos decorativos têm dimensões implícitas ou são puramente visuais com `aria-hidden`. Componentes estáticos evitam mudanças de layout.
- **INP/FID**: JavaScript mínimo no client-side (apenas Navbar com interatividade leve para tema). Sem bibliotecas pesadas carregadas na primeira dobra.

### SEO
- **Metadados completos**: `title`, `description`, `openGraph`, `twitter`, `robots` e `metadataBase` configurados no `layout.tsx`.
- **Semântica HTML**: Uso de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<footer>`.
- **Acessibilidade**: `alt` em elementos visuais relevantes, `aria-hidden` em ícones decorativos, `aria-label` em botões/links críticos.
- **Arquivos técnicos**: `sitemap.ts` e `robots.ts` gerados automaticamente pelo App Router.
- **Linguagem correta**: `lang="pt-BR"`.

### Responsividade e Tema
- **Mobile-first**: Breakpoints Tailwind (`sm:`, `md:`, `lg:`) com layout em coluna única para mobile.
- **Dark mode**: Suporte via `class` (`dark:`) com persistência no `localStorage` e detecção de preferência do sistema.
- **Container padronizado**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` em todas as seções.

## Deploy

Este projeto está pronto para deploy na [Vercel](https://vercel.com/). Basta importar o repositório e o build será executado automaticamente.
