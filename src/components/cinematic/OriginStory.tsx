import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const timelineEvents = [
  {
    year: "2018",
    title: "The Spark",
    description: "First line of code written. A simple 'Hello World' that changed everything.",
    icon: "✨"
  },
  {
    year: "2019",
    title: "The Struggle",
    description: "Countless debugging sessions. Failed projects. Imposter syndrome. But never gave up.",
    icon: "🔥"
  },
  {
    year: "2020",
    title: "The Breakthrough",
    description: "First real project deployed. The feeling of seeing code come alive.",
    icon: "💡"
  },
  {
    year: "2021",
    title: "The Growth",
    description: "Mastered new frameworks. Built teams. Led projects. Found my voice.",
    icon: "🚀"
  },
  {
    year: "2024",
    title: "The Present",
    description: "Full-stack developer. Creator. Dreamer. The journey continues.",
    icon: "⭐"
  }
];

export const OriginStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      id="origin" 
      ref={containerRef}
      className="relative min-h-screen py-32 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Section Title */}
      <motion.div 
        className="container mx-auto px-6 mb-24"
        style={{ opacity }}
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-xs tracking-[0.4em] uppercase text-primary/60 block mb-4">
            Chapter One
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
            THE ORIGIN STORY
          </h2>
          <p className="text-muted-foreground/60 font-serif italic text-lg max-w-xl mx-auto">
            Every developer has a beginning. This is mine.
          </p>
        </motion.div>
      </motion.div>

      {/* Timeline */}
      <div className="container mx-auto px-6 relative">
        {/* Center Line */}
        <motion.div 
          className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
          style={{
            background: "linear-gradient(180deg, transparent 0%, hsl(var(--primary) / 0.2) 10%, hsl(var(--primary) / 0.2) 90%, transparent 100%)"
          }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        <div className="space-y-24 md:space-y-32">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              className={`relative flex items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-col md:gap-16`}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} text-center md:text-inherit`}>
                <motion.div
                  className="inline-block"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-6xl md:text-8xl font-display text-primary/20 block mb-2">
                    {event.year}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground/70 max-w-md leading-relaxed">
                    {event.description}
                  </p>
                </motion.div>
              </div>

              {/* Center Dot */}
              <motion.div 
                className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-card border border-border/50 text-2xl"
                whileInView={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {event.icon}
              </motion.div>

              {/* Spacer for alignment */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
