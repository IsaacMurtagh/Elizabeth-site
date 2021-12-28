import Image from 'next/image';
import Head from 'next/head';
import { getAllPostSlugs, getPostById } from '@lib/posts';
import { getPostIdBySlug, savePostIds } from '@util/postCache';
import DotMatrix from '@assets/dotMatrix.svg';
import Author from '@components/author';
import Date from '@components/date';

export default function Post({ post }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{ post.metaTitle }</title>
        <meta name="description" content={post.metaDescription} key="description" />

        {/* Open Graph */}
        {/* <meta property="og:url" content={currentURL} key="ogurl" /> */}
        <meta property="og:image" content={post.coverImage.url} key="ogimage" />
        <meta property="og:site_name" content='LiloWriting' key="ogsitename" />
        <meta property="og:title" content={post.metaTitle} key="ogtitle" />
        <meta property="og:description" content={post.metaDescription} key="ogdesc" />
      </Head>
      <section className="relative py-8 md:py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
            <DotMatrix className="absolute top-12 left-full transform translate-x-32 text-gray-300"/>
            <DotMatrix className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32 text-gray-300"/>
            <DotMatrix className="absolute bottom-12 left-full transform translate-x-32 text-gray-300"/>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto space-y-8">
            <div className='w-full aspect-[4/3] relative'>
              <Image
                src={post.coverImage.url}
                alt={post.coverImage.alternativeText}
                layout="fill"
                className='object-cover'
              />
            </div>
            <h1>
              <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                {post.category.name}
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {post.title}
              </span>
            </h1>
            <div className='flex justify-between items-center border px-4 py-2 rounded-xl'>
              <Author author={post.author}/>
              <Date className='text-sm font-medium text-slate-500' dateString={post.publishedAt}/>
            </div>
          </div>
          <div
            className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>
    </>
  )
}

export async function getStaticProps({ params }) {
  const id = getPostIdBySlug(params.slug);
  const post = await getPostById(id);
  return {
    props: {
      post: post.serialized(),
    }
  }
}

export async function getStaticPaths() {
  const posts = await getAllPostSlugs();
  savePostIds(posts);
  return {
    paths: posts.map(({ slug }) => {
      return {
        params: { 
          slug,
        },
      }
    }),
    fallback: false,
  }
}