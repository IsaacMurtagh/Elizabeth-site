import Link from 'next/link';
import Image from 'next/image';

const siteName = 'Lilo Writing Blog'
const navigation = [
  { 
    name: 'lilowriting.com',
    href: 'https://lilowriting.com'
  }
]

export default function header() {
  return (
    <header className='bg-orange-100'>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' aria-label='Top'>
        <div className='w-full py-6 flex items-center justify-between border-b border-slate-100 lg:border-none'>
          <div className='flex items-center'>
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
            <div className='hidden ml-10 space-x-8 lg:block'>
              {navigation.map((link) => (
                <Link href={link.href} key={link.name}>
                  <a className='text-base font-medium text-stone-800 hover:text-stone-600'>{link.name}</a>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <Link href={link.href} key={link.name}>
              <a className='text-base font-medium text-stone-800 hover:text-stone-600'>{link.name}</a>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}