import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockProjects = [
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
];

const liveProjects = [
  {
    title: "Reliable Construction Solutions",
    industry: "Construction",
    description: "Professional construction company website with service showcase and lead capture — live & serving real clients.",
    url: "https://reliableconstructionsolution.com/",
    gradient: "from-orange-900/40 to-red-900/20",
  },
  {
    title: "Raftra",
    industry: "SaaS Startup",
    description: "Live SaaS startup platform with modern UI, user onboarding and conversion-driven design.",
    url: "https://frontend-blue-five-wrac9qlzrm.vercel.app/",
    gradient: "from-violet-900/40 to-purple-900/20",
  },
];

type Tab = "mock" | "live";

const ProjectCard = ({ project, i, inView }: { project: typeof mockProjects[0]; i: number; inView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: 0.1 * i }}
    className="glass-card-hover rounded-2xl overflow-hidden group"
  >
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
);

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<Tab>("mock");

  const tabs: { key: Tab; label: string; subtitle: string }[] = [
    { key: "mock", label: "Showcase Projects", subtitle: "Concept builds across niches" },
    { key: "live", label: "Live Projects", subtitle: "Real clients, real results" },
  ];

  const activeProjects = activeTab === "mock" ? mockProjects : liveProjects;

  return (
    <section id="portfolio" className="section-padding relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">Our Work</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Selected <span className="text-gradient-gold">Projects</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex gap-2 p-1.5 rounded-xl bg-muted/30 border border-border/50">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <span className="block">{tab.label}</span>
                <span className="block text-[10px] font-normal opacity-70 mt-0.5">{tab.subtitle}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {activeProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} inView={inView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
