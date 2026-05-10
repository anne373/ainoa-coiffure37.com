import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { setSession } from '@/lib/auth'

export async function POST(request: NextRequest): Promise<NextResponse> {
  const body = await request.json() as { username?: string; password?: string }

  if (!body.username || !body.password) {
    return NextResponse.json({ error: 'Identifiants manquants' }, { status: 400 })
  }

  const user = await prisma.user.findUnique({ where: { username: body.username } })

  if (!user || !(await bcrypt.compare(body.password, user.password))) {
    return NextResponse.json({ error: 'Identifiants incorrects' }, { status: 401 })
  }

  await setSession({ userId: user.id, username: user.username })

  return NextResponse.json({ success: true })
}
