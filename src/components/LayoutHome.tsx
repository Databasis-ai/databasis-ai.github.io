import { motion } from 'framer-motion'
import { Header } from '@/components/navigation/Header'
import { SectionProvider } from '@/components/SectionProvider'
import Footer from './footer'
import Sidebar from '@/components/navigation/Sidebar';
import { useRouter } from 'next/router';

export function Layout({ children, sections = [] }) {
  const router = useRouter()
  return (
    <SectionProvider sections={sections}>
      <div className="p-6 bg-gray-800">
        <motion.header
          layoutScroll
          className="contents lg:inset-0 lg:z-40 lg:flex">
          <Header />
        </motion.header>
        <div className="flex items-start">
          {router.pathname.includes('/dashboard') ? <Sidebar /> : <></>}
          <main className='overflow-y-auto relative w-full h-full bg-gray-900'>
            <div>{children}</div>
          </main>
        </div>
        <Footer />
      </div>
    </SectionProvider>
  )
}
