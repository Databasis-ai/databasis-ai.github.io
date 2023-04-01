import { motion } from 'framer-motion'
import { Header } from '@/components/Header'
import { SectionProvider } from '@/components/SectionProvider'
import Footer from './shared/footer'

export function Layout({ children, sections = [] }) {
  return (
    <SectionProvider sections={sections}>
      <div className="p-6 bg-gray-800">
        <motion.header
          layoutScroll
          className="contents lg:inset-0 lg:z-40 lg:flex">
          <Header />
        </motion.header>
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </SectionProvider>
  )
}
