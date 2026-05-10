'use client'

import { useEffect } from 'react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function BlogError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="pt-28 pb-20 px-6 lg:px-8 max-w-[1280px] mx-auto text-center">
      <p className="font-space-grotesk text-h3 text-[#1a1c1c] mb-4">
        Impossible de charger les articles
      </p>
      <p className="font-inter text-body-md text-[#5f5e5e] mb-8">
        Une erreur inattendue est survenue.
      </p>
      <button
        onClick={reset}
        className="bg-[#F54927] text-white rounded-full px-8 py-3 font-space-grotesk font-semibold hover:bg-[#da3615] transition-colors"
      >
        Réessayer
      </button>
    </main>
  )
}
