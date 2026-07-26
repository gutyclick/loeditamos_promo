import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://pack.loeditamos.com',
      lastModified: new Date('2026-07-26'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://pack.loeditamos.com/legal',
      lastModified: new Date('2026-07-26'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
