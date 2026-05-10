'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

interface AdminNavProps {
  username: string
}

const links = [
  { href: '/admin/posts', label: 'Articles' },
  { href: '/admin/posts/new', label: 'Nouvel article' },
]

export function AdminNav({ username }: AdminNavProps) {
  const pathname = usePathname()
  const router = useRouter()

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  return (
    <aside className="w-56 min-h-screen bg-white border-r border-[#e2e2e2] flex flex-col">
      <div className="px-6 py-6 border-b border-[#e2e2e2]">
        <p className="font-space-grotesk font-bold text-[#F54927] text-sm uppercase tracking-widest">
          Admin Blog
        </p>
        <p className="font-inter text-label-caps text-[#5f5e5e] uppercase mt-1">{username}</p>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              pathname === link.href || pathname.startsWith(link.href + '/')
                ? 'block px-4 py-2 rounded-full bg-[#F54927] text-white font-space-grotesk font-semibold text-sm'
                : 'block px-4 py-2 rounded-full text-[#5f5e5e] hover:bg-[#FFF7F2] font-space-grotesk text-sm transition-colors'
            }
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="px-6 py-4 border-t border-[#e2e2e2]">
        <Link
          href="/"
          className="block text-center font-inter text-label-caps text-[#5f5e5e] uppercase hover:text-[#F54927] transition-colors mb-3"
        >
          Voir le site
        </Link>
        <button
          onClick={handleLogout}
          className="w-full bg-[#FFF7F2] text-[#5f5e5e] rounded-full px-4 py-2 font-inter text-label-caps uppercase hover:bg-red-50 hover:text-red-700 transition-colors"
        >
          Déconnexion
        </button>
      </div>
    </aside>
  )
}
