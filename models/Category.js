import removeNullish from './removeNullish';

export default class Category {
  constructor(props) {
    this.id = props.id;
    this.name = props.name;
    this.description = props.description;
    this.slug = props.slug;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  static fromApiResponse(res) {
    const { id, attributes } = res.data;
    return new Category({
      id,
      name: attributes.name,
      description: attributes.description,
      slug: attributes.slug,
      createdAt: attributes.createdAt,
      updatedAt: attributes.updatedAt,
    })
  }

  get url() {
    return `/categories/${this.slug}`;
  }

  serialized() {
    return removeNullish({
      ...this,
      url: this.url,
    })
  }
}