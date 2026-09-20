"use client";

import * as React from "react";
import Image from "next/image";
import { Code2, ExternalLink, BookOpen, SlidersHorizontal } from "lucide-react";
import { ItchIoIcon } from "@/components/portfolio/icons";
import { portfolioData } from "@/data/portfolio";

function ProjectScreenshot({
  src,
  alt,
  title,
}: {
  src: string;
  alt: string;
  title: string;
}) {
  const [hasError, setHasError] = React.useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-zinc-950/80 border-y border-zinc-800/50 flex items-center justify-center group/img">
      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center select-none bg-gradient-to-b from-[#131315] via-[#0e0e10] to-[#18181b]">
          <div className="w-10 h-10 rounded-lg bg-[#201f22] border border-[#27272a] flex items-center justify-center mb-2 shadow-inner">
            <Code2 className="w-5 h-5 text-[#10b981]/80" />
          </div>
          <span className="font-mono text-xs text-zinc-300 font-medium">
            {title}
          </span>
          <span className="font-mono text-[10px] text-zinc-600 mt-0.5">
            {"// preview screenshot"}
          </span>
        </div>
      )}
      {/* Subtle inner shadow / vignette */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_24px_rgba(0,0,0,0.65)] z-10" />
    </div>
  );
}

export function Projects() {
  const { projects } = portfolioData;

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
          <h2 className="font-sans text-2xl sm:text-3xl text-zinc-100 font-semibold tracking-tight">
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

      {/* 2x1 Responsive Grid or Balanced Single Column */}
      <div
        className={
          projects.items.length === 1
            ? "max-w-2xl mx-auto w-full"
            : "grid grid-cols-1 md:grid-cols-2 gap-6"
        }
      >
        {projects.items.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col rounded-xl bg-[#18181b] border border-[#27272a] hover:border-zinc-600/80 transition-all duration-200 overflow-hidden shadow-sm h-full"
          >
            {/* Terminal Window Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0e0e10] z-10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="font-mono text-[11px] text-zinc-400 ml-2">
                  {project.tag}
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#10b981] bg-[#10b981]/10 border border-[#10b981]/30 px-2 py-0.5 rounded-full font-medium">
                {project.versionBadge || project.badge}
              </span>
            </div>

            {/* Responsive Screenshot Container with fallback */}
            <ProjectScreenshot
              src={project.image}
              alt={project.title}
              title={project.title}
            />

            {/* Project Details Content */}
            <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-sans text-lg sm:text-xl font-semibold">
                    <a
                      href={project.codeUrl || project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-100 hover:text-emerald-400 transition-colors"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className="flex items-center gap-1">
                    <a
                      href={project.codeUrl || project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Código-fonte no GitHub"
                      className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-[#201f22] transition-colors"
                    >
                      <Code2 className="w-4 h-4" />
                    </a>
                    {project.itchUrl || project.demoUrl || (project.liveUrl && project.liveUrl !== "#") ? (
                      <a
                        href={project.itchUrl || project.demoUrl || project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Ver no Itch.io"
                        className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-[#201f22] transition-colors"
                      >
                        {project.itchUrl ? (
                          <ItchIoIcon className="w-4 h-4" />
                        ) : (
                          <ExternalLink className="w-4 h-4" />
                        )}
                      </a>
                    ) : (
                      <a
                        href={project.codeUrl || project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
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
