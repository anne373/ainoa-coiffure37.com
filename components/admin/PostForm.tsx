'use client'

import { useState, useEffect, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { CreatePostInput } from '@/types/blog'
import { slugify } from '@/lib/slugify'
import { ImageUpload } from './ImageUpload'

interface PostFormProps {
  id?: string
  initialData?: Partial<CreatePostInput>
}

const CATEGORIES = ['Coiffure', 'Head Spa', 'Tendances', 'Soins', 'Conseils', 'Actualités']

export function PostForm({ id, initialData }: PostFormProps) {
  const router = useRouter()
  const isEdit = Boolean(id)

  const [title, setTitle] = useState(initialData?.title ?? '')
  const [slug, setSlug] = useState(initialData?.slug ?? '')
  const [excerpt, setExcerpt] = useState(initialData?.excerpt ?? '')
  const [content, setContent] = useState(initialData?.content ?? '')
  const [coverImage, setCoverImage] = useState(initialData?.coverImage ?? '')
  const [category, setCategory] = useState(initialData?.category ?? CATEGORIES[0])
  const [tagsInput, setTagsInput] = useState(initialData?.tags?.join(', ') ?? '')
  const [published, setPublished] = useState(initialData?.published ?? false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [slugLocked, setSlugLocked] = useState(isEdit)

  useEffect(() => {
    if (!slugLocked && title) {
      setSlug(slugify(title))
    }
  }, [title, slugLocked])

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const tags = tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean)

    const payload: CreatePostInput = {
      title,
      slug,
      excerpt,
      content,
      coverImage: coverImage || undefined,
      category,
      tags,
      published,
    }

    const res = await fetch(isEdit ? `/api/posts/${id}` : '/api/posts', {
      method: isEdit ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    setLoading(false)

    if (!res.ok) {
      const data = await res.json() as { error: string }
      setError(data.error ?? 'Une erreur est survenue')
      return
    }

    router.push('/admin/posts')
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
      {error && (
        <div className="bg-red-50 text-red-700 rounded-[24px] px-5 py-4 font-inter text-body-md">
          {error}
        </div>
      )}

      {/* Titre */}
      <div>
        <label className="block font-inter text-label-caps text-[#5f5e5e] uppercase mb-2">
          Titre *
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full border border-[#e2e2e2] rounded-full px-5 py-3 font-space-grotesk text-[#1a1c1c] focus:outline-none focus:border-[#F54927] bg-white"
          placeholder="Titre de l'article"
        />
      </div>

      {/* Slug */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="font-inter text-label-caps text-[#5f5e5e] uppercase">
            Slug (URL) *
          </label>
          {!slugLocked && (
            <button
              type="button"
              onClick={() => setSlugLocked(true)}
              className="font-inter text-label-caps text-[#F54927] uppercase"
            >
              Verrouiller
            </button>
          )}
          {slugLocked && (
            <button
              type="button"
              onClick={() => setSlugLocked(false)}
              className="font-inter text-label-caps text-[#5f5e5e] uppercase"
            >
              Modifier
            </button>
          )}
        </div>
        <input
          type="text"
          value={slug}
          onChange={(e) => { setSlug(e.target.value); setSlugLocked(true) }}
          required
          readOnly={!slugLocked && !isEdit}
          className="w-full border border-[#e2e2e2] rounded-full px-5 py-3 font-inter text-[#5f5e5e] focus:outline-none focus:border-[#F54927] bg-white"
          placeholder="mon-article"
        />
        <p className="font-inter text-label-caps text-[#906f69] mt-1 pl-2">
          /blog/{slug || '...'}
        </p>
      </div>

      {/* Extrait */}
      <div>
        <label className="block font-inter text-label-caps text-[#5f5e5e] uppercase mb-2">
          Extrait *
        </label>
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          required
          rows={3}
          className="w-full border border-[#e2e2e2] rounded-[24px] px-5 py-3 font-inter text-[#1a1c1c] focus:outline-none focus:border-[#F54927] bg-white resize-none"
          placeholder="Courte description de l'article..."
        />
      </div>

      {/* Contenu */}
      <div>
        <label className="block font-inter text-label-caps text-[#5f5e5e] uppercase mb-2">
          Contenu (Markdown) *
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={16}
          className="w-full border border-[#e2e2e2] rounded-[24px] px-5 py-3 font-inter text-body-md text-[#1a1c1c] focus:outline-none focus:border-[#F54927] bg-white resize-y"
          placeholder="# Titre&#10;&#10;Votre contenu en Markdown..."
        />
      </div>

      {/* Image */}
      <div>
        <label className="block font-inter text-label-caps text-[#5f5e5e] uppercase mb-2">
          Image de couverture
        </label>
        <ImageUpload value={coverImage} onChange={setCoverImage} />
      </div>

      {/* Catégorie + Tags */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-inter text-label-caps text-[#5f5e5e] uppercase mb-2">
            Catégorie *
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-[#e2e2e2] rounded-full px-5 py-3 font-inter text-[#1a1c1c] focus:outline-none focus:border-[#F54927] bg-white"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-inter text-label-caps text-[#5f5e5e] uppercase mb-2">
            Tags (séparés par des virgules)
          </label>
          <input
            type="text"
            value={tagsInput}
            onChange={(e) => setTagsInput(e.target.value)}
            className="w-full border border-[#e2e2e2] rounded-full px-5 py-3 font-inter text-[#1a1c1c] focus:outline-none focus:border-[#F54927] bg-white"
            placeholder="coloration, balayage, soin..."
          />
        </div>
      </div>

      {/* Publié */}
      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={published}
          onChange={(e) => setPublished(e.target.checked)}
          className="w-5 h-5 accent-[#F54927]"
        />
        <span className="font-inter text-body-md text-[#1a1c1c]">Publier immédiatement</span>
      </label>

      {/* Actions */}
      <div className="flex items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="bg-[#F54927] text-white rounded-full px-8 py-3 font-space-grotesk font-semibold hover:bg-[#da3615] transition-colors disabled:opacity-60"
        >
          {loading ? 'Enregistrement...' : isEdit ? 'Enregistrer les modifications' : 'Créer l\'article'}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/posts')}
          className="text-[#5f5e5e] font-inter text-body-md hover:text-[#F54927] transition-colors"
        >
          Annuler
        </button>
      </div>
    </form>
  )
}
