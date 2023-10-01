import Navbar from './Navbar'
import Footer from './Footer'

import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function LayoutPage({ children }: LayoutProps) {
  return (
    <div className="min-h-screen grid grid-rows-[auto,1fr,auto]">
      <header>
        <Navbar />
      </header>

      <main className="p-3 w-full h-auto">{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
