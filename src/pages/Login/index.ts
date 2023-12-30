import Block from '../../utils/Block';
import template from './login.hbs';
import { render } from '../../utils/render';
import { eInputType } from '../../components/Input';


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
              console.log('Неккоректно заполненные данные', field)
            }
          });
        },
      },

      inputs: [
        {
          id: 'login-input',
          type: eInputType.TEXT,
          name: 'login',
          classInput: 'login__input',
          placeholder: 'Логин',
          for: 'login',
          classLabel: 'login__label',
          title: 'Логин',
          pattern: '^[A-Za-z0-9_\\-]{3,20}$',
          errorMessage: 'Неккоректное значение. Поле должно содержать от 3 до 20 символов, состоять только из латинских букв и цифр',
        },
        {
          id: 'password-input',
          type: eInputType.PASSWORD,
          name: 'password',
          classInput: 'login__input input_password',
          placeholder: 'Пароль',
          for: 'password',
          classLabel: 'login__label',
          title: 'Пароль',
          pattern: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,40}$',
          errorMessage: 'Неккоректное значение. Поле должно содержать от 8 до 40 символов и обязательно иметь хотя бы одну заглавную букву и одну цифру.',
        },
      ]
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
