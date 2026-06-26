import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const _montserrat = Montserrat({ subsets: ['latin'], variable: '--font-display', weight: ['700', '800', '900'] })

export const metadata: Metadata = {
  title: 'DAN The Window Man | Professional Home Services',
  description: "We'll Make Your Glass Shine. Professional window cleaning, gutter cleaning, roof services, and pressure washing. Licensed & insured. Serving commercial and residential properties.",
  keywords: 'window cleaning, gutter cleaning, roof cleaning, pressure washing, Portland Oregon, home services',
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
