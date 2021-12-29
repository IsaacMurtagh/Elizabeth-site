import { remark } from 'remark'
import html from 'remark-html'
import Image from './Image';
import Category from './Category';
import Author from './Author';
import removeNullish from '@util/removeNullish';
import stripHtml from '@util/stripHtml';
export default class Post {
  constructor(props) {
    this.id = props.id;
    this.metaTitle = props.metaTitle;
    this.content = props.content;
    this.metaDescription = props.metaDescription;
    this.title = props.title;
    this.description = props.description;
    this.slug = props.slug;
    this.coverImage = props.coverImage;
    this.category = props.category;
    this.author = props.author;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.publishedAt = props.publishedAt;
  }

  static async fromApiResponse(res) {
    const { id, attributes } = res;
    const content = await remark().use(html).process(attributes.content);
    return new Post({
      id,
      content: content.toString(),
      metaTitle: attributes.metaTitle,
      metaDescription: attributes.metaDescription,
      title: attributes.title,
      description: attributes.description,
      slug: attributes.slug,
      coverImage: attributes.coverImage && Image.fromApiResponse(attributes.coverImage),
      category: attributes.category && Category.fromApiResponse(attributes.category),
      author: attributes.author && Author.fromApiResponse(attributes.author),
      createdAt: attributes.createdAt,
      updatedAt: attributes.updatedAt,
      publishedAt: attributes.publishedAt,
  });
  }

  get url() {
    return `/posts/${this.slug}`
  }

  get excerpt() {
    const maxLength = 240;
    const plainContent = stripHtml(this.content);
    if (plainContent.length < maxLength) {
      return plainContent;
    }
    return `${plainContent.slice(0, maxLength)} ...`
  }

  serialized() {
    return removeNullish({ 
      ...this,
      coverImage: this.coverImage?.serialized(),
      category: this.category?.serialized(),
      author: this.author?.serialized(),
      url: this.url,
      excerpt: this.excerpt,
    });
  }
}