import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import Author from '@components/author';
import Date from '@components/date';

export default function postCard({ post, className, long }) {
  return (
    <div className={`card min-h-[400px] ${className}`}>
      <Link href={post.url} cl>
        <a className={cn({
          'card-interactive flex-1': true,
          'lg:flex': long
        })}>
          <div className={cn({
            'w-full aspect-video relative': true,
            'lg:w-2/3': long,
          })}>
            <Image
              src={post.coverImage.url}
              alt={post.coverImage.alternativeText}
              layout="fill"
              className='object-cover card-cover-image'
            />
          </div>
          <div className='p-4 space-y-3'>
            <p className="text-xl font-semibold text-gray-900">{post.title}</p>
            <p className="text-base text-gray-500">{post.excerpt}</p>
          </div>
        </a>
      </Link>
      <div className='flex justify-between items-center p-4 bg-stone-100'>
        <Author author={post.author}/>
        <Date className='text-sm font-medium text-slate-500' dateString={post.publishedAt}/>
      </div>
    </div>
  )
}