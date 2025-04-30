import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mujiken Express',
  description: '高速・高容量の圧倒的な検査パフォーマンス',
  generator: 'v0.dev',
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
