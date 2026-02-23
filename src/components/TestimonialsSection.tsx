import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "James Richardson",
    role: "CEO, Richardson Properties",
    text: "Aurex completely transformed our online presence. Our lead generation increased by 300% within the first month. Absolutely world-class work.",
    rating: 5,
  },
  {
    name: "Sarah Al-Mansouri",
    role: "Founder, Luxe Imports Dubai",
    text: "The website Aurex built for us looks like a $15k agency product. Fast delivery, incredible design, and they truly understand conversion.",
    rating: 5,
  },
  {
    name: "Michael Torres",
    role: "CTO, LaunchPad SaaS",
    text: "Best agency we've worked with. They delivered a stunning SaaS landing page that doubled our trial signups. Highly recommended.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">Testimonials</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="glass-card-hover rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-muted-foreground text-xs">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
