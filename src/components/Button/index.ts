import Block from '../../utils/Block';
import template from './button.hbs';

export interface ButtonProps {
  label?: string;
  class: string;
  type?: string;
  onClick?: () => void;
  events?: {
    click: () => void;
  };
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super({
      type: 'button',
      ...props,
      events: {
        click: props.onClick,
    } });
  }

  render() {
    return this.compile(template, this.props);
  }
}
