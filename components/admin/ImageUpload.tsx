'use client'

import { useState, useRef, ChangeEvent } from 'react'
import Image from 'next/image'
import { ALLOWED_IMAGE_TYPES } from '@/lib/constants'

interface ImageUploadProps {
  value: string
  onChange: (url: string) => void
}

export function ImageUpload({ value, onChange }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  async function handleFile(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      setError('Type non autorisé (jpg, png, webp, gif)')
      return
    }

    setError('')
    setUploading(true)

    const formData = new FormData()
    formData.append('file', file)

    const res = await fetch('/api/upload', { method: 'POST', body: formData })
    setUploading(false)

    if (!res.ok) {
      const data = await res.json() as { error: string }
      setError(data.error ?? 'Erreur upload')
      return
    }

    const data = await res.json() as { url: string }
    onChange(data.url)
  }

  return (
    <div className="space-y-3">
      {value && (
        <div className="relative aspect-video w-full rounded-[28px] overflow-hidden bg-[#e2e2e2]">
          <Image src={value} alt="Aperçu" fill className="object-cover" />
          <button
            type="button"
            onClick={() => onChange('')}
            className="absolute top-2 right-2 bg-white text-red-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow hover:bg-red-50 transition-colors"
          >
            ✕
          </button>
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept={ALLOWED_IMAGE_TYPES.join(',')}
        onChange={handleFile}
        className="hidden"
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        className="w-full border-2 border-dashed border-[#e2e2e2] rounded-[28px] px-6 py-8 text-center font-inter text-body-md text-[#5f5e5e] hover:border-[#F54927] hover:text-[#F54927] transition-colors disabled:opacity-60"
      >
        {uploading ? 'Upload en cours...' : value ? 'Changer l\'image' : 'Cliquer pour uploader une image'}
      </button>

      {error && (
        <p className="font-inter text-body-md text-red-600">{error}</p>
      )}
    </div>
  )
}
