import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { prisma } from '@/lib/prisma'
import { MarkdownContent } from '@/components/blog/MarkdownContent'
import { CommentList } from '@/components/blog/CommentList'
import { CommentForm } from '@/components/blog/CommentForm'
import { CommentItem } from '@/types/blog'

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await prisma.post.findUnique({
    where: { slug, published: true },
    select: { title: true, excerpt: true, coverImage: true },
  })

  if (!post) return {}

  return {
    title: `${post.title} | Ainoa Coiffure`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      images: post.coverImage ? [{ url: post.coverImage }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  }
}

// Rendu dynamique — les articles sont générés à la demande et mis en cache par Vercel
export const dynamic = 'force-dynamic'

function formatDate(date: Date | string | null): string {
  if (!date) return ''
  return new Date(date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const post = await prisma.post.findUnique({
    where: { slug, published: true },
    include: { comments: { orderBy: { createdAt: 'asc' } } },
  })

  if (!post) notFound()

  return (
    <>
      <Header />
      <main className="pt-28 pb-20 px-6 lg:px-8 max-w-[1280px] mx-auto">
      <div className="max-w-3xl mx-auto">

        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 font-inter text-label-caps text-[#906f69] uppercase">
          <Link href="/blog" className="hover:text-[#F54927] transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-[#1a1c1c]">{post.category}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-2 flex-wrap mb-4">
            <span className="bg-[#F54927] text-white text-label-caps rounded-full px-3 py-1 uppercase">
              {post.category}
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#FFF7F2] text-[#5f5e5e] text-label-caps rounded-full px-3 py-1 uppercase border border-[#e2e2e2]"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-space-grotesk text-h1 text-[#1a1c1c] leading-tight mb-4">
            {post.title}
          </h1>

          <p className="font-inter text-body-lg text-[#5f5e5e] mb-4">{post.excerpt}</p>

          <time className="font-inter text-label-caps text-[#906f69] uppercase">
            {formatDate(post.publishedAt ?? post.createdAt)}
          </time>
        </header>

        {/* Cover image */}
        {post.coverImage && (
          <div className="relative aspect-video w-full rounded-[40px] overflow-hidden mb-10">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <section className="mb-16">
          <MarkdownContent content={post.content} />
        </section>

        {/* Comments */}
        <section>
          <h2 className="font-space-grotesk text-h2 text-[#1a1c1c] mb-8">
            {post.comments.length} Commentaire{post.comments.length !== 1 ? 's' : ''}
          </h2>
          <div className="mb-10">
            <CommentList comments={post.comments as CommentItem[]} />
          </div>
          <CommentForm postId={post.id} />
        </section>
      </div>
    </main>
      <Footer />
    </>
  )
}
