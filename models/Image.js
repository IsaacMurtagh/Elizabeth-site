import removeNullish from '@util/removeNullish';
import config from '@config/index';
export default class Image {
  constructor(props) {
    this.id = props.id,
    this.name = props.name;
    this.alternativeText = props.alternativeText;
    this.caption = props.caption;
    this.url = props.url;
    this.width = props.width;
    this.height = props.height;
    this.thumbnailUrl = props.thumbnailUrl;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  static fromApiResponse(res) {
    const { id, attributes } = res.data;
    const thumbnailUrl = attributes.formats?.thumbnail?.url;
    return new Image({
      id,
      name: attributes.name,
      alternativeText: attributes.alternativeText,
      caption: attributes.caption,
      url: attributes.url,
      thumbnailUrl,
      createdAt: attributes.createdAt,
      updatedAt: attributes.createdAt,
    })
  }

  serialized() {
    return removeNullish({
      ...this,
    })
  }
}