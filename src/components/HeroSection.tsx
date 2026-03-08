import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Clock, Target, Globe } from "lucide-react";

const trustItems = [
  { icon: Zap, label: "Fast 7–14 Day Delivery" },
  { icon: Clock, label: "24/7 Support" },
  { icon: Target, label: "Conversion Focused" },
  { icon: Globe, label: "Serving Global Clients" },
];

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Aurex — Premium Web Design Agency"
    >
      {/* Background effects */}
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Floating Founder Card - Left */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hidden lg:block absolute left-[2%] xl:left-[8%] top-[20%] z-20"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="relative w-48 xl:w-56 h-64 xl:h-72 rounded-2xl border border-primary/20 bg-background/50 backdrop-blur-md p-2 shadow-2xl -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer group">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-transparent">
              <img
                src="/jalaj.png"
                alt="Jalaj"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/90 via-background/40 to-transparent text-center translate-y-2 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all duration-500">
                <p className="text-primary font-bold text-sm drop-shadow-md">Jalaj</p>
                <p className="text-xs text-white/90 font-medium drop-shadow-md">Founder</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Founder Card - Right */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="hidden lg:block absolute right-[2%] xl:right-[8%] top-[30%] z-20"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <div className="relative w-48 xl:w-56 h-64 xl:h-72 rounded-2xl border border-primary/20 bg-background/50 backdrop-blur-md p-2 shadow-2xl rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer group">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-bl from-primary/10 to-transparent">
              <img
                src="/manan.png"
                alt="Manan"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/90 via-background/40 to-transparent text-center translate-y-2 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all duration-500">
                <p className="text-primary font-bold text-sm drop-shadow-md">Manan</p>
                <p className="text-xs text-white/90 font-medium drop-shadow-md">Co-Founder</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-sm font-medium mb-8 bg-primary/5">
            🌍 Trusted by Startups & Global Brands Worldwide
          </span>
        </motion.div>

        <h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-balance"
        >
          Premium Web Design &{" "}
          <span className="text-gradient-gold">Development Agency</span>{" "}
          for Global Brands
        </h1>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 text-balance"
        >
          Aurex is a premium web design &amp; development agency building high-converting <strong>landing pages</strong>, <strong>eCommerce websites</strong>, <strong>SaaS platforms</strong>, and <strong>real estate websites</strong> for ambitious founders and global brands.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button variant="gold" size="xl" asChild>
            <a href="#contact">
              Get a Premium Website <ArrowRight className="ml-1" />
            </a>
          </Button>
          <Button variant="gold-outline" size="xl" asChild>
            <a href="#portfolio">View Our Work</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-muted-foreground text-sm">
              <Icon size={16} className="text-primary" />
              <span>{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Mobile only Founder Avatars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="lg:hidden mt-12 flex flex-col items-center gap-4"
        >
          <div className="flex -space-x-4">
            <div className="relative w-12 h-12 rounded-full border-2 border-background overflow-hidden z-20 shadow-lg">
              <img src="/jalaj.png" alt="Jalaj" className="w-full h-full object-cover object-top" />
            </div>
            <div className="relative w-12 h-12 rounded-full border-2 border-background overflow-hidden z-10 shadow-lg">
              <img src="/manan.png" alt="Manan" className="w-full h-full object-cover object-top" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground font-medium">Built with precision by Jalaj & Manan</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
