import { ScrollReveal } from "./ScrollReveal";
import { User, Briefcase, Award, MapPin } from "lucide-react";

const stats = [
  { icon: Briefcase, label: "Years Experience", value: "5+" },
  { icon: Award, label: "Projects Completed", value: "50+" },
  { icon: User, label: "Happy Clients", value: "30+" },
  { icon: MapPin, label: "Based In", value: "NYC" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image/Visual */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-card">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto rounded-full bg-secondary flex items-center justify-center mb-6">
                      <User size={48} className="" />
                    </div>
                    <p className="text-muted-foreground text-sm">NEELAKANTESWAR REDDY</p>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-8 -right-8 glass rounded-lg p-6 max-w-xs animate-float">
                <p className="text-sm text-muted-foreground mb-2">Currently available for</p>
                <p className="text-lg font-semibold text-foreground">Full-time Positions</p>
              </div>

              {/* Decorative Line */}
              <div className="absolute -left-8 top-1/2 w-16 h-px bg-gradient-to-r from-primary to-transparent" />
            </div>
          </ScrollReveal>

          {/* Right Column - Content */}
          <div>
            <ScrollReveal delay={200}>
              <span className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-widest uppercase mb-4">
                <span className="w-8 h-px bg-primary" />
                About Me
              </span>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Hey, I'm Neelakanta
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
                Passionate About Creating <span className="text-gradient-primary font-serif italic">Impactful</span>{" "}
                Solutions
              </h3>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a creative developer with over 5 years of experience building digital products that make a
                difference. My journey started with a curiosity for how things work, which evolved into a passion for
                creating seamless user experiences.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                I specialize in frontend development with React, TypeScript, and modern CSS. I believe in clean code,
                thoughtful design, and continuous learning. When I'm not coding, you'll find me exploring new
                technologies or contributing to open-source projects.
              </p>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={600}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-colors duration-300"
                  >
                    <stat.icon className="w-5 h-5 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
