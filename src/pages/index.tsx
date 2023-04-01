import Features from '@/components/static/pages/home/features';
import dynamic from 'next/dynamic';
const Heading = dynamic(() => import('@/components/static/pages/home/heading'));

export default function Home() {
  return <>
    <Heading/>
    <Features/>
  </>
}