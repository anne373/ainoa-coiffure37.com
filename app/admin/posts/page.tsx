import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { PostTable } from '@/components/admin/PostTable'
import { PostSummary } from '@/types/blog'

export default async function AdminPostsPage() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
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
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-space-grotesk text-h2 text-[#1a1c1c]">Articles</h1>
        <Link
          href="/admin/posts/new"
          className="bg-[#F54927] text-white rounded-full px-6 py-3 font-space-grotesk font-semibold hover:bg-[#da3615] transition-colors text-sm"
        >
          + Nouvel article
        </Link>
      </div>

      <PostTable posts={posts as PostSummary[]} />
    </div>
  )
}
