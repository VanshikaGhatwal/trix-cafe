import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Trix — Café & Dining',
  description: 'A contemporary café and dining space where specialty coffee, thoughtfully crafted food, culture, design, and human connection come together.',
  keywords: 'trix cafe, specialty coffee, dining delhi, boutique cafe india',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="grain">{children}</body>
    </html>
  )
}
