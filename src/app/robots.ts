import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/dashboard/', '/admin/'],
            },
        ],
        sitemap: 'https://aurexstudio.com/sitemap.xml',
        host: 'https://aurexstudio.com',
    };
}
