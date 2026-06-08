import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AttributionLogger from '@/components/AttributionLogger'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Konek - Sports & Events | Local meetups for consumers',
  description: 'The consumer app to join sports, recreational and social events near you. Connect with independent yoga teachers, sports coaches and fitness instructors.',
  metadataBase: new URL('https://konek.social'),
  openGraph: {
    title: 'Konek - Sports & Events',
    description: 'Free consumer mobile app for sporting, recreational and social events in your local community. Find activity partners and connect with independent yoga teachers, sports coaches and fitness instructors.',
    url: 'https://konek.social',
    siteName: 'Konek',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Konek - Sports & Events',
    description: 'The consumer app for local sports, recreational and social events near you.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AttributionLogger />
        {children}
      </body>
    </html>
  )
}