import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { Education } from "@/components/portfolio/education";
import { TechStack } from "@/components/portfolio/tech-stack";
import { Projects } from "@/components/portfolio/projects";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#09090b] text-[#e5e1e4] flex flex-col selection:bg-[#10b981]/20 selection:text-[#10b981]">
      {/* Subtle ambient background glow */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_600px_at_50%_-100px,rgba(16,185,129,0.07),transparent_80%)]" />

      {/* Fixed Navigation Header */}
      <Navbar />

      {/* Main Centered Content */}
      <main className="relative z-10 flex-1 w-full pt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          <Hero />
          <Education />
          <TechStack />
          <Projects />
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
