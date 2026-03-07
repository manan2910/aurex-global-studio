'use client';

import { useEffect, useRef } from 'react';

export default function CanvasRenderer({ images }: { images: HTMLImageElement[] }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const text1Ref = useRef<HTMLDivElement>(null);
    const text2Ref = useRef<HTMLDivElement>(null);
    const text3Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d', { alpha: false });
        if (!ctx || images.length === 0) return;

        let animationFrameId: number;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            renderFrame();
        };

        const renderImage = (img: HTMLImageElement, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
            const canvasRatio = canvas.width / canvas.height;
            const imgRatio = img.naturalWidth / img.naturalHeight;

            let drawWidth = canvas.width;
            let drawHeight = canvas.height;
            let offsetX = 0;
            let offsetY = 0;

            const isMobile = window.innerWidth < 768; // Check if it's a mobile viewport

            if (isMobile) {
                // For phones (like iPhone 14) which are tall and narrow, we MUST fit the image completely to the width.
                // We'll calculate the height based on the image's native aspect ratio so it doesn't compress or stretch.
                drawWidth = canvas.width;
                drawHeight = drawWidth / imgRatio;

                // Center the image vertically
                offsetX = 0;
                offsetY = (canvas.height - drawHeight) / 2;

            } else {
                // On desktop, keep the "cover" logic ensuring no black bars
                if (canvasRatio > imgRatio) {
                    drawHeight = canvas.width / imgRatio;
                    offsetY = (canvas.height - drawHeight) / 2;
                } else {
                    drawWidth = canvas.height * imgRatio;
                    offsetX = (canvas.width - drawWidth) / 2;
                }
            }

            ctx.fillStyle = '#050505';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        };

        let lastProgress = -1;

        const renderFrame = () => {
            animationFrameId = requestAnimationFrame(renderFrame);

            if (!container || !canvas) return;

            const { top, height } = container.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            const scrollableDistance = height - viewportHeight;
            let progress = -top / scrollableDistance;
            progress = Math.max(0, Math.min(1, progress));

            // Avoid redrawing if we haven't scrolled
            if (progress === lastProgress) return;
            lastProgress = progress;

            let opacity = 1;
            let frameIndex = 0;

            if (progress < 0.95) {
                const normalizedProgress = progress / 0.95;
                frameIndex = Math.min(
                    images.length - 1,
                    Math.floor(normalizedProgress * images.length)
                );
            } else {
                frameIndex = images.length - 1;
            }

            if (progress <= 0.03) {
                // Fade in from pitch black over the first 3% of scroll
                opacity = progress / 0.03;
            } else if (progress >= 0.95) {
                const fadeProgress = (progress - 0.95) / 0.05;
                opacity = 1 - fadeProgress;
            }

            const img = images[frameIndex];
            if (img && img.complete && img.naturalHeight !== 0 && img.naturalWidth !== 0) {
                renderImage(img, ctx, canvas);
                canvas.style.opacity = `${opacity}`;
            }

            // --- Text Overlays Opacity Logic ---
            // Sequence 1: 0.05 -> 0.25 (Fade in 0.05 -> 0.1, Fade out 0.25 -> 0.3)
            let opacity1 = 0;
            if (progress > 0.05 && progress < 0.3) {
                if (progress < 0.1) opacity1 = (progress - 0.05) / 0.05;
                else if (progress > 0.25) opacity1 = 1 - ((progress - 0.25) / 0.05);
                else opacity1 = 1;
            }
            if (text1Ref.current) text1Ref.current.style.opacity = `${opacity1}`;

            // Sequence 2: 0.38 -> 0.58 (Fade in 0.38 -> 0.43, Fade out 0.58 -> 0.63)
            let opacity2 = 0;
            if (progress > 0.38 && progress < 0.63) {
                if (progress < 0.43) opacity2 = (progress - 0.38) / 0.05;
                else if (progress > 0.58) opacity2 = 1 - ((progress - 0.58) / 0.05);
                else opacity2 = 1;
            }
            if (text2Ref.current) text2Ref.current.style.opacity = `${opacity2}`;

            // Sequence 3: 0.71 -> 0.90 (Fade in 0.71 -> 0.76, Fade out 0.90 -> 0.95)
            let opacity3 = 0;
            if (progress > 0.71 && progress < 0.95) {
                if (progress < 0.76) opacity3 = (progress - 0.71) / 0.05;
                else if (progress > 0.90) opacity3 = 1 - ((progress - 0.90) / 0.05);
                else opacity3 = 1;
            }
            if (text3Ref.current) text3Ref.current.style.opacity = `${opacity3}`;
            // -----------------------------------
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [images]);

    return (
        <div ref={containerRef} className="relative w-full" style={{ height: `${images.length > 0 ? (images.length / 120) * 400 : 400}vh` }}>
            <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#050505]">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

                {/* Sequence 1 Text: Aurex Glowing Logo */}


                {/* Sequence 2 Text: Laptop Opening */}
                <div
                    ref={text2Ref}
                    className="absolute inset-0 flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-12 pointer-events-none z-10 will-change-[opacity]"
                    style={{ opacity: 0 }}
                >
                    <div className="md:w-1/2">
                        <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-white leading-tight">
                            We Build Websites That Print Clients.
                        </h2>
                        <div className="w-16 h-1 bg-[#D4A73C] my-6"></div>
                        <p className="text-xl md:text-2xl font-light text-white/90 mb-2">
                            Strategy. Design. Development.
                        </p>
                        <p className="text-lg text-white/70 mb-8 max-w-lg">
                            Everything engineered to convert visitors into customers.
                        </p>
                        <ul className="space-y-4 text-sm md:text-base tracking-widest text-white/80">
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A73C]"></span> Conversion-Focused Design
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A73C]"></span> High-Performance Development
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A73C]"></span> Modern Digital Experiences
                            </li>
                        </ul>
                        <p className="mt-12 text-xs uppercase tracking-widest text-white/50">
                            Built for ambitious brands.
                        </p>
                    </div>
                </div>

                {/* Sequence 3 Text: Typing / Dive */}
                <div
                    ref={text3Ref}
                    className="absolute inset-0 flex flex-col justify-center items-end text-right max-w-7xl mx-auto px-6 md:px-12 pointer-events-none z-10 will-change-[opacity]"
                    style={{ opacity: 0 }}
                >
                    <div className="md:w-1/2 flex flex-col items-end">
                        <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-white leading-tight">
                            From Idea to Impact.
                        </h2>
                        <div className="w-16 h-1 bg-[#D4A73C] my-6"></div>
                        <p className="text-lg md:text-xl font-light text-white/80 max-w-md mb-8 text-balance">
                            We design and build websites that turn traffic into revenue. Trusted by startups, founders and global brands.
                        </p>

                        <div className="grid grid-cols-2 gap-8 mb-12 w-full max-w-md border-t border-white/10 pt-8 mt-4">
                            <div className="flex flex-col">
                                <span className="text-3xl font-display font-bold text-[#D4A73C]">+10</span>
                                <span className="text-xs uppercase tracking-wider text-white/60 mt-1">Projects Delivered</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-display font-bold text-[#D4A73C]">+1</span>
                                <span className="text-xs uppercase tracking-wider text-white/60 mt-1">International Clients</span>
                            </div>
                            <div className="flex flex-col col-span-2">
                                <span className="text-xl font-display font-medium text-white mb-1">Conversion-Driven Strategy</span>
                                <span className="text-xs tracking-wider text-white/40">Data-backed UX decisions</span>
                            </div>
                        </div>

                        <p className="text-2xl font-display tracking-widest text-[#D4A73C] mt-auto">
                            Welcome to Aurex.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
