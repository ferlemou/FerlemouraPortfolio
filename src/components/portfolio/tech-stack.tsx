import * as React from "react";
import { Code2, Server, Globe, Terminal } from "lucide-react";
import { portfolioData, type TechCategory } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

export function TechStack() {
  const { techStack } = portfolioData;

  const renderCategoryIcon = (iconName: TechCategory["icon"]) => {
    switch (iconName) {
      case "code_blocks":
        return <Code2 className="w-5 h-5 text-[#10b981]" />;
      case "dns":
        return <Server className="w-5 h-5 text-[#10b981]" />;
      case "web":
        return <Globe className="w-5 h-5 text-[#10b981]" />;
      case "terminal":
        return <Terminal className="w-5 h-5 text-[#10b981]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#10b981]" />;
    }
  };

  return (
    <section className="py-12 sm:py-16 space-y-8" id="stack">
      {/* Section Header */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-[#10b981] tracking-widest uppercase font-medium">
            {techStack.sectionOverline}
          </span>
          <span className="h-px w-8 bg-[#27272a]" />
        </div>
        <h2 className="font-sans text-2xl sm:text-3xl text-zinc-100 font-semibold tracking-tight">
          {techStack.title}
        </h2>
        <p className="font-sans text-sm sm:text-base text-zinc-400">
          {techStack.subtitle}
        </p>
      </div>

      {/* 4 Bento Category Blocks (1-col on mobile, 2-col on desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {techStack.categories.map((category) => (
          <div
            key={category.id}
            className="p-5 sm:p-6 rounded-xl bg-[#18181b] border border-[#27272a] hover:border-zinc-700/60 transition-all flex flex-col justify-between space-y-4 shadow-sm"
          >
            {/* Card Top */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                {renderCategoryIcon(category.icon)}
                <h3 className="font-sans text-base sm:text-lg text-zinc-100 font-semibold tracking-tight">
                  {category.title}
                </h3>
              </div>
              <span className="font-mono text-[11px] text-zinc-500 bg-[#201f22] px-2.5 py-0.5 rounded-full border border-[#27272a]">
                {category.badge}
              </span>
            </div>

            {/* Badges Grid */}
            <div className="flex flex-wrap gap-2 pt-1">
              {category.skills.map((skill) =>
                skill.highlighted ? (
                  <Badge
                    key={skill.name}
                    variant="outline"
                    className="h-7 px-3 rounded-md bg-[#201f22] border-[#10b981]/40 text-zinc-100 font-mono text-xs font-medium flex items-center gap-1.5 hover:border-[#10b981] hover:bg-[#27272a] transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] shrink-0" />
                    <span>{skill.name}</span>
                  </Badge>
                ) : (
                  <Badge
                    key={skill.name}
                    variant="outline"
                    className="h-7 px-3 rounded-md bg-[#18181b] border-[#27272a] text-zinc-400 font-mono text-xs hover:border-zinc-600 hover:text-zinc-200 transition-colors"
                  >
                    <span>{skill.name}</span>
                  </Badge>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
