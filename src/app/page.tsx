import HeroSection from "@/components/ui/hero-section";
import { ProjectShowcase } from "@/components/ui/project-showcase";
import { LogoCloud } from "@/components/ui/logo-cloud-2";
import { ExperienceSection } from "@/components/ui/experience-section";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />

      <ProjectShowcase />

      <section className="w-full py-16">
        <LogoCloud />
      </section>

      <ExperienceSection />
    </main>
  );
}
