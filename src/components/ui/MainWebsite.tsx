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
        >
            <div className="max-w-7xl mx-auto px-6 py-32 md:py-48 flex flex-col items-center justify-center text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight mb-6"
                >
                    Turning Ideas Into <br />
                    <span className="text-[#D4A73C]">Visual Experiences</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="w-full h-px bg-white/10 my-16 max-w-lg"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center w-full max-w-5xl">
                    {[
                        { title: "CINEMATIC WEB DEVELOPMENT", desc: "Award-winning scroll-driven experiences." },
                        { title: "IMMERSIVE 3D", desc: "Interactive WebGL and canvas storytelling." },
                        { title: "BRAND ENGINEERING", desc: "Next-gen luxury brand identities." },
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
