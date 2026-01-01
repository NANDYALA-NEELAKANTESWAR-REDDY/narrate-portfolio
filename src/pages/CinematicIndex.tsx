import { FilmOverlay } from "@/components/cinematic/FilmOverlay";
import { NotebookBackground } from "@/components/cinematic/NotebookBackground";
import { CinematicHero } from "@/components/cinematic/CinematicHero";
import { OriginStory } from "@/components/cinematic/OriginStory";
import { SkillsMontage } from "@/components/cinematic/SkillsMontage";
import { ProjectsChapters } from "@/components/cinematic/ProjectsChapters";
import { ChallengesGrowth } from "@/components/cinematic/ChallengesGrowth";
import { CinematicEducation } from "@/components/cinematic/CinematicEducation";
import { CinematicResume } from "@/components/cinematic/CinematicResume";
import { FinalAct } from "@/components/cinematic/FinalAct";
import { Navigation } from "@/components/Navigation";

const CinematicIndex = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navigation />
      <NotebookBackground />
      <FilmOverlay />

      <main>
        <CinematicHero />
        <OriginStory />
        <SkillsMontage />
        <ProjectsChapters />
        <ChallengesGrowth />
        <CinematicEducation />
        <CinematicResume />
        <FinalAct />
      </main>
    </div>
  );
};

export default CinematicIndex;
