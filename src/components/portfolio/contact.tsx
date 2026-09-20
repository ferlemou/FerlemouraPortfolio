"use client";

import * as React from "react";
import { Copy, Check, Calendar } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/portfolio/icons";
import { portfolioData } from "@/data/portfolio";

export function Contact() {
  const { contact, socials } = portfolioData;
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <section className="pt-8 pb-12 sm:pb-16" id="contact">
      <div className="relative rounded-2xl bg-gradient-to-b from-[#2a2a2c]/50 via-[#1c1b1d]/80 to-[#0e0e10] border border-[#27272a] p-8 lg:p-12 text-center overflow-hidden shadow-xl">
        {/* Glow effect */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#10b981]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#201f22] border border-[#27272a] text-zinc-300 font-mono text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            <span>{contact.badge}</span>
          </div>

          {/* Headline */}
          <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl text-zinc-100 font-semibold tracking-tight">
            {contact.title}
          </h2>

          <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
            {contact.description}
          </p>

          {/* Interactive Action Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {/* Copy Email Button */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-zinc-950 font-sans text-sm font-medium hover:bg-zinc-200 transition-all shadow-sm active:scale-[0.98]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#10b981]" />
                  <span>{contact.copyFeedback}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-700" />
                  <span>{contact.email}</span>
                </>
              )}
            </button>

            {/* Schedule 15-min Chat Link */}
            <a
              href={contact.calendarUrl}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#201f22] border border-[#27272a] text-zinc-200 font-sans text-sm font-medium hover:bg-[#2a2a2c] hover:text-white transition-all active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 text-[#10b981]" />
              <span>{contact.calendarText}</span>
            </a>
          </div>

          {/* Social Handles Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs font-mono text-zinc-400">
            <a
              href={socials.github.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-zinc-100 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>{socials.github.label}</span>
            </a>
            <span className="text-zinc-600">•</span>
            <a
              href={socials.linkedin.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-zinc-100 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>{socials.linkedin.label}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
