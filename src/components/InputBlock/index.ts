import Block from '../../utils/Block';
import { Input } from '../Input';
import { Label } from '../Label';
import template from './inputBlock.hbs';

export enum eInputType {
  EMAIL = 'email',
  TEXT = 'text',
  TEL = 'tel',
  PASSWORD = 'password'
}

interface InputBlockProps {
  id?: string;
  value?: string;
  for?: string;
  title?: string;
  classInput: string;
  classLabel?: string;
  placeholder?: string,
  classInputBlock?: string,
  inputTitle?: string,
  name: string;
  type: eInputType,
  pattern: string,
  errorMessage: string,
  events?: {
    blur: (event: FocusEvent) => void
  }
}

export class InputBlock extends Block {
  constructor(props: InputBlockProps) {
    super({ ...props, });
  }

  init() {
    this.children.label = new Label({
      for: this.props.for,
      classLabel: this.props.classLabel,
      title: this.props.title,
    });


    this.children.input = new Input({
      id: this.props.id,
      type: this.props.type,
      name: this.props.name,
      classInput: this.props.classInput,
      placeholder: this.props.placeholder,
      pattern: this.props.pattern,
      errorMessage: this.props.errorMessage,
      value: this.props.value
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
