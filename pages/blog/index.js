import Head from 'next/head';
import { getAllPosts } from '@lib/posts';
import PostCard from '@components/postCard';
import variables from '@config/variables';

export default function Home({ posts }) {
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{ variables.siteName }</title>
        <meta name="description" content={variables.description} key="description" />

        {/* Open Graph */}
        <meta property="og:url" content={variables.siteBaseUrl} key="ogurl" />
        <meta property="og:image" content='/public/logo.png' key="ogimage" />
        <meta property="og:site_name" content={variables.siteName} key="ogsitename" />
        <meta property="og:title" content={variables.siteName} key="ogtitle" />
        <meta property="og:description" content={variables.description} key="ogdesc" />
      </Head>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8 flex-grow">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3 sm:w-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl tracking-tight text-gray-700">
            Catch up with my latest articles...
          </h2>
          <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
            {featuredPost && <PostCard
              key={featuredPost.id}
              post={featuredPost}
              className='lg:col-span-2'
              long
            />}
            {regularPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
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
