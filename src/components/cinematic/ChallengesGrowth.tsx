import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import phaseDarkness from "@/assets/phase-darkness.jpg";
import phaseTransition from "@/assets/phase-transition.jpg";
import phaseLight from "@/assets/phase-light.jpg";

const challenges = [
  {
    phase: "darkness",
    title: "The Failures",
    description: "Every crashed deploy, every rejected PR, every project that never shipped. These weren't setbacks—they were lessons carved in frustration.",
    quote: "I failed more times than I can count. But each failure taught me something success never could.",
    image: phaseDarkness
  },
  {
    phase: "transition",
    title: "The Turning Point",
    description: "The moment when patterns emerged from chaos. When debugging became detective work. When I stopped writing code and started crafting solutions.",
    quote: "One day, the syntax stopped being foreign. The logic started to flow. I was becoming a developer.",
    image: phaseTransition
  },
  {
    phase: "light",
    title: "The Growth",
    description: "Now, every challenge is an opportunity. Every bug is a puzzle. Every project is a story waiting to be told through code.",
    quote: "I learned that growth isn't comfortable. But it's the only way forward.",
    image: phaseLight
  }
];

interface ParallaxImageProps {
  image: string;
  title: string;
  phase: string;
}

const ParallaxImage = ({ image, title, phase }: ParallaxImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.15, 1.1]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.img 
        src={image} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ y, scale }}
      />
      {/* Overlay for visual effect */}
      <div 
        className={`absolute inset-0 ${
          phase === "darkness" 
            ? "bg-gradient-to-br from-background/80 via-background/50 to-transparent" 
            : phase === "transition"
            ? "bg-gradient-to-br from-background/60 via-primary/10 to-transparent"
            : "bg-gradient-to-br from-background/40 via-transparent to-transparent"
        }`}
      />
    </div>
  );
};

export const ChallengesGrowth = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.3, 0]);

  return (
    <section 
      id="challenges" 
      ref={containerRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Dynamic Background - Dark to Light */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: backgroundOpacity }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, hsl(var(--primary) / 0.15) 0%, transparent 60%)"
          }}
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-xs tracking-[0.4em] uppercase text-primary/60 block mb-4">
            Chapter Four
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
            THE TRANSFORMATION
          </h2>
          <p className="text-muted-foreground/60 font-serif italic text-lg max-w-xl mx-auto">
            From darkness into light
          </p>
        </motion.div>

        {/* Challenges Sections */}
        <div className="space-y-32">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.phase}
              className="relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}>
                {/* Visual */}
                <motion.div 
                  className={`relative aspect-video rounded-sm overflow-hidden ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 bg-background/40" />
                  
                  {/* Parallax Background Image */}
                  <ParallaxImage 
                    image={challenge.image} 
                    title={challenge.title}
                    phase={challenge.phase}
                  />
                </motion.div>

                {/* Content */}
                <motion.div
                  className={index % 2 === 1 ? "md:order-1" : ""}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="text-xs tracking-[0.2em] uppercase text-primary/60 block mb-4">
                    Phase {index + 1}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                    {challenge.title}
                  </h3>
                  <p className="text-muted-foreground/70 leading-relaxed mb-8">
                    {challenge.description}
                  </p>
                  <blockquote className="border-l-2 border-primary/30 pl-6 font-serif italic text-foreground/60">
                    "{challenge.quote}"
                  </blockquote>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
