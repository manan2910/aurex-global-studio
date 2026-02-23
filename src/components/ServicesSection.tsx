import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, ShoppingBag, Rocket, User } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Real Estate Websites",
    tag: "Main Niche",
    features: ["Lead generation funnels", "WhatsApp integration", "Booking systems", "Property showcase", "High-ticket client conversion"],
  },
  {
    icon: ShoppingBag,
    title: "Ecommerce Websites",
    features: ["Shopify & custom builds", "Conversion optimized pages", "Fast checkout UX", "Mobile-first design"],
  },
  {
    icon: Rocket,
    title: "SaaS & Startup Websites",
    features: ["Landing pages", "Dashboard frontend", "Waitlist funnels", "Modern UI/UX"],
  },
  {
    icon: User,
    title: "Personal Brand Websites",
    features: ["Influencers & coaches", "Agency portfolios", "Personal sites", "Content platforms"],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">What We Do</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Premium <span className="text-gradient-gold">Services</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="glass-card-hover rounded-2xl p-8 group relative overflow-hidden"
            >
              {service.tag && (
                <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                  {service.tag}
                </span>
              )}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
