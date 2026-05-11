'use client'

import { useState, FormEvent } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })

    setLoading(false)

    if (!res.ok) {
      const data = await res.json() as { error: string }
      setError(data.error ?? 'Identifiants incorrects')
      return
    }

    const from = searchParams.get('from') ?? '/admin/posts'
    router.push(from)
  }

  return (
    <div className="min-h-screen bg-[#FFF7F2] flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link href="/">
            <Image
              src="/images/logo-ainoa.png"
              alt="Ainoa Coiffure"
              width={160}
              height={52}
              className="mix-blend-multiply mx-auto mb-6 hover:opacity-80 transition-opacity"
            />
          </Link>
          <h1 className="font-space-grotesk text-h2 text-[#1a1c1c]">Administration</h1>
          <p className="font-inter text-body-md text-[#5f5e5e] mt-2">Blog Ainoa Coiffure</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-[40px] p-8 shadow-sm space-y-5">
          {error && (
            <div className="bg-red-50 text-red-700 rounded-[16px] px-4 py-3 font-inter text-body-md">
              {error}
            </div>
          )}

          <div>
            <label className="block font-inter text-label-caps text-[#5f5e5e] uppercase mb-2">
              Identifiant
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
              className="w-full border border-[#e2e2e2] rounded-full px-5 py-3 font-inter text-[#1a1c1c] focus:outline-none focus:border-[#F54927] bg-[#FFF7F2]"
            />
          </div>

          <div>
            <label className="block font-inter text-label-caps text-[#5f5e5e] uppercase mb-2">
              Mot de passe
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="w-full border border-[#e2e2e2] rounded-full px-5 py-3 pr-12 font-inter text-[#1a1c1c] focus:outline-none focus:border-[#F54927] bg-[#FFF7F2]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#906f69] hover:text-[#F54927] transition-colors"
                aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
              >
                <span className="material-symbols-outlined text-[20px]">
                  {showPassword ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#F54927] text-white rounded-full py-3 font-space-grotesk font-semibold hover:bg-[#da3615] transition-colors disabled:opacity-60"
          >
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  )
}
