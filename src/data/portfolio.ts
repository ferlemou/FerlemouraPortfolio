export interface NavLink {
  label: string;
  href: string;
}

export interface HeroMetric {
  label: string;
  title: string;
  subtitle: string;
  icon: "school" | "code" | "layers" | "target";
}

export interface EducationMilestone {
  id: string;
  degree: string;
  period: string;
  institution: string;
  location: string;
  badge: string;
  description: string;
  active: boolean;
}

export interface TechSkill {
  name: string;
  highlighted: boolean;
}

export interface TechCategory {
  id: string;
  title: string;
  badge: string;
  icon: "code_blocks" | "dns" | "web" | "terminal";
  skills: TechSkill[];
}

export interface ProjectTopologyItem {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface ProjectGaugeItem {
  label: string;
  value: string;
  percentage: number;
  badge?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tag: string;
  badge: string;
  versionBadge: string;
  image: string;
  description: string;
  tuneNote: string;
  terminalCommand?: string;
  statusText?: string;
  type?: "topology" | "gauge" | "image";
  topology?: ProjectTopologyItem[];
  gauges?: ProjectGaugeItem[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  codeUrl?: string;
  demoUrl?: string;
  itchUrl?: string;
}

export interface SocialLink {
  label: string;
  handle: string;
  url: string;
}

export interface PortfolioData {
  metadata: {
    title: string;
    description: string;
  };
  personal: {
    name: string;
    monogram: string;
    role: string;
    statusBadge: {
      prefix: string;
      role: string;
      beaconText: string;
    };
    curlCommand: string;
    email: string;
    resumeUrl: string;
    resumeLabel: string;
    mobileResumeLabel: string;
  };
  hero: {
    headlinePrefix: string;
    headlineHighlight: string;
    subtext: string;
    primaryCta: string;
    primaryCtaHref: string;
    primaryCtaTarget: string;
    secondaryCta: string;
    copiedFeedback: string;
    metrics: HeroMetric[];
  };
  nav: {
    links: NavLink[];
  };
  education: {
    sectionOverline: string;
    title: string;
    subtitle: string;
    milestones: EducationMilestone[];
  };
  techStack: {
    sectionOverline: string;
    title: string;
    subtitle: string;
    categories: TechCategory[];
  };
  projects: {
    sectionOverline: string;
    title: string;
    subtitle: string;
    repoStatus: string;
    items: ProjectItem[];
  };
  contact: {
    badge: string;
    title: string;
    description: string;
    email: string;
    calendarUrl: string;
    calendarText: string;
    copyFeedback: string;
    socialsHeading: string;
  };
  socials: {
    github: SocialLink;
    linkedin: SocialLink;
  };
  footer: {
    site: string;
    availability: string;
    copyright: string;
    links: NavLink[];
  };
}

export const portfolioData: PortfolioData = {
  metadata: {
    title:
      "Felipe Moura — Estágio em Engenharia de Software | Ciência da Computação",
    description:
      "Estudante de Ciência da Computação focado em sistemas backend, arquitetura limpa e desenvolvimento de software.",
  },
  personal: {
    name: "Felipe Moura",
    monogram: "FM",
    role: "Estágio em Engenharia de Software | Ciência da Computação",
    statusBadge: {
      prefix: "Disponível para estágio",
      role: "Ciência da Computação",
      beaconText: "Estudante de CC / Buscando Estágio",
    },
    curlCommand: "curl -sL felipemoura.dev/cv",
    email: "ferlemoura@outlook.com",
    resumeUrl: "/curriculo.pdf",
    resumeLabel: "Currículo",
    mobileResumeLabel: "Baixar Currículo",
  },
  hero: {
    headlinePrefix: "Ferle Moura | Engenharia de Software & ",
    headlineHighlight: "Sistemas Backend.",
    subtext:
      "Estudante de Ciência da Computação com raízes no desenvolvimento de jogos. Desenvolvo aplicações interativas e soluções modulares. Com conhecimentos em Unity (C#), TypeScript e Next.js.",
    primaryCta: "Currículo",
    primaryCtaHref: "/curriculo.pdf",
    primaryCtaTarget: "_blank",
    secondaryCta: "Entrar em Contato",
    copiedFeedback: "Copiado",
    metrics: [
      {
        label: "ACADÊMICO",
        title: "Ciência da Computação",
        subtitle: "Mackenzie (Noturno)",
        icon: "school",
      },
      {
        label: "FUNDAMENTOS",
        title: "Estruturas & POO",
        subtitle: "Algoritmos e Design Modular",
        icon: "code",
      },
      {
        label: "ECOSSISTEMA",
        title: "C#, TS & Next.js",
        subtitle: "Aplicações interativas e serviços",
        icon: "layers",
      },
      {
        label: "ALVO",
        title: "Estágio Dev",
        subtitle: "Software & Backend",
        icon: "target",
      },
    ],
  },
  nav: {
    links: [
      { label: "Educação", href: "#education" },
      { label: "Stack", href: "#stack" },
      { label: "Projetos", href: "#projects" },
      { label: "Contato", href: "#contact" },
    ],
  },
  education: {
    sectionOverline: "// TRAJETÓRIA",
    title: "Educação & Trajetória",
    subtitle:
      "Bases acadêmicas e formação técnica em desenvolvimento de software.",
    milestones: [
      {
        id: "mackenzie",
        degree: "Bacharelado em Ciência da Computação",
        period: "Previsão: 2030 (Noturno)",
        institution: "Universidade Presbiteriana Mackenzie",
        location: "Alphaville, SP",
        badge: "Em andamento",
        description:
          "Início da graduação com foco na fundamentação teórica da computação: algoritmos, lógica de programação e arquitetura de computadores. A rotina no período noturno viabiliza carga horária livre ao longo do dia para estágio em engenharia de software.",
        active: true,
      },
      {
        id: "fieb",
        degree: "Técnico em Desenvolvimento de Jogos Digitais",
        period: "Concluído em 2025",
        institution: "FIEB — Fundação Instituto de Educação de Barueri",
        location: "Barueri, SP",
        badge: "Curso Técnico",
        description:
          "Desenvolvimento em Unity e C# alicerçado em conceitos de Programação Orientada a Objetos e Eventos (POO & POE). Implementação de sistemas modulares no TCC através de eventos para gestão de interface, física 2D, áudio e ciclo de vida de entidades.",
        active: false,
      },
    ],
  },
  techStack: {
    sectionOverline: "// TOOLKIT",
    title: "Stack Técnica & Ferramentas",
    subtitle:
      "Tecnologias e ferramentas aplicadas na construção de sistemas modulares, backends e aplicações interativas.",
    categories: [
      {
        id: "languages",
        title: "Linguagens",
        badge: "Base Técnica",
        icon: "code_blocks",
        skills: [
          { name: "C#", highlighted: true },
          { name: "TypeScript", highlighted: true },
          { name: "JavaScript", highlighted: false },
          { name: "Python", highlighted: false },
          { name: "SQL", highlighted: false },
          { name: "HTML5", highlighted: false },
          { name: "CSS3", highlighted: false },
        ],
      },
      {
        id: "fullstack",
        title: "Arquitetura & Fullstack",
        badge: "Engenharia & Web",
        icon: "dns",
        skills: [
          { name: "Programação Orientada a Objetos (POO)", highlighted: true },
          { name: "C# / .NET", highlighted: true },
          { name: "TypeScript & Next.js", highlighted: true },
          { name: "Arquitetura em Camadas", highlighted: false },
          { name: "React", highlighted: false },
          { name: "Tailwind CSS", highlighted: false },
          { name: "APIs REST", highlighted: false },
        ],
      },
      {
        id: "game-dev",
        title: "Game Development",
        badge: "Engines & Lógica",
        icon: "web",
        skills: [
          { name: "Unity", highlighted: true },
          { name: "Godot 4", highlighted: true },
          { name: "C# Scripting", highlighted: false },
          { name: "Programação Orientada a Eventos (POE)", highlighted: false },
          { name: "Máquinas de Estados (FSM)", highlighted: false },
          { name: "Serialização JSON", highlighted: false },
          { name: "Física 2D", highlighted: false },
        ],
      },
      {
        id: "tools-workflow",
        title: "Ferramentas & Workflow",
        badge: "Ambiente Dev",
        icon: "terminal",
        skills: [
          { name: "Git / GitHub", highlighted: true },
          { name: "Linux / CLI", highlighted: true },
          { name: "JetBrains Rider", highlighted: false },
          { name: "VS Code", highlighted: false },
          { name: "Terminal", highlighted: false },
          { name: "AI Pair Programming", highlighted: false },
          { name: "Bash / Shell", highlighted: false },
          { name: "Vercel", highlighted: false },
        ],
      },
    ],
  },
  projects: {
    sectionOverline: "// PROJETOS_SELECIONADOS",
    title: "Desenvolvido com precisão",
    subtitle:
      "Projetos em destaque desenvolvidos com rigor técnico, arquitetura modular e atenção à performance.",
    repoStatus: "Repositórios públicos",
    items: [
      {
        id: "atraves-do-tempo",
        title: "Através do Tempo",
        tag: "aphronesia::game::atraves-do-tempo",
        badge: "Unity 2022.3.62f3",
        versionBadge: "Unity 2022.3.62f3",
        image: "/projects/rico-atraves-do-tempo.webp",
        description:
          "Jogo 2D multigênero desenvolvido em C# e Unity como projeto de conclusão (TCC) na FIEB, onde atuei como programador principal. Implementei uma arquitetura desacoplada utilizando o padrão Observer com eventos (Action) para comunicação entre UI, áudio e lógica de jogo, máquinas de estados finitos (FSM) para chefes, persistência em JSON (DontDestroyOnLoad) e um motor rítmico orientado a dados (data-driven).",
        tuneNote: "Arquitetura desacoplada por eventos, física 2D e persistência em JSON",
        terminalCommand: "unity --projectPath ./RicoGame -version 2022.3.62f3",
        statusText: "SHIPPED",
        type: "image",
        techStack: ["Unity", "C#", "Game Development", "POO", "POE", "FSM", "JSON", "Git"],
        githubUrl: "https://github.com/Aphronesia/RicoAtravesdoTempo",
        liveUrl: "https://ferlemou.itch.io/atravesdotempo",
        codeUrl: "https://github.com/Aphronesia/RicoAtravesdoTempo",
        demoUrl: "https://ferlemou.itch.io/atravesdotempo",
        itchUrl: "https://ferlemou.itch.io/atravesdotempo",
      },
    ],
  },
  contact: {
    badge: "Aberto para oportunidades de estágio",
    title: "Vamos construir algo extraordinário juntos",
    description:
      "Atualmente busco oportunidades de estágio em desenvolvimento de software e sistemas backend. Entre em contato ou conecte-se pelas redes.",
    email: "ferlemoura@outlook.com",
    calendarUrl: "mailto:ferlemoura@outlook.com",
    calendarText: "Agendar Conversa",
    copyFeedback: "E-mail copiado!",
    socialsHeading: "Redes e Links",
  },
  socials: {
    github: {
      label: "github.com/ferlemou",
      handle: "ferlemou",
      url: "https://github.com/ferlemou",
    },
    linkedin: {
      label: "linkedin.com/in/ferlemoura",
      handle: "ferlemoura",
      url: "https://linkedin.com/in/ferlemoura",
    },
  },
  footer: {
    site: "felipemoura.dev",
    availability: "aberto a oportunidades de estágio",
    copyright: "© 2026 Felipe Moura. Desenvolvido com foco e simplicidade.",
    links: [
      { label: "educação", href: "#education" },
      { label: "projetos", href: "#projects" },
      { label: "stack", href: "#stack" },
      { label: "contato", href: "#contact" },
      { label: "código-fonte", href: "https://github.com/ferlemou/FerlemouraPortfolio" },
    ],
  },
};
