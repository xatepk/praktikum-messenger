import Block from '../../utils/Block';
import template from './label.hbs';

interface LabelProps {
  title: string;
  classLabel: string;
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
