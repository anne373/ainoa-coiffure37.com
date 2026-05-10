import type { MetadataRoute } from 'next'
import { business } from '@/lib/business'

const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: business.url,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  },
  {
    url: `${business.url}/head-spa`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${business.url}/blog`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const { prisma } = await import('@/lib/prisma')
    const posts = await prisma.post.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
      orderBy: { publishedAt: 'desc' },
    })

    const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
      url: `${business.url}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))

    return [...staticRoutes, ...postEntries]
  } catch {
    return staticRoutes
  }
}
