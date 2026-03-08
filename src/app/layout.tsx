import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const siteUrl = 'https://aurexstudio.com';

export const metadata: Metadata = {
    title: {
        default: 'Aurex | Premium Web Design & Development Agency',
        template: '%s | Aurex',
    },
    description: 'Aurex is a premium web design and development agency specialising in high-converting landing pages, eCommerce websites, SaaS platforms, and real estate websites for global clients. We build websites that print clients.',
    keywords: [
        'web design agency',
        'web development company',
        'ecommerce website development',
        'landing page design',
        'custom website design',
        'premium web design agency',
        'global web design agency',
        'conversion focused web design',
        'high converting website',
        'ecommerce website design',
        'shopify website development',
        'SaaS website design',
        'real estate website design',
        'startup website development',
        'B2B web design agency',
        'best web design agency 2025',
        'international web design agency',
        'website design for global brands',
        'professional web development services',
        'responsive website design',
        'mobile first web design',
        'UX UI design agency',
        'brand website design',
        'agency portfolio website',
        'Aurex Studio',
        'Aurex Global Studio',
    ],
    authors: [{ name: 'Aurex', url: siteUrl }],
    creator: 'Aurex',
    publisher: 'Aurex',
    metadataBase: new URL(siteUrl),
    alternates: {
        canonical: '/',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteUrl,
        siteName: 'Aurex',
        title: 'Aurex | Premium Web Design & Development Agency',
        description: 'We build high-converting websites for global brands. Landing pages, eCommerce stores, SaaS platforms & real estate websites — built to generate leads and close clients.',
        images: [
            {
                url: `${siteUrl}/og-image.png`,
                width: 1200,
                height: 630,
                alt: 'Aurex — Premium Web Design Agency',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Aurex | Premium Web Design & Development Agency',
        description: 'We build high-converting websites for global brands. Landing pages, eCommerce, SaaS & real estate — built to generate leads and close clients.',
        images: [`${siteUrl}/og-image.png`],
        creator: '@aurexstudio',
    },
    icons: {
        icon: '/logo.png',
        shortcut: '/logo.png',
        apple: '/logo.png',
    },
    verification: {
        google: 'your-google-verification-code',
    },
    category: 'technology',
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Organization',
            '@id': `${siteUrl}/#organization`,
            name: 'Aurex',
            url: siteUrl,
            logo: {
                '@type': 'ImageObject',
                url: `${siteUrl}/logo.png`,
            },
            description: 'Premium web design and development agency building high-converting websites for global clients. Specialising in landing pages, eCommerce, SaaS, and real estate websites.',
            contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                availableLanguage: 'English',
            },
            sameAs: [
                'https://www.instagram.com/aurexstudio',
            ],
            areaServed: 'Worldwide',
            serviceType: [
                'Web Design',
                'Web Development',
                'eCommerce Development',
                'Landing Page Design',
                'SaaS Website Design',
                'Real Estate Website Design',
                'Brand Website Design',
            ],
        },
        {
            '@type': 'WebSite',
            '@id': `${siteUrl}/#website`,
            url: siteUrl,
            name: 'Aurex',
            description: 'Premium web design and development agency for global clients.',
            publisher: {
                '@id': `${siteUrl}/#organization`,
            },
            potentialAction: {
                '@type': 'SearchAction',
                target: {
                    '@type': 'EntryPoint',
                    urlTemplate: `${siteUrl}/?q={search_term_string}`,
                },
                'query-input': 'required name=search_term_string',
            },
        },
        {
            '@type': 'ProfessionalService',
            '@id': `${siteUrl}/#service`,
            name: 'Aurex',
            image: `${siteUrl}/logo.png`,
            url: siteUrl,
            priceRange: '$$',
            openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00',
            },
        },
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body className="bg-[#050505] text-white font-sans antialiased min-h-screen">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <TooltipProvider>
                    {children}
                    <Toaster />
                    <Sonner />
                </TooltipProvider>
            </body>
        </html>
    );
}

