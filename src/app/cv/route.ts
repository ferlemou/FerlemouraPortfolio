import { NextRequest, NextResponse } from "next/server";

const ASCII_CV = `================================================================================
FELIPE ROBERTO DE MOURA
Software Engineering Intern | Computer Science Undergraduate
================================================================================
Email:     ferlemoura@outlook.com
GitHub:    https://github.com/ferlemou
LinkedIn:  https://linkedin.com/in/ferlemoura
Portfolio: https://ferlemoura.vercel.app

--------------------------------------------------------------------------------
PROFILE SUMMARY
--------------------------------------------------------------------------------
Computer Science undergraduate student with strong foundations in software
engineering, clean architecture, and systems development. Experienced in C#,
Unity game engine architecture, TypeScript, and modern web systems.

--------------------------------------------------------------------------------
EDUCATION
--------------------------------------------------------------------------------
B.S. in Computer Science                                           Expected 2030
Universidade Presbiteriana Mackenzie (Night Shift)               In Progress

Technical Degree in Digital Game Development                                2025
FIEB (Fundacao Instituto de Educacao de Barueri)                       Completed

--------------------------------------------------------------------------------
TECHNICAL SKILLS
--------------------------------------------------------------------------------
Languages:       C#, TypeScript, JavaScript, Python, C++
Frameworks:      Next.js, React, Node.js, Tailwind CSS
Game Engine:     Unity (2022.3 LTS), URP 2D, Component-Based Architecture
Patterns & Arch: Observer Pattern, Finite State Machines (FSM), Singleton,
                 Interface Segregation, Event-Driven Architecture, REST APIs
Tools & DevOps:  Git, GitHub, Docker, Linux (Bash/CLI), Neovim, Vercel

--------------------------------------------------------------------------------
FEATURED PROJECT
--------------------------------------------------------------------------------
Rico: Atraves do Tempo (Unity 2022.3.62f3 LTS, C#)
Role: Lead Programmer | Team: Aphronesia
Repo: https://github.com/Aphronesia/RicoAtravesdoTempo
Play: https://ferlemou.itch.io/atravesdotempo

Multi-genre 2D adventure game developed as a Capstone Project (TCC) at FIEB.
Engineered core gameplay loops, time dilation mechanics (Time.timeScale), 2D
physics collision management, boss fight FSM (Attacking -> Tired -> Damaged ->
Die), JSON data-driven rhythm engine (RitmoJson), and persistent Save/Load
system via Application.persistentDataPath.
================================================================================
`;

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
