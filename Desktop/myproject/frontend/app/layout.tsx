import type { Metadata } from 'next'
import './globals.css'

// Temporary fallback while Inter font fails online
const inter = { className: 'font-sans' }

export const metadata: Metadata = {
  title: 'sketch to 3d',
  description: 'draw a 3d model and make it real',
  manifest: '/manifest.json',
  icons: [
    {
      rel: 'icon',
      url: '/icon.jpeg', // Ensure this file is in the public/ folder and lowercase
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
