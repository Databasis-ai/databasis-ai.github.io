import { motion } from 'framer-motion'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Prose } from '@/components/Prose'
import { SectionProvider } from '@/components/SectionProvider'

export function Layout({ children, sections = [] }) {
  return (
    <SectionProvider sections={sections}>
      <div className="">
        <motion.header
          layoutScroll
          className="contents lg:inset-0 lg:z-40 lg:flex">
          <Header />
        </motion.header>
        <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
          <main className="py-16">
            <Prose className={"prose content"} as="article">
              {children}
            </Prose>
          </main>
          <Footer />
        </div>
      </div>
    </SectionProvider>
  )
}
