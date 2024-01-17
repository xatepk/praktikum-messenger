import Block from '../../utils/Block';
import { PropsWithRouter, withRouter } from '../../hocs/withRouter';
import template from './link.hbs';

interface LinkProps extends PropsWithRouter {
  to: string;
  label: string;
  class: string;
  events?: {
    click: () => void;
  };
}

class BaseLink extends Block<LinkProps> {
  constructor(props: LinkProps) {
    super({
      ...props,
      events: {
        click: () => this.navigate()
      },
    });
  }

  navigate() {
    this.props.router.go(this.props.to);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export const Link = withRouter(BaseLink);
