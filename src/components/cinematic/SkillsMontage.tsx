import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "bg-[#E34F26]/20" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "bg-[#1572B6]/20" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "bg-[#F7DF1E]/20" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "bg-[#61DAFB]/20" },
  { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", color: "bg-[#764ABC]/20" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "bg-[#339933]/20" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "bg-[#3178C6]/20" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "bg-foreground/10" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "bg-[#47A248]/20" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "bg-[#4169E1]/20" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "bg-[#3776AB]/20" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "bg-[#2496ED]/20" },
];

const SkillIcon = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  return (
    <motion.div
      className="flex flex-col items-center gap-4 group"
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true, margin: "-30px" }}
    >
      <motion.div 
        className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full ${skill.color} flex items-center justify-center backdrop-blur-sm border border-border/30 transition-all duration-300 group-hover:border-primary/50`}
        whileHover={{ scale: 1.1, y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/10 blur-xl" />
        
        <img 
          src={skill.icon} 
          alt={skill.name}
          className="w-10 h-10 md:w-12 md:h-12 relative z-10"
        />
      </motion.div>
      
      <span className="text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium">
        {skill.name}
      </span>
    </motion.div>
  );
};

export const SkillsMontage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section 
      id="skills" 
      ref={containerRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y }}
      >
        <div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.05) 0%, transparent 70%)"
          }}
        />
      </motion.div>

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
            Chapter Two
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
            THE ARSENAL
          </h2>
          <p className="text-muted-foreground/60 font-serif italic text-lg max-w-xl mx-auto">
            Tools forged through years of practice and passion
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 md:gap-12 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <SkillIcon key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>

      {/* Diagonal accent at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 bg-muted/20"
          style={{
            clipPath: "polygon(0 100%, 100% 60%, 100% 100%)"
          }}
        />
      </div>
    </section>
  );
};
