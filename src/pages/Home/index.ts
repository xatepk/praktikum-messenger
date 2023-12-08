import Block from '../../utils/Block';
import template from './home.hbs';
import {render} from "../../utils/render";


export class HomePage extends Block {
  constructor() {
    super({
      type: 'button',
      class: 'profile__info-title profile__info-title_blue profile__info-title_mt button_st',

      buttons: [{label: 'Chats', onClick: () => {render('chats')}}, {label: 'Profile page', onClick: () => {render('profile')}}, {label: 'Error page', onClick: () => {render('notFound')}}, {label: 'Not Found page', onClick: () => {render('errorPage')}}, {label: 'Register', onClick: () => {render('register')}}, {label: 'Login', onClick: () => {render('login')}}],
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
