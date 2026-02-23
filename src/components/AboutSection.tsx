import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "150+", label: "Projects Built" },
  { value: "12+", label: "Industries Served" },
  { value: "7–14", label: "Days Avg Delivery" },
  { value: "98%", label: "Client Satisfaction" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">About Aurex</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            We Don't Just Design Websites —{" "}
            <span className="text-gradient-gold">We Build Sales Machines</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Aurex is a global web agency focused on building high-performance, conversion-driven websites that turn visitors into customers. We focus on ROI & leads, not just aesthetics. Every pixel is engineered to convert.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass-card-hover rounded-xl p-6 text-center"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
