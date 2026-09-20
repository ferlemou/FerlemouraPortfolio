"use client";

import * as React from "react";
import {
  FileText,
  Mail,
  Terminal,
  Copy,
  Check,
  GraduationCap,
  Code2,
  Layers,
  Target,
} from "lucide-react";
import { portfolioData, type HeroMetric } from "@/data/portfolio";

export function Hero() {
  const { personal, hero } = portfolioData;
  const [copied, setCopied] = React.useState(false);

  const handleCopyCurl = async () => {
    try {
      await navigator.clipboard.writeText(personal.curlCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const renderMetricIcon = (iconName: HeroMetric["icon"]) => {
    switch (iconName) {
      case "school":
        return <GraduationCap className="w-4 h-4 text-[#10b981]" />;
      case "code":
        return <Code2 className="w-4 h-4 text-[#10b981]" />;
      case "layers":
        return <Layers className="w-4 h-4 text-[#10b981]" />;
      case "target":
        return <Target className="w-4 h-4 text-[#10b981]" />;
      default:
        return <Terminal className="w-4 h-4 text-[#10b981]" />;
    }
  };

  return (
    <section className="flex flex-col pt-4 pb-12 sm:pb-16 space-y-8">
      {/* Top Ambient Glow */}
      <div className="relative w-full">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-gradient-to-b from-[#10b981]/10 via-[#10b981]/5 to-transparent blur-3xl -z-10 pointer-events-none" />
      </div>

      {/* Availability Status Pill */}
      <div className="flex items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#201f22] border border-[#27272a] shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
          </span>
          <span className="font-sans text-xs text-zinc-400 tracking-tight">
            {personal.statusBadge.prefix}
          </span>
          <span className="text-zinc-600 font-mono text-xs">/</span>
          <span className="font-sans text-xs text-[#10b981] font-medium">
            {personal.statusBadge.role}
          </span>
        </div>
      </div>

      {/* Headline & Subtext */}
      <div className="space-y-4 max-w-4xl">
        <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-zinc-100 font-semibold tracking-tight leading-tight lg:leading-[1.1]">
          {hero.headlinePrefix}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-[#10b981]">
            {hero.headlineHighlight}
          </span>
        </h1>
        <p className="font-sans text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
          {hero.subtext}
        </p>
      </div>

      {/* Action Row */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <a
          href={hero.primaryCtaHref || "/curriculo.pdf"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-zinc-950 font-sans text-sm font-medium hover:bg-zinc-200 transition-all shadow-sm group"
        >
          <FileText className="w-4 h-4 text-zinc-950 transition-transform group-hover:scale-105" />
          <span>{hero.primaryCta}</span>
        </a>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#201f22] border border-[#27272a] text-zinc-200 font-sans text-sm font-medium hover:bg-[#2a2a2c] hover:text-white transition-all"
        >
          <Mail className="w-4 h-4 text-zinc-400" />
          <span>{hero.secondaryCta}</span>
        </a>

        {/* Copyable Terminal Curl Pill */}
        <button
          type="button"
          onClick={handleCopyCurl}
          aria-label="Copiar comando curl"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0e0e10] border border-[#27272a] text-zinc-400 hover:text-zinc-200 hover:border-zinc-600 transition-all text-sm group"
        >
          <Terminal className="w-4 h-4 text-[#10b981]" />
          <span className="font-mono text-xs">{personal.curlCommand}</span>
          {copied ? (
            <span className="inline-flex items-center gap-1 text-[#10b981] font-mono text-xs ml-1">
              <Check className="w-3.5 h-3.5" />
              <span>{hero.copiedFeedback}</span>
            </span>
          ) : (
            <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300 ml-1 transition-colors" />
          )}
        </button>
      </div>

      {/* 4 Metric Cards Grid (2x2 Mobile, 4x1 Desktop) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-8 border-t border-[#27272a]/70">
        {hero.metrics.map((metric) => (
          <div
            key={metric.label}
            className="flex flex-col p-4 rounded-xl bg-[#18181b]/70 border border-[#27272a]/70 hover:border-[#27272a] transition-all"
          >
            <div className="flex items-center justify-between text-zinc-500 mb-1.5">
              <span className="font-mono text-[10px] tracking-wider uppercase font-semibold">
                {metric.label}
              </span>
              {renderMetricIcon(metric.icon)}
            </div>
            <span className="font-sans text-base sm:text-lg text-zinc-100 font-semibold tracking-tight">
              {metric.title}
            </span>
            <span className="font-mono text-[11px] text-zinc-400 mt-0.5 leading-snug">
              {metric.subtitle}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
