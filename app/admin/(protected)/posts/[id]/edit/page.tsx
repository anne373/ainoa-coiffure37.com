import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { PostForm } from '@/components/admin/PostForm'

interface EditPostPageProps {
  params: Promise<{ id: string }>
}

export default async function EditPostPage({ params }: EditPostPageProps) {
  const { id } = await params
  const post = await prisma.post.findUnique({ where: { id } })

  if (!post) notFound()

  return (
    <div>
      <h1 className="font-space-grotesk text-h2 text-[#1a1c1c] mb-8">
        Modifier : {post.title}
      </h1>
      <PostForm
        id={post.id}
        initialData={{
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          content: post.content,
          coverImage: post.coverImage ?? '',
          category: post.category,
          tags: post.tags,
          published: post.published,
        }}
      />
    </div>
  )
}
