import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  { icon: Mail, label: "Email", value: "neelakanta875@gmail.com", href: "mailto:neelakanta875@gmail.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: MapPin, label: "Location", value: "Ananthapur , ATP", href: "#" },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/NANDYALA-NEELAKANTESWAR-REDDY" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/neelakanteswar-reddy-nandyala-316b2734a/" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
];

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully! I'll get back to you soon.");
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal>
            <span className="inline-flex items-center gap-4 text-primary text-sm font-medium tracking-widest uppercase mb-4">
              <span className="w-8 h-px bg-primary" />
              Get In Touch
              <span className="w-8 h-px bg-primary" />
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Work <span className="text-gradient-primary font-serif italic">Together</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-lg text-muted-foreground">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll do
              my best to get back to you!
            </p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <ScrollReveal direction="left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="NEELAKANTA"
                    required
                    className="bg-card border-border focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="neelakanta875@gmail.com"
                    required
                    className="bg-card border-border focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  required
                  className="bg-card border-border focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                  className="bg-card border-border focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal direction="right" delay={200}>
            <div className="space-y-8">
              <div className="p-8 rounded-xl bg-card border border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <a key={info.label} href={info.href} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="text-foreground group-hover:text-primary transition-colors">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="p-8 rounded-xl bg-card border border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-6">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all duration-300"
                      aria-label={link.label}
                    >
                      <link.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Card */}
              <div className="p-8 rounded-xl glass border border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium text-foreground">Available for Work</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  I'm currently open to full-time positions, freelance projects, and interesting collaborations.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
