import Block from '../../utils/Block';
import template from './backButton.hbs';

interface BackButtonProps {
  type?: 'button',
  onClick?: () => void;
  events?: {
    click: () => void;
  };
}

export class BackButton extends Block {
  constructor(props: BackButtonProps) {
    super({
      ...props,
      events: {
        click: props.onClick,
      }
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
