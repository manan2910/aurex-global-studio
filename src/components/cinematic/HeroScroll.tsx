'use client';

import CanvasRenderer from "./CanvasRenderer";

export default function HeroScroll({ images }: { images: HTMLImageElement[] }) {
    return (
        <section className="relative w-full bg-[#050505] text-white">
            {/* Height space handled inside CanvasRenderer */}
            <CanvasRenderer images={images} />
        </section>
    );
}
