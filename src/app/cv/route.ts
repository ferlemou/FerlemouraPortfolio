import { NextRequest, NextResponse } from "next/server";
import { portfolioData } from "@/data/portfolio";

function getAsciiCv(): string {
  const { personal, socials, education, techStack, projects } = portfolioData;

  const mackenzie = education.milestones.find((m) => m.id === "mackenzie");
  const fieb = education.milestones.find((m) => m.id === "fieb");
  const featured = projects.items[0];

  const languages =
    techStack.categories.find((c) => c.id === "languages")?.skills.map((s) => s.name).join(", ") ||
    "C#, TypeScript, JavaScript, Python, SQL, HTML5, CSS3";

  const fullstack =
    techStack.categories.find((c) => c.id === "fullstack")?.skills.map((s) => s.name).join(", ") ||
    "POO, C# / .NET, TypeScript & Next.js, React, APIs REST";

  const gameDev =
    techStack.categories.find((c) => c.id === "game-dev")?.skills.map((s) => s.name).join(", ") ||
    "Unity (2022.3 LTS), Godot 4, C# Scripting, FSM, POE";

  return `================================================================================
FELIPE ROBERTO DE MOURA
Estágio em Engenharia de Software | Sistemas Backend
================================================================================
E-mail:    ${personal.email}
GitHub:    ${socials.github.url}
LinkedIn:  ${socials.linkedin.url}
Portfolio: https://${portfolioData.footer.site}

--------------------------------------------------------------------------------
RESUMO PROFISSIONAL
--------------------------------------------------------------------------------
Estudante de Ciência da Computação com bases sólidas em engenharia de software,
arquitetura limpa e programação de sistemas. Experiência prática em C#,
arquitetura na engine Unity, TypeScript, Next.js e desenvolvimento de aplicações
interativas e modulares.

--------------------------------------------------------------------------------
FORMAÇÃO ACADÊMICA
--------------------------------------------------------------------------------
${mackenzie?.degree || "Bacharelado em Ciência da Computação"}
${mackenzie?.institution || "Universidade Presbiteriana Mackenzie"} (${mackenzie?.period || "Previsão: 2030 (Noturno)"})
Status: ${mackenzie?.badge || "Em andamento"} - ${mackenzie?.location || "Alphaville, SP"}

${fieb?.degree || "Técnico em Desenvolvimento de Jogos Digitais"}
${fieb?.institution || "FIEB — Fundação Instituto de Educação de Barueri"} (${fieb?.period || "Concluído em 2025"})
Status: ${fieb?.badge || "Curso Técnico"} - ${fieb?.location || "Barueri, SP"}

--------------------------------------------------------------------------------
COMPETÊNCIAS TÉCNICAS
--------------------------------------------------------------------------------
Linguagens:              ${languages}
Arquitetura & Fullstack: ${fullstack}
Game Development:        ${gameDev}
Ferramentas & Workflow:  Git, GitHub, Linux / CLI, JetBrains Rider, VS Code,
                         Bash / Shell, Terminal, Vercel

--------------------------------------------------------------------------------
PROJETO EM DESTAQUE
--------------------------------------------------------------------------------
${featured?.title || "Através do Tempo"} (${featured?.versionBadge || "Unity 2022.3.62f3"}, C#)
Função: Programador Principal | Equipe: Aphronesia
Repositório:  ${featured?.codeUrl || "https://github.com/Aphronesia/RicoAtravesdoTempo"}
Jogar Online: ${featured?.itchUrl || "https://ferlemou.itch.io/atravesdotempo"}

Jogo 2D multigênero desenvolvido como Trabalho de Conclusão de Curso (TCC)
na FIEB. Implementação de arquitetura desacoplada utilizando Observer Pattern
com eventos (Action) para HUD e áudio, máquinas de estados finitos (FSM)
para chefes, dilatação temporal (Time.timeScale), motor rítmico data-driven
via arquivos JSON (RitmoJson.cs) e persistência via persistentDataPath.
================================================================================
`;
}

export async function GET(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";
  const isCli = /curl|wget|httpie/i.test(userAgent);

  if (isCli) {
    return new NextResponse(getAsciiCv(), {
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
