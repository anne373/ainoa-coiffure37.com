'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { PostSummary } from '@/types/blog'

interface PostTableProps {
  posts: PostSummary[]
}

function formatDate(date: Date | string | null): string {
  if (!date) return '—'
  return new Date(date).toLocaleDateString('fr-FR')
}

export function PostTable({ posts }: PostTableProps) {
  const router = useRouter()

  async function handleDelete(id: string, title: string) {
    if (!confirm(`Supprimer "${title}" ? Cette action est irréversible.`)) return

    const res = await fetch(`/api/posts/${id}`, { method: 'DELETE' })
    if (res.ok) router.refresh()
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-[40px]">
        <p className="font-space-grotesk text-h3 text-[#5f5e5e]">Aucun article</p>
        <Link
          href="/admin/posts/new"
          className="inline-block mt-4 bg-[#F54927] text-white rounded-full px-6 py-3 font-space-grotesk font-semibold hover:bg-[#da3615] transition-colors"
        >
          Créer le premier article
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-[40px] overflow-hidden shadow-sm">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#e2e2e2]">
            <th className="text-left px-6 py-4 font-space-grotesk text-label-caps text-[#5f5e5e] uppercase">Titre</th>
            <th className="text-left px-6 py-4 font-space-grotesk text-label-caps text-[#5f5e5e] uppercase hidden md:table-cell">Catégorie</th>
            <th className="text-left px-6 py-4 font-space-grotesk text-label-caps text-[#5f5e5e] uppercase hidden lg:table-cell">Date</th>
            <th className="text-left px-6 py-4 font-space-grotesk text-label-caps text-[#5f5e5e] uppercase">Statut</th>
            <th className="px-6 py-4"></th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className="border-b border-[#e2e2e2] last:border-0 hover:bg-[#FFF7F2] transition-colors">
              <td className="px-6 py-4">
                <p className="font-space-grotesk font-semibold text-[#1a1c1c] line-clamp-1">{post.title}</p>
                <p className="font-inter text-label-caps text-[#906f69] uppercase mt-0.5">
                  {post._count.comments} commentaire{post._count.comments !== 1 ? 's' : ''}
                </p>
              </td>
              <td className="px-6 py-4 hidden md:table-cell">
                <span className="bg-[#F54927] text-white text-label-caps rounded-full px-3 py-1 uppercase">
                  {post.category}
                </span>
              </td>
              <td className="px-6 py-4 font-inter text-body-md text-[#5f5e5e] hidden lg:table-cell">
                {formatDate(post.publishedAt ?? post.createdAt)}
              </td>
              <td className="px-6 py-4">
                <span
                  className={
                    post.published
                      ? 'text-green-700 bg-green-50 rounded-full px-3 py-1 font-inter text-label-caps uppercase'
                      : 'text-[#5f5e5e] bg-[#e2e2e2] rounded-full px-3 py-1 font-inter text-label-caps uppercase'
                  }
                >
                  {post.published ? 'Publié' : 'Brouillon'}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2 justify-end">
                  <Link
                    href={`/admin/posts/${post.id}/edit`}
                    className="font-inter text-label-caps text-[#F54927] uppercase hover:underline"
                  >
                    Éditer
                  </Link>
                  <button
                    onClick={() => handleDelete(post.id, post.title)}
                    className="font-inter text-label-caps text-red-500 uppercase hover:underline"
                  >
                    Supprimer
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
