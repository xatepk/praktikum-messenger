import Block from '../../utils/Block';
import template from './label.hbs';

interface LabelProps {
  label: string;
  class: string;
  for: string,
}

export class Label extends Block {
  constructor(props: LabelProps) {
    super({
      ...props
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
