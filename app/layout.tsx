import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fasign',
  description: 'Generate social media post with ai',
  generator: 'Fasign',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
