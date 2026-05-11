import { NextRequest, NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import { getSession } from '@/lib/auth'
import { ALLOWED_IMAGE_TYPES, MAX_IMAGE_SIZE_BYTES } from '@/lib/constants'

export async function POST(request: NextRequest): Promise<NextResponse> {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })

  const formData = await request.formData()
  const file = formData.get('file')

  if (!(file instanceof File)) {
    return NextResponse.json({ error: 'Aucun fichier fourni' }, { status: 400 })
  }

  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
    return NextResponse.json({ error: 'Type de fichier non autorisé' }, { status: 400 })
  }

  if (file.size > MAX_IMAGE_SIZE_BYTES) {
    return NextResponse.json({ error: 'Fichier trop lourd (5 Mo max)' }, { status: 400 })
  }

  try {
    const blob = await put(`covers/${Date.now()}-${file.name}`, file, {
      access: 'public',
      token: process.env.BLOB_READ_WRITE_TOKEN,
    })
    return NextResponse.json({ url: blob.url })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Erreur inconnue'
    console.error('Blob upload error:', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
