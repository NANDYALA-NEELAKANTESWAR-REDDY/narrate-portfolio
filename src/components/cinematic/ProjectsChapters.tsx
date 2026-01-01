import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    chapter: "I",
    tagline: "Where Commerce Meets Code",
    description: "A full-featured e-commerce platform built from the ground up. Real-time inventory, secure payments, and seamless user experience.",
    longDescription: "This project represents months of careful planning and execution. Built with a microservices architecture, it handles thousands of concurrent users while maintaining sub-second response times. Features include real-time inventory tracking, Stripe integration, and a custom recommendation engine.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=60",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    year: "2023",
    role: "Lead Developer"
  },
  {
    id: 2,
    title: "AI Writing Assistant",
    chapter: "II",
    tagline: "Intelligence Amplified",
    description: "An AI-powered writing tool that helps creators craft compelling content with the power of machine learning.",
    longDescription: "Leveraging OpenAI's GPT models and custom fine-tuning, this assistant understands context, maintains voice consistency, and suggests improvements in real-time. The challenge was creating a seamless interface that felt natural while managing complex API orchestration.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
    tech: ["Next.js", "Python", "OpenAI", "FastAPI", "MongoDB"],
    year: "2024",
    role: "Full Stack Developer"
  },
  {
    id: 3,
    title: "Real-Time Analytics",
    chapter: "III",
    tagline: "Data in Motion",
    description: "A dashboard that transforms raw data into actionable insights with real-time visualization and predictive analytics.",
    longDescription: "Processing millions of events per second, this analytics platform provides instant insights for decision makers. Custom-built streaming architecture ensures data freshness while machine learning models predict trends before they happen.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    tech: ["React", "D3.js", "Kafka", "ClickHouse", "Python"],
    year: "2024",
    role: "Data Engineer"
  }
];

export const ProjectsChapters = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-xs tracking-[0.4em] uppercase text-primary/60 block mb-4">
            Chapter Three
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
            THE ACHIEVEMENTS
          </h2>
          <p className="text-muted-foreground/60 font-serif italic text-lg max-w-xl mx-auto">
            Projects that defined the journey
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1, 
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-50px" }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                {/* Image */}
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                
                {/* Hover Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-6xl font-display text-foreground/10 absolute top-6 left-6">
                    {project.chapter}
                  </span>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-xs tracking-[0.2em] uppercase text-primary/80 block mb-2">
                      {project.year}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground/70 font-serif italic text-sm">
                      {project.tagline}
                    </p>
                  </motion.div>
                </div>

                {/* View Prompt */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <span className="text-sm tracking-widest uppercase text-foreground bg-background/80 px-4 py-2 rounded-sm">
                    View Story
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-background/95 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Content */}
            <motion.div
              className="relative max-w-4xl w-full bg-card border border-border/30 rounded-sm overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={24} />
              </button>

              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-square md:aspect-auto">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card md:block hidden" />
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  <span className="text-8xl font-display text-foreground/5 absolute top-4 right-16">
                    {selectedProject.chapter}
                  </span>

                  <span className="text-xs tracking-[0.2em] uppercase text-primary/80 block mb-2">
                    {selectedProject.year} · {selectedProject.role}
                  </span>
                  
                  <h3 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                    {selectedProject.title}
                  </h3>
                  
                  <p className="text-muted-foreground/70 font-serif italic mb-6">
                    "{selectedProject.tagline}"
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {selectedProject.longDescription}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs tracking-wider uppercase bg-muted/50 text-muted-foreground rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Github size={16} />
                      Source
                    </Button>
                    <Button size="sm" className="gap-2 pulse-glow">
                      <ExternalLink size={16} />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
