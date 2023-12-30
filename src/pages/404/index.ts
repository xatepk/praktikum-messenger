import Block from '../../utils/Block';
import template from './404.hbs';
import { render } from '../../utils/render';

export class NotFoundPage extends Block {
  constructor() {
    super({
      type: 'button',
      onClick: () => { render('home') },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
