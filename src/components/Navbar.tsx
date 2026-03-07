import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Why Aurex", href: "#why-aurex" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">
        <a href="#" className="flex items-center transition-opacity hover:opacity-80">
          <img src="/logo.png" alt="Aurex Logo" className="h-24 md:h-32 w-auto object-contain" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4 border-l border-border/50 pl-8">
            <a href="https://www.instagram.com/aurex._in/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/in/aurex-2032903a8/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50 overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-6 pt-4 border-t border-border/50">
                <a href="https://www.instagram.com/aurex._in/" target="_blank" rel="noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://www.linkedin.com/in/aurex-2032903a8/" target="_blank" rel="noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
