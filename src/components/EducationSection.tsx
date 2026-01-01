import { ScrollReveal } from "./ScrollReveal";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Master's Degree",
    school: "University Name",
    location: "City, State",
    period: "2020 - 2022",
    description: "Pursued advanced studies with focus on specialized research and professional development.",
    achievements: ["Research Project", "Academic Excellence"],
  },
  {
    degree: "Bachelor's Degree",
    school: "SRI VENKATESWARA COLLEGE OF ENGINEERING & TECHNOLOGY",
    location: "CHITTOOR, AP",
    period: "2016 - 2020",
    description: "Completed undergraduate studies with strong academic performance and extracurricular involvement.",
    achievements: ["Dean's List", "Club Member"],
  },
  {
    degree: "Intermediate / Higher Secondary",
    school: "SRI CHAITANYA JR COLLEGE",
    location: "KURNOOL , AP",
    period: "2014 - 2016",
    description: "Completed higher secondary education with focus on Science stream.",
    achievements: ["Science Stream", "Good Academic Record"],
  },
  {
    degree: "Secondary School (10th)",
    school: "VEDAVATHI HIGH SCHOOL",
    location: "RAYALACHERUVU,AP",
    period: "2014",
    description: "Completed secondary education with strong foundation in academics.",
    achievements: ["Academic Excellence", "Sports Participation"],
  },
];

const certifications = [
  "AWS Certified Solutions Architect",
  "Google Cloud Professional",
  "Meta Frontend Developer",
  "MongoDB Certified Developer",
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal>
            <span className="inline-flex items-center gap-4 text-primary text-sm font-medium tracking-widest uppercase mb-4">
              <span className="w-8 h-px bg-primary" />
              Education
              <span className="w-8 h-px bg-primary" />
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Academic{" "}
              <span className="text-gradient-primary font-serif italic">Background</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-lg text-muted-foreground">
              My educational journey has equipped me with a strong foundation in computer science
              and a passion for continuous learning.
            </p>
          </ScrollReveal>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          {education.map((edu, i) => (
            <ScrollReveal key={edu.degree} delay={i * 150} direction="up">
              <div className="relative pl-8 pb-12 last:pb-0 group">
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border group-last:bg-gradient-to-b group-last:from-border group-last:to-transparent" />
                
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[5px] rounded-full bg-primary shadow-glow" />

                <div className="p-6 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-500">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <GraduationCap className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{edu.school}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{edu.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Certifications */}
        <ScrollReveal delay={400}>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-6">Certifications</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground bg-card border border-border rounded-full hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
