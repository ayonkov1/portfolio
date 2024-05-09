import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/core/theme-provider'

const inter = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yonkov | Resume',
  description: 'Atanas A. Yonkov Resume',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
