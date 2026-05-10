import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { PostList } from '@/components/blog/PostList'
import { Pagination } from '@/components/blog/Pagination'
import { POSTS_PER_PAGE } from '@/lib/constants'
import { PostSummary } from '@/types/blog'

interface CategoryPageProps {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ page?: string }>
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  return {
    title: `${slug} | Blog Ainoa Coiffure`,
    description: `Articles de la catégorie ${slug} — Ainoa Coiffure.`,
  }
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { slug } = await params
  const { page: pageParam } = await searchParams
  const page = Math.max(1, parseInt(pageParam ?? '1'))

  const categoryName = decodeURIComponent(slug)

  const [posts, total] = await Promise.all([
    prisma.post.findMany({
      where: { published: true, category: { equals: categoryName, mode: 'insensitive' } },
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
    prisma.post.count({
      where: { published: true, category: { equals: categoryName, mode: 'insensitive' } },
    }),
  ])

  if (total === 0) notFound()

  const totalPages = Math.ceil(total / POSTS_PER_PAGE)

  return (
    <main className="pt-28 pb-20 px-6 lg:px-8 max-w-[1280px] mx-auto">
      <div className="mb-12">
        <p className="font-inter text-label-caps text-[#F54927] uppercase tracking-widest mb-3">
          Catégorie
        </p>
        <h1 className="font-space-grotesk text-h1 text-[#1a1c1c] leading-tight">
          {categoryName}
        </h1>
        <p className="font-inter text-body-lg text-[#5f5e5e] mt-4">
          {total} article{total !== 1 ? 's' : ''}
        </p>
      </div>

      <PostList posts={posts as PostSummary[]} />
      <Pagination
        page={page}
        totalPages={totalPages}
        basePath={`/categories/${slug}`}
      />
    </main>
  )
}
