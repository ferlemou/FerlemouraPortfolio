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
      role: "Engenharia de Software",
      beaconText: "Estudante de CC / Buscando Estágio",
    },
    curlCommand: "curl -sL felipemoura.dev/cv",
    email: "ferlemoura@outlook.com",
    resumeUrl: "/curriculo.pdf",
    resumeLabel: "Currículo",
    mobileResumeLabel: "Baixar Currículo",
  },
  hero: {
    headlinePrefix: "Construindo sistemas escaláveis & ",
    headlineHighlight: "arquitetura distribuída.",
    subtext:
      "Estudante de Ciência da Computação focado em serviços backend, aplicações em tempo real e boas práticas de engenharia de software.",
    primaryCta: "Currículo",
    primaryCtaHref: "/curriculo.pdf",
    primaryCtaTarget: "_blank",
    secondaryCta: "Entrar em Contato",
    copiedFeedback: "Copiado",
    metrics: [
      {
        label: "STATUS",
        title: "Graduação",
        subtitle: "Mackenzie — Bacharelado em CC",
        icon: "school",
      },
      {
        label: "FUNDAMENTOS",
        title: "Estruturas de Dados",
        subtitle: "Algoritmos e POO",
        icon: "code",
      },
      {
        label: "FOCO ATUAL",
        title: "Fullstack & Sistemas",
        subtitle: "TypeScript, Next.js e C#",
        icon: "layers",
      },
      {
        label: "OBJETIVO",
        title: "Estágio em Software",
        subtitle: "Aberto a oportunidades",
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
        location: "São Paulo, SP",
        badge: "Em andamento",
        description:
          "Disciplinas: Estruturas de Dados, Algoritmos, Programação Orientada a Objetos, Sistemas de Banco de Dados. O período noturno possibilita dedicação integral a oportunidades de estágio e projetos de engenharia durante o dia.",
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
          "Foco em lógica de programação, C#, Unity e princípios de arquitetura de software, loops de renderização em tempo real e boas práticas de desenvolvimento.",
        active: false,
      },
    ],
  },
  techStack: {
    sectionOverline: "// TOOLKIT",
    title: "Stack Técnica & Ferramentas",
    subtitle:
      "Tecnologias e ferramentas utilizadas em microsserviços, backends e interfaces.",
    categories: [
      {
        id: "languages",
        title: "Linguagens",
        badge: "Foco Principal",
        icon: "code_blocks",
        skills: [
          { name: "Rust", highlighted: true },
          { name: "Go", highlighted: true },
          { name: "TypeScript", highlighted: true },
          { name: "C#", highlighted: true },
          { name: "C++20", highlighted: false },
          { name: "Python", highlighted: false },
          { name: "SQL", highlighted: false },
        ],
      },
      {
        id: "systems-backend",
        title: "Sistemas & Backend",
        badge: "Alta Performance",
        icon: "dns",
        skills: [
          { name: "Distributed Systems", highlighted: true },
          { name: "Docker & K8s", highlighted: true },
          { name: "gRPC / Protobuf", highlighted: false },
          { name: "Redis Cluster", highlighted: false },
          { name: "Apache Kafka", highlighted: false },
          { name: "PostgreSQL", highlighted: false },
          { name: "Linux Internals", highlighted: false },
        ],
      },
      {
        id: "web-frontend",
        title: "Web & Frontend",
        badge: "Interfaces Interativas",
        icon: "web",
        skills: [
          { name: "Next.js 14 / React", highlighted: true },
          { name: "Three.js / WebGL", highlighted: true },
          { name: "Tailwind CSS", highlighted: false },
          { name: "shadcn/ui", highlighted: false },
          { name: "WebSockets", highlighted: false },
          { name: "GraphQL", highlighted: false },
        ],
      },
      {
        id: "tools-workflow",
        title: "Ferramentas & Workflow",
        badge: "DevOps & Infra",
        icon: "terminal",
        skills: [
          { name: "Git / CLI", highlighted: true },
          { name: "GitHub Actions (CI/CD)", highlighted: true },
          { name: "Neovim (Lua)", highlighted: false },
          { name: "AWS (ECS, S3, IAM)", highlighted: false },
          { name: "Terraform", highlighted: false },
          { name: "Prometheus", highlighted: false },
        ],
      },
    ],
  },
  projects: {
    sectionOverline: "// PROJETOS_SELECIONADOS",
    title: "Desenvolvido com precisão",
    subtitle:
      "Sistemas de alta performance, brokers e motores de armazenamento construídos a partir de primeiros princípios.",
    repoStatus: "Repositórios públicos",
    items: [
      {
        id: "rico-atraves-do-tempo",
        title: "Rico Através do Tempo",
        tag: "aphronesia::game::rico",
        badge: "Unity 2022.3.62f3",
        versionBadge: "Unity 2022.3.62f3",
        image: "/projects/rico-atraves-do-tempo.webp",
        description:
          "Jogo de aventura e ação 2D multigênero desenvolvido colaborativamente como TCC pela equipe Aphronesia. Implementa mecânicas dinâmicas de dilatação temporal (Time.timeScale), física 2D com desativação seletiva de colisões, arquitetura orientada a eventos para desacoplamento de HUD/áudio e motor rítmico data-driven serializado via JSON.",
        tuneNote: "State machine em chefes, eventos desacoplados & save system em JSON",
        terminalCommand: "unity --projectPath ./RicoGame -version 2022.3.62f3",
        statusText: "SHIPPED",
        type: "image",
        techStack: ["Unity", "C#", "Game Development", "POO", "JSON", "Git"],
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
      { label: "projetos", href: "#projects" },
      { label: "ambiente", href: "#stack" },
      { label: "pgp-key", href: "#" },
    ],
  },
};
