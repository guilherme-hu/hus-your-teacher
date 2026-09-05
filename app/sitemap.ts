import type { MetadataRoute } from 'next'
import { BASE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    { url: BASE_URL, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE_URL}/materiais`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/aulas`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/sobre`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/membros`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/voluntariado`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
