import Link from 'next/link';
import linkedIn from 'assets/linkedIn.svg';

const navigation = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/elizabeth-howe-38941321b/',
    icon: linkedIn,
  },
]
export default function footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <a className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            </Link>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">&copy; {(new Date()).getFullYear()} LiloWriting.</p>
        </div>
      </div>
    </footer>
  )
}