import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'
import { UpdatePostInput } from '@/types/blog'

type Params = { params: Promise<{ id: string }> }

export async function GET(_: NextRequest, { params }: Params): Promise<NextResponse> {
  const { id } = await params
  const post = await prisma.post.findUnique({
    where: { id },
    include: { comments: { orderBy: { createdAt: 'asc' } } },
  })
  if (!post) return NextResponse.json({ error: 'Introuvable' }, { status: 404 })
  return NextResponse.json(post)
}

export async function PUT(request: NextRequest, { params }: Params): Promise<NextResponse> {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })

  const { id } = await params
  const body = await request.json() as UpdatePostInput

  const existing = await prisma.post.findUnique({
    where: { id },
    select: { published: true, publishedAt: true },
  })

  if (!existing) return NextResponse.json({ error: 'Introuvable' }, { status: 404 })

  const publishedAt =
    body.published && !existing.published ? new Date() : existing.publishedAt ?? null

  const post = await prisma.post.update({
    where: { id },
    data: { ...body, publishedAt },
  })

  return NextResponse.json(post)
}

export async function DELETE(_: NextRequest, { params }: Params): Promise<NextResponse> {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })

  const { id } = await params
  await prisma.post.delete({ where: { id } })
  return NextResponse.json({ success: true })
}
