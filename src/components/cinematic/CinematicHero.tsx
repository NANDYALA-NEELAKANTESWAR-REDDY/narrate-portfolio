import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-profile.webp";
import { TypewriterText } from "@/components/TypewriterText";

const skills = ["DEVELOPER", "AI & ML", "DESIGNER", "CONTENT WRITER"];

// Interactive Profile Image Component with Motion Effects
const InteractiveProfileImage = () => {
  const [ripples, setRipples] = useState<{
    id: number;
    x: number;
    y: number;
  }[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = {
      id: Date.now(),
      x,
      y
    };
    setRipples(prev => [...prev, newRipple]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 800);
  };
  return <motion.div className="w-64 lg:w-80 flex-shrink-0" initial={{
    opacity: 0,
    x: -50
  }} animate={{
    opacity: 1,
    x: 0,
    y: [0, -10, 0]
  }} transition={{
    opacity: {
      duration: 1.5,
      delay: 0.5
    },
    x: {
      duration: 1.5,
      delay: 0.5
    },
    y: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 2
    }
  }}>
      <motion.div className="relative aspect-square cursor-pointer overflow-hidden rounded-full" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={handleClick} whileHover={{
      scale: 1.05
    }} whileTap={{
      scale: 0.98
    }}>
        {/* Glow effect on hover */}
        <motion.div className="absolute -inset-4 rounded-full pointer-events-none z-0" animate={{
        opacity: isHovered ? 1 : 0,
        scale: isHovered ? 1 : 0.8
      }} transition={{
        duration: 0.3
      }} style={{
        background: "radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, transparent 70%)"
      }} />

        {/* Pulsing ring */}
        <motion.div className="absolute inset-0 rounded-full border-2 border-primary/30 pointer-events-none z-10" animate={{
        scale: [1, 1.1, 1],
        opacity: [0.5, 0, 0.5]
      }} transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }} />

        {/* Second pulsing ring (delayed) */}
        <motion.div className="absolute inset-0 rounded-full border border-primary/20 pointer-events-none z-10" animate={{
        scale: [1, 1.15, 1],
        opacity: [0.3, 0, 0.3]
      }} transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5
      }} />

        {/* Main image */}
        <motion.img src={heroImage} alt="Profile" className="w-full h-full object-cover object-center relative z-20" animate={{
        filter: isHovered ? "brightness(1.1) contrast(1.05)" : "brightness(1) contrast(1)"
      }} transition={{
        duration: 0.3
      }} />

        {/* Hover shimmer overlay */}
        <motion.div className="absolute inset-0 pointer-events-none z-30" animate={{
        background: isHovered ? "linear-gradient(135deg, rgba(0,0,0,0) 40%, hsl(var(--primary) / 0.15) 50%, rgba(0,0,0,0) 60%)" : "rgba(0,0,0,0)",
        backgroundPosition: isHovered ? "200% 200%" : "-100% -100%"
      }} transition={{
        duration: 0.6
      }} />

        {/* Click ripple effects */}
        <AnimatePresence>
          {ripples.map(ripple => <motion.div key={ripple.id} className="absolute rounded-full bg-primary/30 pointer-events-none z-40" style={{
          left: ripple.x,
          top: ripple.y
        }} initial={{
          width: 0,
          height: 0,
          x: 0,
          y: 0,
          opacity: 1
        }} animate={{
          width: 300,
          height: 300,
          x: -150,
          y: -150,
          opacity: 0
        }} exit={{
          opacity: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} />)}
        </AnimatePresence>

        {/* Inner glow on hover */}
        <motion.div className="absolute inset-0 rounded-full pointer-events-none z-25" animate={{
        boxShadow: isHovered ? "inset 0 0 30px hsl(var(--primary) / 0.3)" : "inset 0 0 0px transparent"
      }} transition={{
        duration: 0.3
      }} />
      </motion.div>
    </motion.div>;
};
export const CinematicHero = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToOrigin = () => {
    document.querySelector("#origin")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/90" />

      {/* Animated Glow */}
      <motion.div className="absolute inset-0 z-[1] pointer-events-none" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 3,
      delay: 1
    }}>
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[800px] h-[800px] rounded-full" style={{
        background: "radial-gradient(ellipse at center, hsl(35 100% 50% / 0.08) 0%, transparent 60%)"
      }} />
      </motion.div>

      {/* Main Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Left Side - Circle Image with Interactive Effects */}
          <div className="flex flex-col items-center gap-6">
            {/* Greeting Text Above Profile */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-center"
            >
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-yellow-500 to-orange-500 bg-clip-text text-transparent font-serif"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%",
                  fontFamily: "'Playfair Display', 'Georgia', serif",
                  letterSpacing: "0.02em",
                  textShadow: "0 2px 20px rgba(255, 165, 0, 0.3)"
                }}
              >
                Hey I'm Neelakanta
              </motion.h2>
              <motion.div
                className="h-1 w-32 mx-auto mt-3 rounded-full bg-gradient-to-r from-primary via-yellow-500 to-orange-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </motion.div>
            <InteractiveProfileImage />
          </div>

          {/* Right Side - Content - Animates from center to corner */}
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-right"
            initial={{ x: "-25%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Movie Credits Style Subtitle */}
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 2,
            delay: 0.5
          }} className="mb-8">
              <div className="flex items-center justify-center lg:justify-end gap-6">
                <motion.div className="h-px bg-primary/50" initial={{
                width: 0
              }} animate={{
                width: 60
              }} transition={{
                duration: 1.5,
                delay: 0.8
              }} />
                <span className="text-xs md:text-sm tracking-[0.4em] uppercase text-primary/80 font-light">
                  An Engineer's Journey
                </span>
                <motion.div className="h-px bg-primary/50" initial={{
                width: 0
              }} animate={{
                width: 60
              }} transition={{
                duration: 1.5,
                delay: 0.8
              }} />
              </div>
            </motion.div>

            {/* Main Title - Movie Style with Rotating Skills */}
            <div className="overflow-hidden mb-6 text-center h-28 md:h-36 lg:h-40 xl:h-48">
              <AnimatePresence mode="wait">
                <motion.h1 
                  key={currentSkillIndex}
                  initial={{
                    y: 100,
                    opacity: 0
                  }} 
                  animate={{
                    y: 0,
                    opacity: 1
                  }} 
                  exit={{
                    y: -100,
                    opacity: 0
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }} 
                  className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-tight text-foreground font-serif text-center lg:text-right"
                >
                  {skills[currentSkillIndex]}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Tagline with Typewriter Effect */}
            <p className="text-lg md:text-2xl text-foreground/60 font-serif italic max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed">
              <TypewriterText text='"A story of code, curiosity, and creation"' speed={60} delay={2000} enableSound={false} />
            </p>

            {/* Year / Credit Line */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 2, delay: 2.5 }} 
              className="flex items-center justify-center lg:justify-end text-muted-foreground/50 text-sm tracking-widest gap-8"
            >
              <span>AI &ML</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              <span>FULL STACK</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              <span>CREATIVE</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button onClick={scrollToOrigin} className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground/50 hover:text-primary/70 transition-colors duration-700" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 1,
      delay: 3
    }}>
        <span className="text-xs tracking-[0.3em] uppercase">Begin</span>
        <motion.div animate={{
        y: [0, 8, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}>
          <ArrowDown size={18} />
        </motion.div>
      </motion.button>
    </section>;
};