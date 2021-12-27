import { getAllPostSlugs, getPostBySlug } from '@lib/posts';

export default function Post({ post }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: post.content }}>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  return {
    props: {
      post: post.serialized(),
    }
  }
}

export async function getStaticPaths() {
  const posts = await getAllPostSlugs();
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