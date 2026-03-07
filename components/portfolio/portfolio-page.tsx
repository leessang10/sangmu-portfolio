"use client";

import { useState } from "react";
import { ContactSection } from "@/components/portfolio/contact-section";
import { CareerHighlightsSection } from "@/components/portfolio/career-highlights-section";
import { ExtendedProfileSection } from "@/components/portfolio/extended-profile-section";
import { SiteFooter } from "@/components/portfolio/footer";
import { HeroSection } from "@/components/portfolio/hero-section";
import { PhilosophySection } from "@/components/portfolio/philosophy-section";
import { ProjectDetailModal } from "@/components/portfolio/project-detail-modal";
import { ProjectGridSection } from "@/components/portfolio/project-grid-section";
import { WorkStyleSection } from "@/components/portfolio/work-style-section";
import { portfolioProfile, projects, type PortfolioProject } from "@/lib/portfolio-data";

export function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  return (
    <main className="min-h-screen bg-[#080c12] text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(6,182,212,0.14),transparent_32%)]" />

      <div className="mx-auto w-full max-w-7xl px-4 py-10 md:px-8 md:py-14">
        <HeroSection profile={portfolioProfile} />
        <CareerHighlightsSection profile={portfolioProfile} />
        <PhilosophySection profile={portfolioProfile} />
        <ProjectGridSection projects={projects} onOpenProject={setSelectedProject} />
        <WorkStyleSection profile={portfolioProfile} />
        <ExtendedProfileSection profile={portfolioProfile} />
        <ContactSection profile={portfolioProfile} />
        <SiteFooter />
      </div>

      <ProjectDetailModal
        project={selectedProject}
        open={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
