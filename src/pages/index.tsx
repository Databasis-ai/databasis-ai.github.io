import { Resources } from '@/components/Resources'
import { HeroPattern } from '@/components/HeroPattern'
import { Button } from '@/components/Button'
export const description =
  'Learn everything there is to know about the Protocol API and integrate Protocol into your product.'
import dynamic from "next/dynamic";
import { Search } from '@/components/Search'
const MapboxMap = dynamic(() => import('@/components/Map'), { ssr: false });
import { CogIcon } from '@/components/icons/CogIcon';
import { MapPinIcon } from '@/components/icons/MapPinIcon';
import { UsersIcon } from '@/components/icons/UsersIcon';
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
    <div className={'w-200 pb-12 flex'}>
      <div className='pr-12'>
        <CogIcon className={'h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400'} />
      </div>
      <div className='pr-12'>
        <MapPinIcon className={'h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400'} />
      </div>
      <div className='pr-12'>
        <UsersIcon className={'h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400'} />
      </div>
    </div>
    <div className="border rounded-lg overflow-hidden drop-shadow-2xl hover:scale-105 cursor-pointer duration-200	">
      <MapboxMap />
    </div>
    <div className="not-prose pt-24	">
      {/* <Button
        href="/sdks"
        variant="text"
        arrow="right"
        children="Get your API key"
      /> */}
    </div>
    <Resources />
  </>
}