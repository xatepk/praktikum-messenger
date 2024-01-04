import Block from '../../utils/Block';
import template from './avatar.hbs';

export interface AvatarProps {
  src: string
  onClick?: () => void;
  events?: {
    click: () => void;
  };
}

export class Avatar extends Block {
  constructor(props: AvatarProps) {
    super({
      ...props,
      events: {
        click: props.onClick,
    } });
  }

  render() {
    return this.compile(template, this.props);
  }
}
