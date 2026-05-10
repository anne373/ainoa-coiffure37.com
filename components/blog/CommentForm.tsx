'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

interface CommentFormProps {
  postId: string
}

export function CommentForm({ postId }: CommentFormProps) {
  const router = useRouter()
  const [author, setAuthor] = useState('')
  const [email, setEmail] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ author, email, content, postId }),
    })

    setLoading(false)

    if (!res.ok) {
      const data = await res.json() as { error: string }
      setError(data.error ?? 'Une erreur est survenue')
      return
    }

    setSuccess(true)
    setAuthor('')
    setEmail('')
    setContent('')
    router.refresh()
  }

  if (success) {
    return (
      <div className="bg-white rounded-[40px] p-8 text-center">
        <p className="font-space-grotesk text-h3 text-[#F54927]">Merci !</p>
        <p className="font-inter text-body-md text-[#5f5e5e] mt-2">
          Votre commentaire a été publié.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="mt-4 font-inter text-body-md text-[#F54927] underline"
        >
          Ajouter un autre commentaire
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-[40px] p-8 space-y-4 shadow-sm">
      <h3 className="font-space-grotesk text-h3 text-[#1a1c1c]">Laisser un commentaire</h3>

      {error && (
        <p className="bg-red-50 text-red-700 rounded-[16px] px-4 py-3 font-inter text-body-md">
          {error}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-inter text-label-caps text-[#5f5e5e] uppercase mb-1">
            Nom *
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            className="w-full border border-[#e2e2e2] rounded-full px-4 py-3 font-inter text-body-md focus:outline-none focus:border-[#F54927] bg-[#FFF7F2]"
          />
        </div>
        <div>
          <label className="block font-inter text-label-caps text-[#5f5e5e] uppercase mb-1">
            Email *
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-[#e2e2e2] rounded-full px-4 py-3 font-inter text-body-md focus:outline-none focus:border-[#F54927] bg-[#FFF7F2]"
          />
        </div>
      </div>

      <div>
        <label className="block font-inter text-label-caps text-[#5f5e5e] uppercase mb-1">
          Commentaire *
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={4}
          className="w-full border border-[#e2e2e2] rounded-[24px] px-4 py-3 font-inter text-body-md focus:outline-none focus:border-[#F54927] bg-[#FFF7F2] resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-[#F54927] text-white rounded-full px-8 py-3 font-space-grotesk font-semibold hover:bg-[#da3615] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? 'Envoi...' : 'Publier'}
      </button>
    </form>
  )
}
