'use client';

import { useState, useEffect } from 'react';

export function useImagePreloader(sceneConfigs: { path: string, count: number }[]) {
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let loaded = 0;
        const total = sceneConfigs.reduce((acc, curr) => acc + curr.count, 0);
        const loadedImages: HTMLImageElement[] = [];

        // Early return if no configs
        if (total === 0) {
            setProgress(100);
            return;
        }

        sceneConfigs.forEach(scene => {
            for (let i = 1; i <= scene.count; i++) {
                const img = new Image();
                const frameNumber = String(i).padStart(3, '0'); // e.g., 001
                img.src = `${scene.path}/ezgif-frame-${frameNumber}.jpg`;

                const checkComplete = () => {
                    loaded++;
                    setProgress(Math.round((loaded / total) * 100));
                    if (loaded === total) setImages(loadedImages);
                };

                img.onload = checkComplete;
                img.onerror = checkComplete; // Prevent hanging on missing frames

                loadedImages.push(img);
            }
        });
    }, [JSON.stringify(sceneConfigs)]);

    return { images, progress };
}
