import Link from 'next/link';
import Image from 'next/image';
import variables from '@config/variables';
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  CashIcon,
  MenuIcon,
  DocumentTextIcon,
  IdentificationIcon,
  XIcon,
} from '@heroicons/react/outline'

const siteName = variables.siteName;
const navigation = [
  { 
    name: 'About me',
    href: '/about-me',
    icon: IdentificationIcon,
  },
  {
    name: 'Examples',
    href: '/examples',
    icon: CashIcon,
  },
]
const resources = [
  {
    name: 'LinkedIn',
    href: variables.linkedIn,
  },
  {
    name: 'Contact Me',
    href: variables.contactEmail,
  },
]

export default function header() {
  return (
    <header className='h-24'>
      <Popover className='fixed w-full z-10 bg-white/80 border-b shadow-sm'>
        <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' aria-label='Top'>
          <div className='w-full py-6 items-center border-b border-slate-100 lg:border-none'>
            <div className='flex justify-between items-center space-x-20'>
              <Link href={'/'}>
                <a>
                  <span className='sr-only'>{ siteName }</span>
                  <div className='w-12 h-12 relative'>
                    <Image
                      src='/logo.png'
                      alt={siteName}
                      layout="fill"
                    />
                  </div>
                </a>
              </Link>
              <div className='flex-1 ml-10 space-x-8 hidden md:block'>
                {navigation.map((link) => (
                  <Link href={link.href} key={link.name}>
                    <a className='text-base font-medium text-stone-800 p-4'>
                      <span className='link-text'>{link.name}</span>
                    </a>
                  </Link>
                ))}
              </div>

              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
        </nav>
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                <Link href={'/'}>
                  <a>
                    <span className='sr-only'>{ siteName }</span>
                    <div className='w-12 h-12 relative'>
                      <Image
                        src='/logo.png'
                        alt={siteName}
                        layout="fill"
                      />
                    </div>
                  </a>
                </Link>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-6">
                    {navigation.map((item) => (
                      <Popover.Button key={item.name}>
                        <Link href={item.href}>
                          <a className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50" >
                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-rose-400 text-white">
                              <item.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                          </a>
                        </Link>
                      </Popover.Button>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-2 gap-4">
                  {resources.map((item) => (
                    <Popover.Button key={item.name}>
                      <Link href={item.href} key={item.name}>
                        <a className="text-base font-medium text-gray-900" >
                          <span className='link-text'>{item.name}</span>
                        </a>
                      </Link>
                    </Popover.Button>
                  ))}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  )
}