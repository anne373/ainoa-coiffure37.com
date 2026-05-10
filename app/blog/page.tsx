import type { Metadata } from 'next'
import { prisma } from '@/lib/prisma'
import { PostList } from '@/components/blog/PostList'
import { Pagination } from '@/components/blog/Pagination'
import { POSTS_PER_PAGE } from '@/lib/constants'
import { PostSummary } from '@/types/blog'

interface BlogPageProps {
  searchParams: Promise<{ page?: string }>
}

export const metadata: Metadata = {
  title: 'Blog | Ainoa Coiffure',
  description: 'Conseils coiffure, tendances, soins capillaires et actualités du salon Ainoa Coiffure à Saint-Cyr-sur-Loire.',
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { page: pageParam } = await searchParams
  const page = Math.max(1, parseInt(pageParam ?? '1'))

  const [posts, total] = await Promise.all([
    prisma.post.findMany({
      where: { published: true },
      orderBy: { publishedAt: 'desc' },
      skip: (page - 1) * POSTS_PER_PAGE,
      take: POSTS_PER_PAGE,
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        coverImage: true,
        category: true,
        tags: true,
        published: true,
        publishedAt: true,
        createdAt: true,
        _count: { select: { comments: true } },
      },
    }),
    prisma.post.count({ where: { published: true } }),
  ])

  const totalPages = Math.ceil(total / POSTS_PER_PAGE)

  return (
    <main className="pt-28 pb-20 px-6 lg:px-8 max-w-[1280px] mx-auto">
      <div className="mb-12">
        <p className="font-inter text-label-caps text-[#F54927] uppercase tracking-widest mb-3">
          Journal
        </p>
        <h1 className="font-space-grotesk text-h1 text-[#1a1c1c] leading-tight">
          Notre blog
        </h1>
        <p className="font-inter text-body-lg text-[#5f5e5e] mt-4 max-w-xl">
          Conseils, tendances et actualités du salon Ainoa Coiffure.
        </p>
      </div>

      <PostList posts={posts as PostSummary[]} />
      <Pagination page={page} totalPages={totalPages} />
    </main>
  )
}
