import { Resources } from '@/components/Resources'
import { HeroPattern } from '@/components/HeroPattern'
import { Button } from '@/components/Button'
export const description =
  'Learn everything there is to know about the Protocol API and integrate Protocol into your product.'
import dynamic from "next/dynamic";
import { Search } from '@/components/Search'
const MapboxMap = dynamic(() => import('@/components/Map'), { ssr: false });

export const sections = [
  { title: 'Resources', id: 'resources' },
  { title: 'Companies', id: 'companies' },
];

export default function Home() {
  return <>
    <HeroPattern />
    <div className=''>
      <h1>Real estate data done easy</h1>
      <div className="not-prose mb-16 mt-6 flex gap-3">
        <Search />
      </div>
    </div>
    <div className="border rounded-lg overflow-hidden drop-shadow-2xl hover:scale-105 cursor-pointer duration-200	">
      <MapboxMap />
    </div>
    <div className="not-prose pt-24	">
      <Button
        href="/sdks"
        variant="text"
        arrow="right"
        children="Get your API key"
      />
    </div>
    <Resources />
  </>
}