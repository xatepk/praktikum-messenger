import Block from '../../utils/Block';
import template from './password.hbs';
import { render } from '../../utils/render';
import { eInputType } from '../../components/Input';


export class PasswordPage extends Block {
  constructor() {
    super({
      type: 'button',
      onClick: () => { render('profile') },
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
      class:'profile__info-value input input_tr input_password',
      inputType: eInputType.TEXT,

      inputs: [
        {
          id: 'oldPassword-input',
          name:'oldPassword',
          title: 'Старый пароль',
          pattern: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,40}$',
          errorMessage: 'Неккоректное значение. Поле должно содержать от 8 до 40 символов и обязательно иметь хотя бы одну заглавную букву и одну цифру.',
        },
        {
          id: 'newPassword-input',
          name:'newPassword',
          title: 'Новый пароль',
          pattern: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,40}$',
          errorMessage: 'Неккоректное значение. Поле должно содержать от 8 до 40 символов и обязательно иметь хотя бы одну заглавную букву и одну цифру.',
        },
        {
          id: 'newPassword2-input',
          name:'newPassword2',
          title: 'Новый пароль еще раз',
          pattern: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,40}$',
          errorMessage: 'Неккоректное значение. Поле должно содержать от 8 до 40 символов и обязательно иметь хотя бы одну заглавную букву и одну цифру.',
        }
      ]
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
