import * as React from "react";
import { portfolioData } from "@/data/portfolio";

export function Education() {
  const { education } = portfolioData;

  return (
    <section className="py-12 sm:py-16 space-y-8" id="education">
      {/* Section Header */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-[#10b981] tracking-widest uppercase font-medium">
            {education.sectionOverline}
          </span>
          <span className="h-px w-8 bg-[#27272a]" />
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl text-zinc-100 font-normal tracking-tight">
          {education.title}
        </h2>
        <p className="font-sans text-sm sm:text-base text-zinc-400">
          {education.subtitle}
        </p>
      </div>

      {/* Minimalist Vertical Timeline directly on canvas */}
      <div className="relative pl-6 sm:pl-8 border-l border-[#27272a] space-y-10 ml-3 sm:ml-4">
        {education.milestones.map((milestone) => (
          <div key={milestone.id} className="relative group">
            {/* Timeline Ring Indicator */}
            {milestone.active ? (
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#09090b] border-2 border-[#10b981] shadow-[0_0_10px_rgba(16,185,129,0.5)] group-hover:bg-[#10b981] transition-colors" />
            ) : (
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#09090b] border-2 border-[#3f3f46] group-hover:border-[#10b981] transition-colors" />
            )}

            {/* Content */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="font-sans text-lg text-zinc-100 font-semibold tracking-tight">
                  {milestone.degree}
                </h3>
                <span
                  className={`font-mono text-xs font-medium ${
                    milestone.active ? "text-[#10b981]" : "text-zinc-500"
                  }`}
                >
                  {milestone.period}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-zinc-400 text-sm">
                <span className="text-zinc-200 font-medium">
                  {milestone.institution}
                </span>
                <span>•</span>
                <span className="text-zinc-400 text-xs font-mono">
                  {milestone.location}
                </span>
                <span>•</span>
                <span className="text-[#10b981] font-mono text-xs bg-[#18181b] border border-[#27272a] px-2 py-0.5 rounded-full font-medium">
                  {milestone.badge}
                </span>
              </div>

              <p className="font-sans text-sm text-zinc-400 max-w-3xl leading-relaxed pt-1">
                {milestone.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
