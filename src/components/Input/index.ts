
import Block from '../../utils/Block';
import template from './input.hbs';

interface InputProps {
  value?: string;
  class: string;
  placeholder?: string,
  name: string;
  type: 'email' | 'text' | 'phone',
  pattern?: string,
  events?: {
    blur: (event: FocusEvent) => void
  }
}

export class Input extends Block {
  constructor(props: InputProps) {
    super({
      ...props,
      events: {
        blur: (event: FocusEvent) => {
          const { value, getAttribute } = event.target as HTMLInputElement;
          const pattern = getAttribute('pattern');

          if(!pattern) return;
          const { classList } = event.target as HTMLInputElement;
          const regexp = new RegExp(pattern);

          if (!value.match(regexp)) {
            classList.add('input_invalid');
          } else {
            classList.remove('input_invalid');
          }
        }
      }
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
