
import Block from '../../utils/Block';
import template from './input.hbs';

export enum eInputType {
  EMAIL = 'email',
  TEXT = 'text',
  TEL = 'tel',
  PASSWORD = 'password'
}

interface InputProps {
  id?: string;
  value?: string;
  class: string;
  placeholder?: string,
  name: string;
  type: eInputType,
  pattern: string,
  errorMessage: string,
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
          const { value } = event.target as HTMLInputElement;
          const regexp = new RegExp(props.pattern);

          if (regexp.test(value)) {
            const errorElement = document.querySelector(`#${props.id}-error`) as HTMLSpanElement;
            errorElement.textContent = '';
            errorElement.classList.remove('input__error_visible');
          } else {
            const errorElement = document.querySelector(`#${props.id}-error`) as HTMLSpanElement;
            errorElement.textContent = props.errorMessage;
            errorElement.classList.add('input__error_visible');
          }
        }
      }
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
