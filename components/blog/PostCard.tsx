import Image from 'next/image'
import Link from 'next/link'
import { PostSummary } from '@/types/blog'

interface PostCardProps {
  post: PostSummary
}

function formatDate(date: Date | string | null): string {
  if (!date) return ''
  return new Date(date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article className="bg-white rounded-[40px] overflow-hidden shadow-sm card-aura-soft transition-transform duration-300 group-hover:-translate-y-1 h-full flex flex-col">
        {post.coverImage ? (
          <div className="relative aspect-video w-full flex-shrink-0">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div className="aspect-video w-full bg-[#FFF7F2] flex items-center justify-center flex-shrink-0">
            <span className="text-4xl">✂️</span>
          </div>
        )}

        <div className="p-6 flex flex-col flex-1 gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="bg-[#F54927] text-white text-label-caps rounded-full px-3 py-1 uppercase">
              {post.category}
            </span>
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="bg-[#FFF7F2] text-[#5f5e5e] text-label-caps rounded-full px-3 py-1 uppercase border border-[#e2e2e2]"
              >
                {tag}
              </span>
            ))}
          </div>

          <h2 className="font-space-grotesk text-h3 text-[#1a1c1c] leading-tight line-clamp-2 group-hover:text-[#F54927] transition-colors">
            {post.title}
          </h2>

          <p className="font-inter text-body-md text-[#5f5e5e] line-clamp-3 flex-1">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-2 border-t border-[#e2e2e2] mt-auto">
            <time className="font-inter text-label-caps text-[#906f69] uppercase">
              {formatDate(post.publishedAt ?? post.createdAt)}
            </time>
            <span className="font-inter text-label-caps text-[#5f5e5e] uppercase">
              {post._count.comments} commentaire{post._count.comments !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
