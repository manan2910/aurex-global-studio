'use client';

import { motion } from 'framer-motion';

export default function MainWebsite() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full min-h-screen bg-[#050505] text-white overflow-hidden"
            aria-label="Aurex Global Studio — Services Overview"
        >
            <div className="max-w-7xl mx-auto px-6 py-32 md:py-48 flex flex-col items-center justify-center text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight mb-6"
                >
                    Websites Built to <br />
                    <span className="text-[#D4A73C]">Win Clients Globally</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35, duration: 0.8 }}
                    className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10"
                >
                    From high-converting landing pages and eCommerce stores to SaaS platforms and real estate websites — we engineer digital experiences that generate real revenue for global brands.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="w-full h-px bg-white/10 my-16 max-w-lg"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center w-full max-w-5xl">
                    {[
                        { title: "LANDING PAGES & LEAD FUNNELS", desc: "Conversion-engineered pages that turn cold traffic into paying customers." },
                        { title: "ECOMMERCE & SHOPIFY STORES", desc: "Mobile-first online stores built to drive sales across global markets." },
                        { title: "SaaS, REAL ESTATE & BRANDS", desc: "Custom websites for startups, agents and businesses worldwide." },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + idx * 0.1, duration: 0.8 }}
                            className="group cursor-pointer"
                        >
                            <h3 className="text-sm font-semibold tracking-[0.2em] text-[#D4A73C] mb-4 group-hover:text-white transition-colors duration-300">
                                {item.title}
                            </h3>
                            <p className="text-white/60 text-lg leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
