import { Resources } from '@/components/Resources'
import { HeroPattern } from '@/components/HeroPattern'
import { Button } from '@/components/Button'
export const description =
  'Learn everything there is to know about the Protocol API and integrate Protocol into your product.'
import { Search } from '@/components/Search'
import Mapbox from '@/components/Map';
import { MapPinIcon } from '@/components/icons/MapPinIcon';
import { UsersIcon } from '@/components/icons/UsersIcon';
import { useState } from 'react';
import Receipt from '@/components/Recipt';
import Toggle from '@/components/Toggle';
import { CopyBlock, dracula } from "react-code-blocks";

export const sections = [
  { title: 'Resources', id: 'resources' },
  { title: 'Companies', id: 'companies' },
];


type ActiveSearchFilter = 'cap' | 'noi' | 'growth' | 'all' | 'none';

export default function Home() {
  const [activeSearchFilter, setActiveSearchFilter] = useState<ActiveSearchFilter>('all');
  const [enabled, setEnabled] = useState(false);

  return <>
    <HeroPattern />
    <div >
      <h1>
        Real Estate data made easy
      </h1>
      <div className="not-prose mb-16 mt-6 flex gap-3">
        <Search />
      </div>
    </div>

    <div className="grid grid-cols-3 gap-4 xl:max-w-none">
      <div className="col-span-2 ">
        <div className="flex justify-between">
          <div className='w-48 inline-flex pb-6'>
            <div className="pl-6">
              <MapPinIcon
                onClick={() => setActiveSearchFilter(activeSearchFilter === 'noi' ? 'none' : 'noi')}
                className={`
          hover:scale-105 cursor-pointer
          h-5
          w-5
          fill-zinc-700/10
          stroke-zinc-700
          transition-colors
          duration-300
          hover:stroke-zinc-900
          dark:fill-white/10
          dark:stroke-zinc-400
          dark:hover:fill-emerald-300/10
          dark:hover:stroke-emerald-400`} />
            </div>
            <div className="pl-12 ">
              <UsersIcon
                onClick={() => setActiveSearchFilter(activeSearchFilter === 'growth' ? 'none' : 'growth')}
                className={`
          hover:scale-105 duration-200 cursor-pointer
          h-5
          w-5
          fill-zinc-700/10
          stroke-zinc-700
          transition-colors
          hover:stroke-zinc-900
          dark:fill-white/10
          dark:stroke-zinc-400
          dark:hover:fill-emerald-300/10
          dark:hover:stroke-emerald-400`} />
            </div>
          </div>
          <div className='inline-block'>
            <div className='inline-block pr-5'>
              <Toggle enabled={enabled} setEnabled={setEnabled} />
            </div>
          </div>
        </div>
        <div className="border rounded-lg overflow-hidden drop-shadow-2xl hover:scale-[1.005] cursor-pointer duration-200	">
          {enabled ? <CopyBlock
          language={'graphql'}
          text={`query FirstSevenStarShips {
            allStarships(first: 7) {
              edges {
                node {
                  id
                  name
                  model
                  costInCredits
                }
              }
          }`}
          showLineNumbers={false}
          theme={dracula}
          wrapLines={true}
          codeBlock
        /> : <Mapbox />}
        </div>
      </div>
      <div className="col-span-1">
        <Receipt items={[
          { name: 'State Tax', price: 5.5 },
          { name: 'Rent', price: 5.5 },
          { name: 'Mortgage', price: 2_450 },
          { name: 'Rental Estimate', price: 2_750 },
          { name: 'Maintenance', price: 750 }
        ]} tax={0} />
      </div>
    </div>
    <div className="not-prose pt-24">
      <Button href="/sdks" variant="text" arrow="right" className={''}>
        <div>
          Get your API key
        </div>
      </Button>
    </div>
    <Resources />
  </>
}