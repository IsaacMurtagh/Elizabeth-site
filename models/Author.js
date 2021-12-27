import removeNullish from './removeNullish';
import Image from './Image';

export default class Author {
  constructor(props) {
    this.id = props.id;
    this.name = props.name;
    this.email = props.email;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.avatar = props.avatar;
  }

  static fromApiResponse(res) {
    const { id, attributes } = res.data;
    return new Author({
      id,
      name: attributes.username,
      email: attributes.email,
      createdAt: attributes.createdAt,
      updatedAt: attributes.updatedAt,
      avatar: attributes.avatar && Image.fromApiResponse(attributes.avatar),
    });
  }

  serialized() {
    return removeNullish({
      ...this,
      avatar: this.avatar && this.avatar.serialized(),
    });
  }
}