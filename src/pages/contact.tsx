import dynamic from 'next/dynamic';
const Heading = dynamic(() => import('@/components/static/pages/contact/Heading'), { ssr: false });

export default function Home() {
  return <>
    <Heading/>
  </>
}