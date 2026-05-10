import { PostSummary } from '@/types/blog'
import { PostCard } from './PostCard'

interface PostListProps {
  posts: PostSummary[]
}

export function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-24">
        <p className="font-space-grotesk text-h3 text-[#5f5e5e]">Aucun article pour le moment</p>
        <p className="font-inter text-body-md text-[#906f69] mt-2">Revenez bientôt !</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
