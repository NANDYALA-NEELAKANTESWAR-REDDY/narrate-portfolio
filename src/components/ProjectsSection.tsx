import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with real-time inventory, payment processing, and analytics dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "linear-gradient(135deg, hsl(25 95% 53% / 0.3), hsl(45 93% 58% / 0.3))",
    featured: true,
  },
  {
    title: "StoryNarration",
    description: "An immersive storytelling web app with rich visuals, chapters, and audio narration for engaging user experiences.",
    tags: ["React", "TypeScript", "Framer Motion", "Audio"],
    image: "linear-gradient(135deg, hsl(15 85% 55% / 0.3), hsl(35 90% 60% / 0.3))",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and team workflows.",
    tags: ["Next.js", "TypeScript", "MongoDB"],
    image: "linear-gradient(135deg, hsl(200 80% 50% / 0.3), hsl(180 60% 45% / 0.3))",
    featured: false,
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered platform for generating marketing content and social media posts.",
    tags: ["React", "OpenAI", "TailwindCSS"],
    image: "linear-gradient(135deg, hsl(280 65% 60% / 0.3), hsl(320 70% 55% / 0.3))",
    featured: false,
  },
  {
    title: "Finance Dashboard",
    description: "Interactive dashboard for tracking investments, expenses, and financial goals.",
    tags: ["Vue.js", "D3.js", "Firebase"],
    image: "linear-gradient(135deg, hsl(160 60% 45% / 0.3), hsl(140 50% 40% / 0.3))",
    featured: true,
  },
];

export const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-widest uppercase mb-4">
                <span className="w-8 h-px bg-primary" />
                Selected Work
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Featured{" "}
                <span className="text-gradient-primary font-serif italic">Projects</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-lg text-muted-foreground">
                A selection of projects that showcase my skills and passion for 
                creating exceptional digital experiences.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={300}>
            <Button variant="outline" className="border-border text-foreground hover:border-primary/50 group">
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </ScrollReveal>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ScrollReveal
              key={project.title}
              delay={i * 150}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <div
                className={`group relative rounded-xl overflow-hidden bg-card border border-border/50 transition-all duration-700 ${
                  project.featured ? "md:col-span-1 aspect-[4/3]" : "aspect-[16/10]"
                } ${hoveredIndex === i ? "border-primary/50 scale-[1.02]" : "hover:border-primary/30"}`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background Gradient */}
                <div
                  className="absolute inset-0 transition-all duration-700"
                  style={{ background: project.image }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div
                    className={`flex items-center gap-4 transition-all duration-500 ${
                      hoveredIndex === i
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    <a
                      href="#"
                      className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  </div>
                </div>

                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
                    hoveredIndex === i ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(var(--primary) / 0.1), transparent 50%)"
                  }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
