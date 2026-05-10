import Link from 'next/link'

interface PaginationProps {
  page: number
  totalPages: number
  basePath?: string
}

export function Pagination({ page, totalPages, basePath = '/blog' }: PaginationProps) {
  if (totalPages <= 1) return null

  return (
    <nav className="flex items-center justify-center gap-3 mt-12" aria-label="Pagination">
      {page > 1 && (
        <Link
          href={`${basePath}?page=${page - 1}`}
          className="bg-white text-[#1a1c1c] border border-[#e2e2e2] rounded-full px-6 py-3 font-space-grotesk font-semibold text-sm hover:border-[#F54927] hover:text-[#F54927] transition-colors"
        >
          ← Précédent
        </Link>
      )}

      <span className="font-inter text-body-md text-[#5f5e5e] px-4">
        {page} / {totalPages}
      </span>

      {page < totalPages && (
        <Link
          href={`${basePath}?page=${page + 1}`}
          className="bg-[#F54927] text-white rounded-full px-6 py-3 font-space-grotesk font-semibold text-sm hover:bg-[#da3615] transition-colors"
        >
          Suivant →
        </Link>
      )}
    </nav>
  )
}
