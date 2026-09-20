"use client";

import * as React from "react";
import Link from "next/link";
import { Terminal, FileText, Menu } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/portfolio/icons";
import { portfolioData } from "@/data/portfolio";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function Navbar() {
  const { personal, nav, socials } = portfolioData;
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#0e0e10]/85 backdrop-blur-xl border-b border-[#27272a]/60">
      <div className="h-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Left: Brand Monogram & Pulsing Beacon */}
        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="flex items-center gap-2.5 group text-left transition-colors"
          >
            <div className="w-7 h-7 rounded-lg bg-[#2a2a2c] border border-[#27272a] flex items-center justify-center transition-colors group-hover:border-[#8e9192]">
              <Terminal className="w-3.5 h-3.5 text-[#10b981]" />
            </div>
            <div className="flex items-center gap-1.5 font-mono text-xs">
              <span className="text-zinc-100 font-semibold tracking-tight">
                {personal.monogram}
              </span>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-400 group-hover:text-zinc-100 transition-colors font-sans font-medium hidden sm:inline">
                {personal.name}
              </span>
            </div>
          </Link>

          {/* Pulsing Availability Beacon */}
          <div className="hidden md:flex items-center gap-1.5 pl-2 border-l border-[#27272a]/70">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
            </span>
            <span className="font-mono text-[11px] text-zinc-400">
              {personal.statusBadge.beaconText}
            </span>
          </div>
        </div>

        {/* Center: Desktop Anchor Links */}
        <nav className="hidden md:flex items-center gap-1 p-1 bg-[#1c1b1d]/80 rounded-xl border border-[#27272a]/70">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-[#2a2a2c] rounded-lg transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Actions & Socials */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <a
            href={socials.github.url}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-[#27272a] transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={socials.linkedin.url}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-[#27272a] transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href={personal.resumeUrl}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#201f22] border border-[#27272a] hover:border-[#8e9192]/60 text-zinc-200 text-xs font-medium transition-all hover:text-white"
          >
            <FileText className="w-3.5 h-3.5 text-[#10b981]" />
            <span>{personal.resumeLabel}</span>
          </a>

          {/* Mobile Drawer Trigger */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  aria-label="Abrir Menu de Navegação"
                  className="w-9 h-9 rounded-lg bg-[#201f22] border border-[#27272a] flex items-center justify-center text-zinc-300 hover:text-white hover:bg-[#27272a] transition-colors"
                >
                  <Menu className="w-4 h-4" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[280px] bg-[#131315] border-l border-[#27272a] p-6 flex flex-col justify-between"
              >
                <div>
                  <SheetHeader className="p-0 text-left mb-6">
                    <SheetTitle className="flex items-center gap-2 font-mono text-sm text-zinc-200">
                      <div className="w-6 h-6 rounded-md bg-[#2a2a2c] border border-[#27272a] flex items-center justify-center">
                        <Terminal className="w-3 h-3 text-[#10b981]" />
                      </div>
                      <span>{personal.name}</span>
                    </SheetTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                      <span className="font-mono text-xs text-zinc-400">
                        {personal.statusBadge.beaconText}
                      </span>
                    </div>
                  </SheetHeader>

                  <div className="flex flex-col gap-2">
                    {nav.links.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <a
                          href={link.href}
                          className="px-3 py-2.5 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-[#201f22] transition-colors font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </a>
                      </SheetClose>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#27272a] flex flex-col gap-3">
                  <a
                    href={personal.resumeUrl}
                    className="flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-[#201f22] border border-[#27272a] text-zinc-200 text-xs font-medium hover:bg-[#27272a] transition-colors"
                  >
                    <FileText className="w-4 h-4 text-[#10b981]" />
                    <span>{personal.mobileResumeLabel}</span>
                  </a>

                  <div className="flex items-center justify-center gap-4 pt-2">
                    <a
                      href={socials.github.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-zinc-400 hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={socials.linkedin.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-zinc-400 hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
