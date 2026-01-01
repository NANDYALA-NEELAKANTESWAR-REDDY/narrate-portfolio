import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export const FinalAct = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success("Message sent! Let's create something amazing together.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 60%)"
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

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
            The Final Chapter
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-8">
            LET'S CREATE TOGETHER
          </h2>
          
          {/* Cinematic Quote */}
          <motion.blockquote
            className="font-serif italic text-xl md:text-2xl text-foreground/50 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            viewport={{ once: true }}
          >
            "Every great story needs a sequel. Let's write the next chapter together."
          </motion.blockquote>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    required
                    className="bg-card/50 border-border/30 focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="bg-card/50 border-border/30 focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    required
                    className="bg-card/50 border-border/30 focus:border-primary/50 transition-colors resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full pulse-glow group"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {/* Available Status */}
              <div className="mb-10 p-6 bg-card/30 border border-border/20 rounded-sm">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-green-500"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-sm tracking-widest uppercase text-muted-foreground">
                    Available for Work
                  </span>
                </div>
                <p className="text-muted-foreground/70 text-sm">
                  Currently open to full-time positions, freelance projects, and interesting collaborations.
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-sm tracking-widest uppercase text-muted-foreground mb-6">
                  Connect
                </h4>
                
                <motion.a
                  href="mailto:hello@developer.com"
                  className="flex items-center gap-4 p-4 bg-card/20 border border-border/10 rounded-sm hover:border-primary/30 transition-all group"
                  whileHover={{ x: 5 }}
                >
                  <Mail size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  <div>
                    <span className="block text-foreground">Email</span>
                    <span className="text-sm text-muted-foreground">hello@developer.com</span>
                  </div>
                </motion.a>

                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card/20 border border-border/10 rounded-sm hover:border-primary/30 transition-all group"
                  whileHover={{ x: 5 }}
                >
                  <Github size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  <div>
                    <span className="block text-foreground">GitHub</span>
                    <span className="text-sm text-muted-foreground">@developer</span>
                  </div>
                </motion.a>

                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card/20 border border-border/10 rounded-sm hover:border-primary/30 transition-all group"
                  whileHover={{ x: 5 }}
                >
                  <Linkedin size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  <div>
                    <span className="block text-foreground">LinkedIn</span>
                    <span className="text-sm text-muted-foreground">Connect with me</span>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-32 pt-12 border-t border-border/10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground/50 tracking-wider">
            © 2024 · Crafted with passion · The story continues
          </p>
        </motion.div>
      </div>
    </section>
  );
};
