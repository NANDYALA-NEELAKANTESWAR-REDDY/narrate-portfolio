import { motion } from "framer-motion";
import { Download, Eye, FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const highlights = [
  { label: "Experience", value: "5+ Years" },
  { label: "Projects", value: "50+" },
  { label: "Technologies", value: "20+" },
  { label: "Certifications", value: "8" }
];

export const CinematicResume = () => {
  const handleDownload = () => {
    // Create a sample resume download
    toast.success("Resume download started!");
    // In a real app, this would link to an actual PDF file
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Developer_Resume.pdf";
    link.click();
  };

  const handlePreview = () => {
    toast.info("Opening resume preview...");
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section id="resume" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.06) 0%, transparent 60%)"
          }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-xs tracking-[0.4em] uppercase text-primary/60 block mb-4">
            Chapter Six
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
            THE CREDENTIALS
          </h2>
          <p className="text-muted-foreground/60 font-serif italic text-lg max-w-xl mx-auto">
            A summary of the journey, ready to share
          </p>
        </motion.div>

        {/* Resume Card */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative p-8 md:p-12 bg-card/40 backdrop-blur-sm border border-border/30 rounded-sm overflow-hidden">
            {/* Decorative Glow */}
            <motion.div 
              className="absolute top-0 right-0 w-64 h-64 -translate-y-1/2 translate-x-1/2 rounded-full opacity-50"
              style={{
                background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)"
              }}
            />

            {/* Resume Icon */}
            <motion.div 
              className="flex items-center justify-center mb-8"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-24 h-32 bg-gradient-to-b from-card to-muted/50 border border-border/50 rounded-sm flex items-center justify-center">
                  <FileText size={40} className="text-primary/60" />
                </div>
                <motion.div 
                  className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles size={16} className="text-primary-foreground" />
                </motion.div>
              </div>
            </motion.div>

            {/* Title */}
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                Full Stack Developer Resume
              </h3>
              <p className="text-muted-foreground/60 text-sm">
                Updated December 2024 · PDF Format
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="text-center p-4 bg-muted/20 rounded-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="block font-display text-2xl md:text-3xl text-primary mb-1">
                    {item.value}
                  </span>
                  <span className="text-xs tracking-widest uppercase text-muted-foreground">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* What's Included */}
            <div className="mb-10">
              <h4 className="text-sm tracking-widest uppercase text-muted-foreground mb-4 text-center">
                What's Inside
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {["Work Experience", "Technical Skills", "Education", "Projects", "Certifications", "References"].map((item) => (
                  <span 
                    key={item}
                    className="px-4 py-2 text-sm bg-card/50 border border-border/20 text-foreground/70 rounded-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={handleDownload}
                className="pulse-glow group gap-2"
              >
                <Download size={18} className="group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={handlePreview}
                className="gap-2 border-border/50 hover:border-primary/50"
              >
                <Eye size={18} />
                Preview Online
              </Button>
            </div>

            {/* File Info */}
            <p className="text-center text-xs text-muted-foreground/50 mt-6">
              PDF • 2 Pages • 245 KB • ATS-Optimized
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
