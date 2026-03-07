'use client';

import ScrollManager from "@/components/cinematic/ScrollManager";
import HeroScroll from "@/components/cinematic/HeroScroll";
import MainWebsite from "@/components/ui/MainWebsite";
import GlobeFooter from "@/components/ui/GlobeFooter";
import { useImagePreloader } from "@/hooks/useImagePreloader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import GlobalClientsSection from "@/components/GlobalClientsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import InstagramButton from "@/components/InstagramButton";

const sceneConfigs = [
    { path: '/sequence-1', count: 120 },
    { path: '/sequence-2', count: 120 },
    { path: '/sequence-3', count: 120 },
];

export default function Home() {
    const { images } = useImagePreloader(sceneConfigs);

    return (
        <ScrollManager>
            <main className="bg-[#050505] min-h-screen">
                <HeroScroll images={images} />

                <MainWebsite />

                <div className="relative z-20 bg-background text-foreground">
                    <Navbar />
                    <HeroSection />
                    <AboutSection />
                    <ServicesSection />
                    <PortfolioSection />
                    <WhyChooseSection />
                    <FAQSection />
                    <GlobalClientsSection />
                    <CTASection />
                    <Footer />
                    <InstagramButton />
                    <WhatsAppButton />
                </div>

                <GlobeFooter />
            </main>
        </ScrollManager>
    );
}
