import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EducationSection } from "@/components/EducationSection";
import { ResumeSection } from "@/components/ResumeSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

const StandardIndex = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ResumeSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default StandardIndex;
