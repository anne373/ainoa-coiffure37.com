import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ainoa Coiffure | Saint-Cyr-sur-Loire',
  description:
    'Salon de coiffure à Saint-Cyr-sur-Loire. Bienvenue chez Aïnoa Coiffure, où votre beauté est notre inspiration.',
  keywords: 'coiffure, salon, Saint-Cyr-sur-Loire, head spa, coiffeur',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#FFF7F2] text-[#1a1c1c] font-inter">
        {children}
      </body>
    </html>
  )
}
