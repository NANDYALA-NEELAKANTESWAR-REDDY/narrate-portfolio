import { ScrollReveal } from "./ScrollReveal";
import { Button } from "./ui/button";
import { Download, FileText, Eye } from "lucide-react";

export const ResumeSection = () => {
  const handleDownload = () => {
    // TODO: Replace with actual resume URL
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "resume.pdf";
    link.click();
  };

  const handlePreview = () => {
    // TODO: Replace with actual resume URL
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              My Resume
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4">
              Download My CV
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mt-6" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12">
                <div className="flex flex-col items-center text-center">
                  {/* Resume icon */}
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-10 h-10 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                    Get My Full Resume
                  </h3>
                  
                  <p className="text-muted-foreground mb-8 max-w-md">
                    Download my complete resume to learn more about my experience, 
                    skills, education, and professional journey.
                  </p>
                  
                  {/* Resume highlights */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 w-full">
                    {[
                      { label: "Experience", value: "5+ Years" },
                      { label: "Projects", value: "50+" },
                      { label: "Technologies", value: "20+" },
                      { label: "Certifications", value: "8" },
                    ].map((stat, index) => (
                      <div key={index} className="text-center p-3 rounded-lg bg-background/50">
                        <div className="text-xl font-bold text-primary">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={handleDownload}
                      size="lg"
                      className="group/btn relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <Download className="w-5 h-5 group-hover/btn:animate-bounce" />
                        Download Resume
                      </span>
                    </Button>
                    
                    <Button
                      onClick={handlePreview}
                      variant="outline"
                      size="lg"
                      className="border-primary/50 hover:bg-primary/10"
                    >
                      <Eye className="w-5 h-5 mr-2" />
                      Preview Online
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
