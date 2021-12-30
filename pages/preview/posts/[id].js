import Post from "@pages/posts/[slug]";
import Error from 'next/error'
import { getPreviewPostsById } from '@lib/posts';
import VError from "verror";

export default function PreviewPost({ errorCode, post }) {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }
  return <Post post={post} />
}

export async function getServerSideProps({ params }) {
  try {
    const post = await getPreviewPostsById(params.id);
    return {
      props: {
        post: post.serialized(),
      }
    }
  } catch(err) {
    return {
      props: {
        errorCode: VError.info(err).status
      }
    }
  }
}