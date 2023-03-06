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
import { AnimatePresence, motion, usePresence } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
type ActiveSearchFilter = 'cap' | 'noi' | 'growth' | 'all' | 'none';

const codeString = `query TractData {
  tractData(tractID: "06001400100") {
    id
    name
    state
    county
    market {
      capRate
      noi
      growth
    }
    residents {
      income
      population
      netMigration {
        value
        range
      }
    }
  }
}
`;

function Box({ items }: { items: any[] }) {
  const ref = useRef(null);
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (!isPresent) {
      gsap.to(ref.current, {
        opacity: 0,
        onComplete: () => safeToRemove?.()
      });
    }
  }, [isPresent, safeToRemove]);

  return <div className="box" ref={ref} >
    {items.map((item, index) => {
      return (
        <motion.button
          whileTap={{ scale: .95 }}
          whileHover={{ scale: 1.05 }}
          key={`filter-${item.text}-${index}`}>
          <div className='
          mr-10
          pb-1
          pt-1
          pr-2 pl-2
          shadow-sm
          mb-3
          rounded-lg
          hover:shadow-md
          transition-shadow
          shadow-emerald-400
          duration-300'>
            {item.text}
          </div>
        </motion.button>
      )
    })}
  </div>;
}


export default function Home() {
  const [activeSearchFilter, setActiveSearchFilter] = useState<ActiveSearchFilter>('noi');
  const [enabled, setEnabled] = useState(false);
  const ref = useRef(null);
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (!isPresent) {
      gsap.to(ref.current, {
        opacity: 0,
        onComplete: () => safeToRemove?.()
      });
    }
  }, [isPresent, safeToRemove]);


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
    <div className='w-full max-w-fit'>
      <div className="flex justify-between">
        <div className='w-48 inline-flex pb-6'>
          <div className="pl-6">
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => {
                setActiveSearchFilter(activeSearchFilter === 'noi' ? 'none' : 'noi')
              }}>
              <MapPinIcon
                className={`
                hover:scale-105
                cursor-pointer
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
                dark:hover:stroke-emerald-400
                ${activeSearchFilter === 'noi' ? 'stroke-emerald-400' : ''}
                `} />
            </motion.button>
          </div>
          <div className="pl-12 ">
            <div className="controls">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveSearchFilter(activeSearchFilter === 'growth' ? 'none' : 'growth')
                }}>
                <UsersIcon
                  className={`
                    hover:scale-105
                    duration-200
                    cursor-pointer
                    h-5
                    w-5
                    fill-zinc-700/10
                    stroke-zinc-700
                    transition-colors
                    hover:stroke-zinc-900
                    dark:fill-white/10
                    dark:stroke-zinc-400
                    dark:hover:fill-emerald-300/10
                    dark:hover:stroke-emerald-400
                    ${activeSearchFilter === 'growth' ? 'stroke-emerald-400' : ''}
                    `} />
              </motion.button>
            </div>
          </div>
        </div>
        <div className='inline-block'>
          <div className='inline-block pr-5'>
            <Toggle enabled={enabled} setEnabled={setEnabled} />
          </div>
        </div>
      </div>
      <div>
        <AnimatePresence>
          {activeSearchFilter == 'noi' ?
            <Box items={[{ text: 'Cap Rate', value: 'cap' },
            { text: 'Vacancy', value: 'vancancy' },
            { text: 'Sales', value: 'sales' },]}
            /> :
            activeSearchFilter == 'growth' ?
              <Box
                items={[{ text: 'Population', value: 'population' },
                { text: 'Income', value: 'income' },
                { text: 'Net Migration', value: 'netMigration' },
                { text: 'Employment', value: 'employment' },]} /> : null}
        </AnimatePresence>
      </div>
      <div className='grid grid-cols-3 gap-4 xl:max-w-none'>
        <div className='col-span-2'>
          <div className="border
                          rounded-lg
                          overflow-hidden
                          drop-shadow-2xl
                          hover:scale-[1.005]
                          cursor-pointer
                          duration-200">
            {enabled ? <CopyBlock
              language={'graphql'}
              text={codeString}
              theme={dracula}
              wrapLines={true}
              codeBlock
            /> : <Mapbox />
            }
          </div>
        </div>
        <div className='col-span-1'>
          <Receipt items={[
            { name: 'State Tax', price: 5.5 },
            { name: 'Rent', price: 5.5 },
            { name: 'Mortgage', price: 2_450 },
            { name: 'Rental Estimate', price: 2_750 },
            { name: 'Maintenance', price: 750 }
          ]} tax={0} />
        </div>
      </div>
    </div>
    <div className="not-prose pt-24">
      <Button href="/sdks" variant="text" arrow="right" className={''}>
        <div>
          List your property
        </div>
      </Button>
    </div>
    <div className="not-prose pt-4">
      <Button href="/sdks" variant="text" arrow="right" className={''}>
        <div>
          Get your API key
        </div>
      </Button>
    </div>
    <Resources />
  </>
}