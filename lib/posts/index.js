import config from '@config/index.mjs';
import Post from '@models/Post';
import VError from 'verror';

async function fetchStrapi(...args) {
  const result = await fetch(...args);
  const jsonResult = await result.json();
  if (jsonResult.error) {
    console.error({
      error: jsonResult.error,
      args,
    });
    throw VError({ 
      name: 'StrapiApiCallFailed',
      info: jsonResult.error
    });
  }
  return jsonResult;
}

export async function getAllPosts() {
  const params = new URLSearchParams({
    populate: ['author.avatar', 'coverImage', 'category']
  })
  const result = await fetchStrapi(`${config.get('strapi.baseUrl')}/api/posts?${params}`, {
    method: 'GET',
  });
  return Promise.all(result.data.map(Post.fromApiResponse));
}
export async function getAllPostSlugs() {
  const params = new URLSearchParams({
    fields: 'slug',
  })
  const result = await fetchStrapi(`${config.get('strapi.baseUrl')}/api/posts?${params}`, {
    method: 'GET',
  });
  return Promise.all(result.data.map(Post.fromApiResponse));
}

export async function getPostById(id) {
  const params = new URLSearchParams({
    populate: ['author.avatar', 'coverImage', 'category'],
  })
  const result = await fetchStrapi(`${config.get('strapi.baseUrl')}/api/posts/${id}?${params}`, {
    method: 'GET',
  });
  return Post.fromApiResponse(result.data);
}

export async function getPreviewPostsById(id) {
  const params = new URLSearchParams({
    populate: ['author.avatar', 'coverImage', 'category'],
    publicationState: 'preview'
  })
  const result = await fetchStrapi(`${config.get('strapi.baseUrl')}/api/posts/${id}?${params}`, {
    method: 'GET',
  });
  return Post.fromPreviewApiResponse(result.data);
}