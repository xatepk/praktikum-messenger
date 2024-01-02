import { Button } from '../../components/Button';
import Block from '../../utils/Block';
import router from '../../utils/Router';
import template from './500.hbs';

export class ServerErrorPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.button = new Button({
      class: 'error-page__back button_st',
      type: 'button',
      label: 'Назад к чатам',
      onClick: () => router.go('/messenger'),
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
