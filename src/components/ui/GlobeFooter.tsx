export default function GlobeFooter() {
    return (
        <footer className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#050505]">
            <video
                src="/globe-loop.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-50 mix-blend-screen"
            />
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-4xl md:text-6xl font-display text-white mb-6">
                    Ready to build the future?
                </h2>
                <a
                    href="mailto:contact@aurex.com"
                    className="px-8 py-4 rounded-full bg-white text-[#050505] font-medium tracking-wide hover:bg-[#D4A73C] hover:text-white transition-all duration-300"
                >
                    Contact Aurex
                </a>
            </div>
        </footer>
    );
}
