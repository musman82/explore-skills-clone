import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import './globals.css'
import './style.css'
import '@fortawesome/fontawesome-svg-core/styles.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Xplore Skill - Clone',
  description: 'Next JS Clone of Xplore Skills by Muhammad Usman',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
