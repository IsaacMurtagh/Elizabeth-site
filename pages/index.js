import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts } from '@lib/posts';

export default function Home({ posts }) {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <div className='w-full h-48 object-cover relative'>
                  <Image
                    src={post.coverImage.url}
                    alt={post.coverImage.alternativeText}
                    layout="fill"
                    className=""
                  />
                </div>
                {/* <img className="h-48 w-full object-cover" src={post.coverImage.url} alt={post.coverImage.alternativeText} /> */}
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <Link href={post.category.url}>
                      <a className="hover:underline">
                        {post.category.name}
                      </a>
                    </Link>
                  </p>
                  <Link href={post.url}>
                    <a className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.description}</p>
                    </a>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <Image
                        src={post.author.avatar.url}
                        alt={post.author.avatar.alternativeText}
                        height={48}
                        width={48}
                        className="rounded-full"
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {post.author.name}
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts: posts.map(p => p.serialized()),
    }
  }
}
