import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './components/Footer/Footer'
import Header from "./components/Header";
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DeckRocket',
  description: 'E-commerce website for cards',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header hasSearchBar={true} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
