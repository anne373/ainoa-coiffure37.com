import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'
import { CreatePostInput, PaginatedPosts } from '@/types/blog'
import { POSTS_PER_PAGE } from '@/lib/constants'

const postSelect = {
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
} as const

export async function GET(request: NextRequest): Promise<NextResponse> {
  const session = await getSession()
  const { searchParams } = request.nextUrl
  const page = Math.max(1, parseInt(searchParams.get('page') ?? '1'))
  const where = session ? {} : { published: true }

  const [posts, total] = await Promise.all([
    prisma.post.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * POSTS_PER_PAGE,
      take: POSTS_PER_PAGE,
      select: postSelect,
    }),
    prisma.post.count({ where }),
  ])

  const response: PaginatedPosts = {
    posts: posts as PaginatedPosts['posts'],
    total,
    page,
    totalPages: Math.ceil(total / POSTS_PER_PAGE),
  }

  return NextResponse.json(response)
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })

  const body = await request.json() as CreatePostInput

  const post = await prisma.post.create({
    data: {
      ...body,
      publishedAt: body.published ? new Date() : null,
    },
  })

  return NextResponse.json(post, { status: 201 })
}
