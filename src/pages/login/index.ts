import Block from '../../utils/Block';
import template from './login.hbs';
import { render } from "../../utils/render";


export class LoginPage extends Block {
  constructor() {
    super({
      type: 'button',
      onClick: () => { render('register') },
      events: {
        submit: (event: Event) => {
          event.preventDefault();
          const target = event.target as HTMLFormElement;
          const fields = target.querySelectorAll<HTMLInputElement>('input');

          fields.forEach(function (field) {
            const value = field.value;
            const pattern = field.getAttribute('pattern') as string;

            if (!value.match(pattern)) {
              console.log('Неккоректно заполненные данные')
            }
          });
        },
      },

      inputs: [
        {
          type: 'text',
          name: 'login',
          classInput: "login__input",
          placeholder: 'Логин',
          for: "login",
          classLabel: "login__label",
          title: 'Логин',
          pattern: '^[A-Za-z0-9_-]{3,20}$'
        },
        {
          type: 'password',
          name: 'password',
          classInput: "login__input input_password",
          placeholder: 'Пароль',
          for: "password",
          classLabel: "login__label",
          title: 'Пароль',
          pattern: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\d]{8,40}$'
        },
      ]
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
