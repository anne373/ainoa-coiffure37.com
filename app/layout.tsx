import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import { business } from '@/lib/business'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'

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
  title: {
    default: 'Ainoa Coiffure | Salon de coiffure Saint-Cyr-sur-Loire',
    template: '%s | Ainoa Coiffure',
  },
  description: business.description,
  keywords: [
    'coiffure Saint-Cyr-sur-Loire',
    'salon de coiffure',
    'coiffeur Saint-Cyr-sur-Loire',
    'head spa',
    'soin capillaire',
    'coiffure Tours',
    'Ainoa Coiffure',
    'onglerie',
  ],
  metadataBase: new URL(business.url),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: business.url,
    siteName: business.name,
    title: 'Ainoa Coiffure | Salon de coiffure Saint-Cyr-sur-Loire',
    description: business.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ainoa Coiffure | Salon de coiffure Saint-Cyr-sur-Loire',
    description: business.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#FFF7F2] text-[#1a1c1c] font-inter">
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  )
}
