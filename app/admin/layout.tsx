import { redirect } from 'next/navigation'
import { getSession } from '@/lib/auth'
import { AdminNav } from '@/components/admin/AdminNav'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession()
  if (!session) redirect('/admin/login')

  return (
    <div className="flex min-h-screen bg-[#FFF7F2]">
      <AdminNav username={session.username} />
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  )
}
