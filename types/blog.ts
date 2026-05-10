export interface PostSummary {
  id: string
  title: string
  slug: string
  excerpt: string
  coverImage: string | null
  category: string
  tags: string[]
  published: boolean
  publishedAt: Date | null
  createdAt: Date
  _count: { comments: number }
}

export interface PostDetail extends Omit<PostSummary, '_count'> {
  content: string
  updatedAt: Date
  comments: CommentItem[]
}

export interface CommentItem {
  id: string
  author: string
  email: string
  content: string
  createdAt: Date
}

export interface PaginatedPosts {
  posts: PostSummary[]
  total: number
  page: number
  totalPages: number
}

export interface CreatePostInput {
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage?: string
  category: string
  tags: string[]
  published: boolean
}

export type UpdatePostInput = Partial<CreatePostInput>

export interface CreateCommentInput {
  author: string
  email: string
  content: string
  postId: string
}

export interface SessionPayload {
  userId: string
  username: string
}
