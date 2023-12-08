import Block from '../../utils/Block';
import template from './profile.hbs';
import { render } from '../../utils/render';


export class ProfilePage extends Block {
  constructor() {
    super({
      type: 'button',
      user: {
        firstName: 'Иван',
        lastName: 'Иванов',
        email: 'pochta@yandex.ru',
        login: 'ivanivanov',
        displayName: 'Иван',
        phone: '+7 (909) 967 30 30',
      },
      buttons: [{ label: 'Изменить данные', class: 'profile__info-title profile__info-title_blue button_st profile__info-title_mt', onClick: () => { render('settings') } }, { label: 'Изменить пароль', class: 'profile__info-title profile__info-title_blue button_st', onClick: () => { render('password') } }, { label: 'Выйти', class: 'profile__info-title profile__info-title_red button_st', onClick: () => { render('home') } }]
    })
  }

  render() {
    return this.compile(template, this.props);
  }
}
