import Features from '@/components/static/pages/home/Features';
import dynamic from 'next/dynamic';
const Heading = dynamic(() => import('@/components/static/pages/home/Heading'));

export default function Home() {
  return <>
    <Heading/>
    <Features/>
  </>
}