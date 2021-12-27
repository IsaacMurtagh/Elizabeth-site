import fs from 'fs';
const filePath = '.cache/postCache.json';

export function savePostIds(posts) {
  const slugIdMap = posts.reduce((acc, post) => {
    return { ...acc, [post.slug]: post.id }
  }, {});
  fs.writeFileSync(filePath, JSON.stringify(slugIdMap));
}

export function getPostIdBySlug(slug) {
  const slugIdMap = JSON.parse(fs.readFileSync(filePath));
  return slugIdMap[slug];
}