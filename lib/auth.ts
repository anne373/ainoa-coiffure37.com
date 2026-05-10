import { cookies } from 'next/headers'
import { SessionPayload } from '@/types/blog'
import { COOKIE_NAME, COOKIE_MAX_AGE } from '@/lib/constants'

function encodeSession(payload: SessionPayload): string {
  return Buffer.from(JSON.stringify(payload)).toString('base64')
}

function decodeSession(token: string): SessionPayload | null {
  try {
    const json = Buffer.from(token, 'base64').toString('utf-8')
    return JSON.parse(json) as SessionPayload
  } catch {
    return null
  }
}

export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get(COOKIE_NAME)?.value
  if (!token) return null
  return decodeSession(token)
}

export async function setSession(payload: SessionPayload): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.set(COOKIE_NAME, encodeSession(payload), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: COOKIE_MAX_AGE,
    path: '/',
  })
}

export async function clearSession(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete(COOKIE_NAME)
}
