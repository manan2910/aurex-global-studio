import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Sydney Lewis Real Estate",
    industry: "Real Estate",
    description: "Premium property showcase with lead generation and conversion-optimized landing pages.",
    url: "https://sydney-lewis-real-estate.vercel.app/",
    gradient: "from-amber-900/40 to-yellow-900/20",
  },
  {
    title: "Luxe Auto Connect",
    industry: "Automobile",
    description: "Luxury automobile import/export platform with premium UX and global reach.",
    url: "https://luxe-auto-connect.vercel.app/",
    gradient: "from-slate-800/40 to-zinc-900/20",
  },
  {
    title: "Reflections Rise Cafe",
    industry: "Hospitality",
    description: "Modern cafe website with elegant design, menu showcase and online ordering.",
    url: "https://refections-rise.vercel.app/",
    gradient: "from-emerald-900/40 to-teal-900/20",
  },
  {
    title: "Ecommerce Store",
    industry: "Ecommerce",
    description: "Full-featured ecommerce platform with conversion-optimized product pages.",
    url: "https://eecommerce-ten.vercel.app/",
    gradient: "from-blue-900/40 to-indigo-900/20",
  },
  {
    title: "SaaS Dashboard",
    industry: "SaaS",
    description: "Modern SaaS frontend with dashboard UI, waitlist funnels and clean UX.",
    url: "https://frontend-blue-five-wrac9qlzrm.vercel.app/",
    gradient: "from-violet-900/40 to-purple-900/20",
  },
  {
    title: "Reliable Construction Solutions",
    industry: "Construction",
    description: "Professional construction company website with service showcase and lead capture.",
    url: "https://reliableconstructionsolution.com/",
    gradient: "from-orange-900/40 to-red-900/20",
  },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="section-padding relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">Our Work</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Selected <span className="text-gradient-gold">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card-hover rounded-2xl overflow-hidden group"
            >
              {/* Mock browser window */}
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
                </div>
                <span className="font-display text-lg font-bold text-foreground/30 group-hover:text-foreground/50 transition-colors duration-500">
                  {project.industry}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <span className="text-xs text-primary font-semibold uppercase tracking-wider">{project.industry}</span>
                <h3 className="font-display text-lg font-bold mt-1 mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                <Button variant="gold-outline" size="sm" asChild>
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    View Live <ExternalLink size={14} />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
