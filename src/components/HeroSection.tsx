import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "./AnimatedText";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute inset-0 transition-all duration-[2s] ${
            isLoaded ? "scale-100 opacity-100" : "scale-110 opacity-0"
          }`}
        >
          <img
            src={heroBg}
            alt="Hero background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/50" />
        </div>
      </div>

      {/* Animated Glow Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30 animate-glow-pulse transition-all duration-[2s] ${
            isLoaded ? "scale-100" : "scale-0"
          }`}
          style={{ background: "var(--gradient-glow)" }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Subtitle */}
          <div
            className={`flex items-center gap-4 mb-6 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="w-12 h-px bg-primary animate-line-expand origin-left" />
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-primary">
              Creative Developer
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
            <AnimatedText
              as="span"
              className="block text-foreground"
              delay={500}
            >
              Crafting Digital
            </AnimatedText>
            <AnimatedText
              as="span"
              className="block text-gradient-primary font-serif italic"
              delay={700}
            >
              Experiences
            </AnimatedText>
          </h1>

          {/* Description */}
          <p
            className={`text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            I'm a passionate developer who transforms ideas into elegant, 
            high-performance web applications with stunning visual experiences.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 mb-12 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "1200ms" }}
          >
            <Button
              size="lg"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:glow-sm transition-all duration-300"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border-border text-foreground hover:bg-secondary hover:border-primary/50 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div
            className={`flex items-center gap-6 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "1400ms" }}
          >
            <a
              href="https://github.com/NANDYALA-NEELAKANTESWAR-REDDY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/neelakanteswar-reddy-nandyala-316b2734a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:neelakanta875@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-500 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: "1600ms" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-float" />
      </button>
    </section>
  );
};
