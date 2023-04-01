import { motion } from "framer-motion";
import { FRAMER_MOTION_LIST_ITEM_VARIANTS } from "../env/constants";


type TimelineObject = {
  updatedWith: string[] // [name, value]
  isActive: boolean
  wasSearched: boolean
  lastActive: string
  value: string
}

const timeLine: TimelineObject[] = [
  {
    updatedWith: ['city', 'name'],
    isActive: true,
    wasSearched: false,
    lastActive: new Date().toUTCString(),
    value: '1600 Pennsylvania Ave.',
  },
  {
    updatedWith: ['city', 'name'],
    isActive: false,
    wasSearched: true,
    lastActive: new Date().toUTCString(),
    value: 'Champ de Mars, 5 Av.',
  }, {
    updatedWith: ['city', 'name'],
    isActive: false,
    wasSearched: false,
    lastActive: new Date().toUTCString(),
    value: '450 Jane Stanford Way',
  }
]

export default function Timeline() {
  return (
    <motion.ul
      initial="hidden"
      animate="show"
      className="relative border-l ml-4 w-full dark:border-gray-700"
      variants={{
        show: {
          transition: {
            staggerChildren: .25,
          },
        },
      }}>
      {
        timeLine.map((item, index) => {
          const { isActive, value, lastActive, updatedWith, wasSearched } = item;
          return (
            <motion.li key={`timeline-index-${index}`} variants={FRAMER_MOTION_LIST_ITEM_VARIANTS}>
              <div className={`mb-10 ml-6 ${!wasSearched && `opacity-50`} rounded-2xl`}>
                <span className={`absolute flex items-center justify-center w-6 h-6  rounded-full -left-3 ring-8 ${wasSearched ? 'ring-green-400 bg-green-100' : 'ring-gray-500 bg-blue-100'} dark:ring-gray-900 dark:bg-blue-900`}>
                  <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold  dark:text-white">
                  {value}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Active - {
                    isActive ? 'Current' : new Intl.DateTimeFormat("en-US", { dateStyle: 'full', timeStyle: 'long', timeZone: 'Australia/Sydney' }).format(new Date(lastActive))
                  }
                </time>
                <p className="mb-4 text-base font-normal text-gray-500 ">
                  Updated with [{updatedWith.map(fellowUpdate => <><a className="text-blue-500" href="#">{fellowUpdate}</a>,&nbsp;</>)}]
                  <span className="text-blue-400 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                    View statement
                  </span>
                </p>
              </div>
            </motion.li>
          )
        })
      }
    </motion.ul>
  );
}
