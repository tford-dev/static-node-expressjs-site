import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { siteOrigin } from '@/lib/seo';

const staticRoutes = ['/', '/about', '/recent', '/it-lab-october-lab-2025'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: new URL(route, siteOrigin).toString(),
    lastModified,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.8
  }));

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: new URL(`/projects/${project.id}`, siteOrigin).toString(),
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7
  }));

  return [...staticPages, ...projectPages];
}
