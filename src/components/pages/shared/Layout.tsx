import { motion } from 'framer-motion'
import { Header } from '@/components/pages/shared/navigation/Header'
import Footer from '@/components/pages/shared/Footer';
import Sidebar from '@/components/pages/shared/navigation/Sidebar';
import { useRouter } from 'next/router';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Layout({ children }: any) {
  const router = useRouter()
  return (
    <div className="p-6 bg-gray-800">
      <motion.header
        layoutScroll
        className="contents lg:inset-0 lg:z-40 lg:flex">
        <Header />
      </motion.header>
      <div className="flex items-start">
        {router.pathname.includes('/dashboard') ? <Sidebar /> : <></>}
        <main className='overflow-y-auto relative w-full h-full rounded-xl bg-gray-900'>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}
