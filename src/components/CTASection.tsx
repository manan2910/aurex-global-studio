import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, MessageCircle, Instagram, Linkedin } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-balance">
            Your Website Should Bring Clients —{" "}
            <span className="text-gradient-gold">Not Just Exist</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-4 max-w-2xl mx-auto">
            Let's build a website that actually converts. Book a free strategy call and let's discuss your project.
          </p>
          <p className="text-primary text-sm font-semibold mb-10">
            ⚡ Currently taking limited projects each month.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <Button variant="gold" size="xl" asChild>
            <a href="https://www.linkedin.com/in/aurex-2032903a8/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2" size={20} /> Connect on LinkedIn
            </a>
          </Button>
          <Button variant="gold-outline" size="lg" asChild>
            <a href="https://www.instagram.com/aurex._in/" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2" size={20} /> Follow on Instagram
            </a>
          </Button>
          <Button variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5" asChild>
            <a href="https://wa.me/918851454740" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2" size={18} /> WhatsApp Us
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground text-sm"
        >
          <a href="tel:+918851454740" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone size={14} /> +91 8851454740
          </a>
          <a href="tel:+918860509005" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone size={14} /> +91 8860509005
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
