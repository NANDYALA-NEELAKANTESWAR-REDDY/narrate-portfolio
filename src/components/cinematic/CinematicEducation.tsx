import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, School } from "lucide-react";

const educationTimeline = [
  {
    period: "2010 - 2016",
    institution: "VADAVATHI HIGH SCHOOL",
    degree: "High School Diploma",
    description: "Where the foundation was laid. Discovered passion for mathematics and problem-solving.",
    icon: School,
    achievements: ["Honor Roll Student", "Science Fair Winner", "Math Olympiad"],
  },
  {
    period: "2016 - 2018",
    institution: "SRI CHAITANYA COLLEGE",
    degree: "Associate Degree in Computer Science",
    description: "First steps into the world of programming. Late nights, early mornings, endless curiosity.",
    icon: BookOpen,
    achievements: ["Dean's List", "Programming Club President", "3.8 GPA"],
  },
  {
    period: "2018 - 2022",
    institution: "SRI VENKATESWARA COLLEGE OF ENGINEERING & TECHNOLOGY",
    degree: "Bachelor of Science in Software Engineering",
    description: "The transformation from student to developer. Theory met practice, dreams met reality.",
    icon: GraduationCap,
    achievements: ["Summa Cum Laude", "Senior Project Award", "Research Assistant"],
  },
  {
    period: "2023 - Present",
    institution: "Continuous Learning",
    degree: "Professional Certifications",
    description: "The journey never ends. AWS, Google Cloud, and countless courses to stay ahead.",
    icon: Award,
    achievements: ["AWS Certified", "Google Cloud Professional", "Meta Frontend Developer"],
  },
];

export const CinematicEducation = () => {
  return (
    <section id="education" className="relative py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-xs tracking-[0.4em] uppercase text-primary/60 block mb-4">Chapter Five</span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">THE ACADEMIC JOURNEY</h2>
          <p className="text-muted-foreground/60 font-serif italic text-lg max-w-xl mx-auto">
            From curious student to lifelong learner
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Center Line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, hsl(var(--primary) / 0.3) 10%, hsl(var(--primary) / 0.3) 90%, transparent 100%)",
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          <div className="space-y-16 md:space-y-24">
            {educationTimeline.map((edu, index) => {
              const IconComponent = edu.icon;
              return (
                <motion.div
                  key={edu.period}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {/* Icon Node */}
                  <motion.div
                    className="flex-shrink-0 w-16 h-16 rounded-full bg-card border border-primary/30 flex items-center justify-center z-10 md:absolute md:left-1/2 md:-translate-x-1/2"
                    whileInView={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <IconComponent size={24} className="text-primary" />
                  </motion.div>

                  {/* Content */}
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "md:pr-24 md:text-right" : "md:pl-24 md:text-left"} pl-4 md:pl-0`}
                  >
                    <motion.div
                      className="p-6 bg-card/30 backdrop-blur-sm border border-border/20 rounded-sm"
                      whileHover={{ y: -5, borderColor: "hsl(var(--primary) / 0.3)" }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-xs tracking-[0.2em] uppercase text-primary/70 block mb-2">
                        {edu.period}
                      </span>
                      <h3 className="font-display text-xl md:text-2xl text-foreground mb-1">{edu.institution}</h3>
                      <p className="text-primary/80 font-serif italic mb-4">{edu.degree}</p>
                      <p className="text-muted-foreground/70 text-sm mb-4 leading-relaxed">{edu.description}</p>

                      {/* Achievements */}
                      <div
                        className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}
                      >
                        {edu.achievements.map((achievement) => (
                          <span
                            key={achievement}
                            className="px-3 py-1 text-xs tracking-wider bg-muted/30 text-muted-foreground rounded-sm"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for alignment on desktop */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
