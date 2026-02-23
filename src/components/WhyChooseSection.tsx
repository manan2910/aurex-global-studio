import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, TrendingUp, Clock, MessageSquare, Palette, HeadphonesIcon } from "lucide-react";

const reasons = [
  { icon: Target, title: "Conversion Focused Design", description: "Every element is engineered to convert visitors into paying customers." },
  { icon: TrendingUp, title: "Built for Revenue", description: "We don't just make things look good — we make them perform." },
  { icon: Clock, title: "Fast Delivery (7–14 Days)", description: "Get your premium website live in record time without sacrificing quality." },
  { icon: MessageSquare, title: "WhatsApp & Automation", description: "Integrated WhatsApp chat, booking systems, and automation for leads." },
  { icon: Palette, title: "International Standard UI/UX", description: "Designs that rival $10k+ agencies worldwide." },
  { icon: HeadphonesIcon, title: "Premium Support", description: "Dedicated support and revisions until you're 100% satisfied." },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-aurex" className="section-padding relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">Why Aurex</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Why Brands <span className="text-gradient-gold">Choose Us</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card-hover rounded-2xl p-8 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
