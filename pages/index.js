import Head from 'next/head';
import { getAllPosts } from '@lib/posts';
import PostCard from '@components/postCard';

export default function Home({ posts }) {
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-3xl tracking-tight text-gray-700 sm:text-4xl">
          Catch up with my latest articles...
        </h2>
        <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
          <PostCard
            key={featuredPost.id}
            post={featuredPost}
            className='col-span-2'
            long={true}
          />
          {regularPosts.map((post) => (
            <PostCard key={post.id} post={post} />
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
