import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { CreateCommentInput } from '@/types/blog'

export async function POST(request: NextRequest): Promise<NextResponse> {
  const body = await request.json() as Partial<CreateCommentInput>

  if (!body.author || !body.email || !body.content || !body.postId) {
    return NextResponse.json({ error: 'Tous les champs sont requis' }, { status: 400 })
  }

  const post = await prisma.post.findUnique({
    where: { id: body.postId, published: true },
    select: { id: true },
  })

  if (!post) return NextResponse.json({ error: 'Article introuvable' }, { status: 404 })

  const comment = await prisma.comment.create({
    data: {
      author: body.author,
      email: body.email,
      content: body.content,
      postId: body.postId,
    },
  })

  return NextResponse.json(comment, { status: 201 })
}
