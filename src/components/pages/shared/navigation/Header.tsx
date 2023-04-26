import Image from "next/image"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react";
import useViewportSize from "@/utils/hooks/use-viewport-size";
import { useEffect } from "react";
import { useState } from "react";

export const COMMON_PAGES = [
  { name: 'Home', href: '/', target: '_self' },
  { name: 'Documentation', href: 'http://rowvolution.mintlify.app/', target: '_blank' },
  { name: 'Pricing', href: '/pricing', target: '_self' },
  { name: 'Contact', href: '/contact', target: '_self' }
]

export const Header = function () {
  const { status } = useSession();
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const { width } = useViewportSize();

  useEffect(() => {
    if (width > 768) {
      setSideNavOpen(false);
    }
  }, [width])

  return (
    <div className="pb-5 bg-gray-800 w-full">
      <div className="flex items-center justify-between px-6 py-3.5 bg-gray-900 rounded-full">
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-auto cursor-pointer pl-8">
              <Link href="/">
                <Image src="/images/logo-transparent.png" alt="rowvolution logo" width={200} height={25} />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-auto hidden lg:block">
              <ul className="flex items-center justify-center">
                {
                  COMMON_PAGES.map((page, index) => (<li key={`top-level-nav-${index}`} className="mr-9">
                    <Link
                    target={page.target || '_self'}
                      className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                      href={page.href}>
                      {page.name}
                    </Link>
                  </li>))
                }
              </ul>
            </div>
          </div>
        </div>
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-auto hidden lg:block">
              <div className="flex flex-wrap -m-2">
                <div className="w-full md:w-auto p-2">
                  <div onClick={() => status === 'authenticated' ? signOut() : signIn()} className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-600 rounded-full cursor-pointer" >
                    {status === 'authenticated' ? 'Sign Out' : 'Sign In'}
                  </div>
                </div>
                <div className="w-full md:w-auto p-2">
                  {
                    status === 'authenticated' ? (
                      <Link className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full" href={'/dashboard/insights'}>
                        Dashboard
                      </Link>
                    ) : (
                      <div className="cursor-pointer block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full" onClick={() => signIn()}>
                        Get started
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
            <div onClick={() => setSideNavOpen(!sideNavOpen)} className="w-auto lg:hidden"><a className="inline-block" href="#">
              <svg className="navbar-burger text-blue-500" width="45" height="45" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="56" height="56" rx="28" fill="currentColor"></rect>
                <path d="M37 32H19M37 24H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </a>
            </div>
          </div>
        </div>
      </div>
      <div className={`navbar-menu ${sideNavOpen ? '' : 'hidden'} fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50`}>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
        <nav className="relative z-10 px-9 pt-8 bg-gray-900 h-full overflow-y-auto">
          <div className="flex flex-wrap justify-between h-full">
            <div className="w-full">
              <div className="flex items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <Link className="inline-block" href="/">
                    <Image src="/images/logo-transparent.png" alt="rowvolution logo" width={200} height={25}  />
                    </Link>
                </div>
                <div className="w-auto p-2">
                  <a className="inline-block navbar-burger" onClick={() => setSideNavOpen(false)} href="#">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 18L18 6M6 6L18 18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center py-8 w-full">
              <ul>
                {
                  COMMON_PAGES.map((page, index) => {
                    return (
                      <li key={`sidenav-${index}`} className="mb-9">
                        <Link className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300" href={page.href}>
                          {page.name}
                        </Link>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className="flex flex-col justify-end w-full pb-8">
              <div className="flex flex-wrap -m-2">
                <div className="w-full p-2">
                  {
                    status === 'authenticated' ? (
                      <Link className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full" href={'/dashboard/insights'}>
                        Dashboard
                      </Link>
                    ) : (
                      <div className="cursor-pointer block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full" onClick={() => signIn()}>
                        Get started
                      </div>
                    )
                  }
                  <div onClick={() => status === 'authenticated' ? signOut() : signIn()} className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-600 rounded-full cursor-pointer" >
                    {status === 'authenticated' ? 'Sign Out' : 'Sign In'}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
