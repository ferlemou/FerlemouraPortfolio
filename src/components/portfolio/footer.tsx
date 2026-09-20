import * as React from "react";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const { footer } = portfolioData;

  return (
    <footer className="w-full bg-[#0e0e10] border-t border-[#27272a] py-8 sm:py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Metadata & Copyright */}
        <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="text-zinc-200 font-medium">{footer.site}</span>
            <span className="text-zinc-600">—</span>
            <span className="text-[#10b981]">{footer.availability}</span>
          </div>
          <p className="font-sans text-xs text-zinc-500">{footer.copyright}</p>
        </div>

        {/* Right: Navigation Links */}
        <div className="flex items-center gap-4 font-mono text-xs text-zinc-400">
          {footer.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-zinc-200 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
