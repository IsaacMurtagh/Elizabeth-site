import VError from 'verror';
import config from '@config/index.mjs';
import Post from '@models/Post';

async function fetchStrapi(...args) {
  const result = await fetch(...args);
  const jsonResult = await result.json();
  if (jsonResult.error) {
    console.error({
      error: jsonResult.error,
      args,
    });
    throw VError({ name: 'StrapiApiCallFailed' });
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
  const result = await fetch(`${config.get('strapi.baseUrl')}/api/posts?${params}`, {
    method: 'GET',
  });
  const jsonResult = await result.json();
  return Promise.all(jsonResult.data.map(Post.fromApiResponse));
}

export async function getPostBySlug(slug) {
  const params = new URLSearchParams({
    populate: ['author.avatar', 'coverImage', 'category'],
    slug,
  })
  const result = await fetch(`${config.get('strapi.baseUrl')}/api/posts?${params}`, {
    method: 'GET',
  });
  const jsonResult = await result.json();
  return Post.fromApiResponse(jsonResult.data[0]);
}