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
  description: string;
  tuneNote: string;
  terminalCommand: string;
  statusText: string;
  type: "topology" | "gauge";
  topology?: ProjectTopologyItem[];
  gauges?: ProjectGaugeItem[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
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
    twitter: SocialLink;
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
    email: "felipemoura.dev@gmail.com",
    resumeUrl: "#",
    resumeLabel: "Currículo",
    mobileResumeLabel: "Baixar Currículo",
  },
  hero: {
    headlinePrefix: "Construindo sistemas escaláveis & ",
    headlineHighlight: "arquitetura distribuída.",
    subtext:
      "Estudante de Ciência da Computação focado em serviços backend, aplicações em tempo real e boas práticas de engenharia de software.",
    primaryCta: "Ver Projetos",
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
        id: "hyperstream",
        title: "HyperStream",
        tag: "hyperstream::broker::v2",
        badge: "0.42ms p99",
        description:
          "Broker de eventos distribuído em tempo real desenvolvido em Go. Projetado para integrar conexões de sockets com partições Kafka, reduzindo a propagação de telemetria para menos de 1ms com 100.000 clientes paralelos.",
        tuneNote: "Compactação LSM de buffers, pool de memória zero-copy",
        terminalCommand: "hyperstream --nodes=12 --buffer=2GB",
        statusText: "HEALTHY",
        type: "topology",
        topology: [
          { label: "INGRESS", value: "100k Conns", highlight: false },
          { label: "SHUFFLE", value: "Raft Consensus", highlight: true },
          { label: "EGRESS", value: "Sub-ms Fanout", highlight: false },
        ],
        techStack: ["Go", "Kafka", "Redis", "WebSockets", "Docker"],
        githubUrl: "https://github.com/ferlemou/hyperstream",
        liveUrl: "#",
      },
      {
        id: "auradb",
        title: "AuraDB",
        tag: "auradb::engine::stats",
        badge: "Rust 2024",
        description:
          "Mecanismo de armazenamento chave-valor embarcado desenvolvido em Rust baseado em Log-Structured Merge-trees (LSM). Conta com compactação SSTable multinível, persistência WAL e desserialização binária zero-allocation.",
        tuneNote: "Compactação tiered personalizada & eleição de líder Raft",
        terminalCommand: "auradb-bench --ops=10M",
        statusText: "842,190 ops/sec",
        type: "gauge",
        gauges: [
          {
            label: "MEMTABLE SIZE (SSTable Spill at 64MB)",
            value: "48.2 MB / 64 MB",
            percentage: 75,
          },
          {
            label: "BLOOM FILTER FP RATE",
            value: "0.0084%",
            percentage: 18,
            badge: "TieredCompaction",
          },
        ],
        techStack: ["Rust", "Raft", "gRPC", "Protobuf", "Linux"],
        githubUrl: "https://github.com/ferlemou/auradb",
        liveUrl: "#",
      },
    ],
  },
  contact: {
    badge: "Aberto para oportunidades de estágio",
    title: "Vamos construir algo extraordinário juntos",
    description:
      "Atualmente busco oportunidades de estágio em desenvolvimento de software e sistemas backend. Entre em contato ou conecte-se pelas redes.",
    email: "felipemoura.dev@gmail.com",
    calendarUrl: "mailto:felipemoura.dev@gmail.com",
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
      label: "linkedin.com/in/ferlemou",
      handle: "ferlemou",
      url: "https://linkedin.com/in/ferlemou",
    },
    twitter: {
      label: "@ferlemou",
      handle: "@ferlemou",
      url: "https://x.com/ferlemou",
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
