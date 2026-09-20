import * as React from "react";
import { Code2, ExternalLink, BookOpen, SlidersHorizontal } from "lucide-react";
import { portfolioData, type ProjectItem } from "@/data/portfolio";

export function Projects() {
  const { projects } = portfolioData;

  const renderProjectTelemetry = (project: ProjectItem) => {
    if (project.type === "topology" && project.topology) {
      return (
        <div className="space-y-3 my-auto py-1">
          <div className="grid grid-cols-3 gap-2 text-center font-mono text-xs">
            {project.topology.map((node) =>
              node.highlight ? (
                <div
                  key={node.label}
                  className="p-2 rounded-lg bg-[#00a572]/15 border border-[#10b981]/40 text-[#10b981]"
                >
                  <span className="text-[#10b981]/80 block text-[10px] tracking-wider uppercase mb-0.5">
                    {node.label}
                  </span>
                  <span className="font-semibold block truncate">
                    {node.value}
                  </span>
                </div>
              ) : (
                <div
                  key={node.label}
                  className="p-2 rounded-lg bg-[#201f22] border border-[#27272a] text-zinc-200"
                >
                  <span className="text-zinc-500 block text-[10px] tracking-wider uppercase mb-0.5">
                    {node.label}
                  </span>
                  <span className="block truncate">{node.value}</span>
                </div>
              )
            )}
          </div>
        </div>
      );
    }

    if (project.type === "gauge" && project.gauges) {
      return (
        <div className="space-y-2.5 my-auto py-1">
          {project.gauges.map((gauge) => (
            <div key={gauge.label} className="space-y-1">
              <div className="flex justify-between font-mono text-[10px] text-zinc-400">
                <span>{gauge.label}</span>
                <span className="text-zinc-200 font-medium">{gauge.value}</span>
              </div>
              <div className="w-full h-1.5 bg-[#201f22] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#10b981] rounded-full transition-all duration-500"
                  style={{ width: `${gauge.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <section className="py-12 sm:py-16 space-y-8" id="projects">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#10b981] tracking-widest uppercase font-medium">
              {projects.sectionOverline}
            </span>
            <span className="h-px w-8 bg-[#27272a]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-zinc-100 font-normal tracking-tight">
            {projects.title}
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400">
            {projects.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2 text-zinc-400 font-mono text-xs">
          <span className="inline-block w-2 h-2 rounded-full bg-[#10b981]" />
          <span>{projects.repoStatus}</span>
        </div>
      </div>

      {/* 2x1 Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.items.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col rounded-xl bg-[#18181b] border border-[#27272a] hover:border-zinc-600/80 transition-all duration-200 overflow-hidden shadow-sm h-full"
          >
            {/* Integrated Terminal Surface Header */}
            <div className="h-52 bg-[#0e0e10] p-4 sm:p-5 flex flex-col justify-between border-b border-[#27272a] relative overflow-hidden">
              {/* Terminal Window Bar */}
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <span className="font-mono text-[11px] text-zinc-400 ml-2">
                    {project.tag}
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#10b981] bg-[#10b981]/10 border border-[#10b981]/30 px-2 py-0.5 rounded-full font-medium">
                  {project.badge}
                </span>
              </div>

              {/* Dynamic Telemetry (Topology or Gauges) */}
              <div className="z-10">{renderProjectTelemetry(project)}</div>

              {/* Micro Terminal Output Line */}
              <div className="flex items-center justify-between font-mono text-[11px] text-zinc-400 border-t border-[#27272a]/70 pt-2 z-10">
                <span className="truncate">{project.terminalCommand}</span>
                <span className="text-[#10b981] font-semibold shrink-0 ml-2">
                  {project.statusText}
                </span>
              </div>

              {/* Subtle ambient light gradient */}
              <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-[#10b981]/5 rounded-full blur-2xl pointer-events-none" />
            </div>

            {/* Project Details Content */}
            <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-sans text-lg sm:text-xl text-zinc-100 font-semibold group-hover:text-[#10b981] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Repositório GitHub"
                      className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-[#201f22] transition-colors"
                    >
                      <Code2 className="w-4 h-4" />
                    </a>
                    {project.liveUrl && project.liveUrl !== "#" ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Demonstração Online"
                        className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-[#201f22] transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Documentação"
                        className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-[#201f22] transition-colors"
                      >
                        <BookOpen className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Sliders note & tech stack */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#10b981] shrink-0" />
                  <span className="truncate">{project.tuneNote}</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-full bg-[#201f22] border border-[#27272a] font-mono text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
