import Block from '../../utils/Block';
import template from './password.hbs';


export class PasswordPage extends Block {
  constructor() {
    super({
      type: 'button',
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
      class:'profile__info-value input input_tr input_password',
      inputType: 'text',

      inputs: [{ name:'oldPassword', title: 'Старый пароль', pattern: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,40}$' }, { name:'newPassword', title: 'Новый пароль', pattern: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,40}$' }, { name:'newPassword2', title: 'Новый пароль еще раз', pattern: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,40}$' } ]
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
