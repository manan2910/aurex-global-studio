import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe } from "lucide-react";

const countries = ["USA", "Canada", "UK", "Dubai", "Australia", "India", "Germany", "Singapore"];

const GlobalClientsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">Global Reach</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Serving Clients <span className="text-gradient-gold">Worldwide</span> 🌎
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            From startups in Silicon Valley to real estate firms in WorldWide — we deliver premium web solutions globally.
          </p>
        </motion.div>

        {/* Globe visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-48 h-48 mx-auto mb-12"
        >
          <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-glow-pulse" />
          <div className="absolute inset-4 rounded-full border border-primary/10" />
          <div className="absolute inset-8 rounded-full border border-primary/5" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Globe size={64} className="text-primary/60" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {countries.map((c) => (
            <span
              key={c}
              className="px-5 py-2 rounded-full glass-card text-sm font-medium text-foreground/70 hover:text-primary hover:border-primary/30 transition-colors duration-300"
            >
              {c}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalClientsSection;
