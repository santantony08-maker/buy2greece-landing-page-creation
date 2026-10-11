import { Analytics } from '@vercel/analytics/next'
import { Manrope, Newsreader } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const manrope = Manrope({ subsets: ['latin', 'greek'], variable: '--font-manrope' })
const newsreader = Newsreader({ subsets: ['latin', 'greek'], variable: '--font-newsreader' })

export const metadata: Metadata = {
  title: 'Εκτίμηση Ακινήτου | Buy2Greece',
  description: 'Μάθετε πόσο αξίζει το ακίνητό σας με την Buy2Greece. Ζητήστε εκτίμηση και ενημερωθείτε για τις δυνατότητες πώλησης στην Ελλάδα και το εξωτερικό.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="el">
      <body className={`${manrope.variable} ${newsreader.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
