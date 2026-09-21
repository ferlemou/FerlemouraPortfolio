# FerlemouraPortfolio

Portfolio de engenharia de software e showcase de sistemas desenvolvido com Next.js App Router, TypeScript e Tailwind CSS.

- Produção: https://ferlemoura.vercel.app/
- Repositório no GitHub: https://github.com/ferlemou/FerlemouraPortfolio

---

## Arquitetura e Destaques Técnicos

### 1. Route Handler CLI-First (`src/app/cv/route.ts`)

A aplicação implementa um Route Handler acessível em `/cv`, projetado prioritariamente para o terminal. O endpoint realiza a inspeção em runtime do header HTTP `User-Agent` para entregar conteúdo diferenciado conforme o tipo de cliente:

- Clientes de linha de comando (`curl`, `wget`, `httpie`): Quando o `User-Agent` corresponde a utilitários CLI, a rota retorna um currículo em texto plano mono-spaced ASCII sem buffering (`Content-Type: text/plain; charset=utf-8`) com diretivas de cache (`max-age=3600`).
- Navegadores Web: Requisições provenientes de browsers convencionais recebem um redirect HTTP 307 Temporary Redirect diretamente para o documento estático em `/curriculo.pdf`.

Exemplo de execução via terminal:

```bash
curl -sL ferlemoura.vercel.app/cv
```

Resumo da lógica do Route Handler:

```typescript
export async function GET(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";
  const isCli = /curl|wget|httpie/i.test(userAgent);

  if (isCli) {
    return new NextResponse(ASCII_CV, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  }

  const redirectUrl = new URL("/curriculo.pdf", request.url);
  return NextResponse.redirect(redirectUrl, 307);
}
```

### 2. Configuração Centralizada e Tipada (`src/data/portfolio.ts`)

Todo o conteúdo do portfolio, marcos de trajetória, toolkit técnico e metadados de projetos estão desacoplados dos componentes de apresentação, centralizados em `src/data/portfolio.ts`.

- Estabelece contratos estritos em TypeScript por meio de interfaces (`ProjectItem`, `PortfolioData`, `HeroMetric`, `MilestoneItem`).
- Elimina strings hardcoded inline nos componentes JSX.
- Garante validação em tempo de compilação (build time) para URLs, caminhos de assets e badges técnicos.

### 3. Pipeline de Renderização e Performance

- Static Site Generation (SSG): As páginas principais são compiladas em HTML e manifests estáticos durante o build através do Next.js App Router e Turbopack.
- Isolamento de Rotas Dinâmicas: O Route Handler `/cv` opera sob demanda (`server-rendered on demand`), enquanto a página inicial e a rota de fallback operam como assets estáticos servidos via edge cache.
- Otimização Tipográfica: Sistema Pure Geist configurado com `next/font/google` (`Geist` para hierarquias sans-serif e `JetBrains_Mono` para telemetria, comandos de terminal e badges de código), eliminando layout shifts (CLS).
- Assets Visuais e Mídia Responsiva: Os cards de projetos utilizam o componente Next.js `<Image />` com formato WebP, dimensionamento responsivo, vinheta interna e estado de fallback estruturado em caso de falha de carregamento.

---

## Stack Técnica

| Camada | Tecnologias |
| :--- | :--- |
| Framework | Next.js 16 (App Router, Turbopack) |
| Runtime e Linguagem | Node.js 20+, TypeScript 5 (Strict Mode) |
| UI e Estilização | React 19, Tailwind CSS v4, Lucide React |
| Primitivos de Componentes | Radix UI, shadcn/ui |
| Hospedagem e Edge CDN | Vercel Platform |
| CLI e Sistema Operacional | Linux, Bash, Utilitários POSIX |

---

## Configuração e Ambiente Local

### Pré-requisitos
- Node.js 20.x ou superior
- npm 10.x ou superior
- Git

### Instalação e Execução

1. Clonar o repositório:
   ```bash
   git clone https://github.com/ferlemou/FerlemouraPortfolio.git
   cd FerlemouraPortfolio
   ```

2. Instalar as dependências do projeto:
   ```bash
   npm install
   ```

3. Iniciar o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   A aplicação estará acessível em `http://localhost:3000`.

4. Executar checagens de qualidade e validação de build:
   ```bash
   # Executar validação com ESLint
   npm run lint

   # Executar o build de produção do Next.js
   npm run build
   ```

---

## Projeto em Destaque: Através do Tempo

O portfolio destaca *Através do Tempo*, um jogo digital 2D multigênero desenvolvido como Trabalho de Conclusão de Curso (TCC) na FIEB pela equipe Aphronesia:

- Tecnologia: Unity 2022.3.62f3 LTS, C#, Universal Render Pipeline (URP 2D).
- Papel de Engenharia: Programador Principal (Felipe Moura). Responsável pela arquitetura de software em C#, sistemas de física e colisões, mecânicas dinâmicas de todos os minigames e persistência de dados.
- Padrões Arquiteturais:
  - Observer Pattern: Utiliza instâncias de `public static event Action` para desacoplar a lógica de gameplay dos indicadores de HUD e canais de áudio.
  - Finite State Machine (FSM): Gerencia as fases comportamentais do chefe (`Attacking`, `Tired`, `Damaged`, `Die`) com janelas determinísticas de transição e vulnerabilidade.
  - Motor Rítmico Data-Driven: Mapeamento de tempos rítmicos serializado em arquivos JSON (`RitmoJson.cs`), integrado a extensões customizadas de inspector no Unity Editor para calibragem de faixas.
  - Pipeline de Persistência: Serialização JSON via `Application.persistentDataPath`, persistindo coordenadas no mapa de fases e status de conclusão.
- Links do Projeto:
  - Código-Fonte: https://github.com/Aphronesia/RicoAtravesdoTempo
  - Versão Jogável (Itch.io): https://ferlemou.itch.io/atravesdotempo
