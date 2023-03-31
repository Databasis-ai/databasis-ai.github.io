import { Resources } from '@/components/Resources'
import { HeroPattern } from '@/components/HeroPattern'
export const description =
  'Learn everything there is to know about the Protocol API and integrate Protocol into your product.'
import { MapPinIcon } from '@/components/icons/MapPinIcon';
import { UsersIcon } from '@/components/icons/UsersIcon';
import { useState } from 'react';

import Toggle from '@/components/Toggle';
import { AnimatePresence, motion, usePresence } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
type ActiveSearchFilter = 'cap' | 'noi' | 'growth' | 'all' | 'none';
import Window from '@/components/Window';

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
          hover:shadow-lg
          transition-shadow
          shadow-emerald-400
          hover:shadow-emerald-500
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
      <h1 className='text-3xl'>
        Queryable, row level history for your database
      </h1>
    </div>
    <div className='w-full max-w-fit'>
      <div className='grid grid-cols-3 gap-4 xl:max-w-none'>
        <div className='col-span-3'>
          <Window />
        </div>
      </div>
    </div>
    <Resources />
  </>
}