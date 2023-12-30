import Block from '../../utils/Block';
import template from './settings.hbs';
import { render } from '../../utils/render';
import { eInputType } from '../../components/Input';

export class SettingsPage extends Block {
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
      class: 'profile__info-value input input_tr',

      inputs: [
        {
          id: 'email-input',
          type: eInputType.EMAIL,
          name: 'email',
          title: 'Почта',
          value: 'pochta@yandex.ru',
          pattern: '^[A-Za-z0-9._\\%\\+\\-]+@[A-Za-z0-9.\\-]+\\.[A-Za-z]{2,}$',
          errorMessage: 'Неккоректное значение. Убедитесь, что вы использовали латинские буквы и не забыли @',
        },
        {
          id: 'login-input',
          type: eInputType.TEXT,
          name: 'login',
          value: 'ivanivanov',
          title: 'Логин',
          pattern: '^[A-Za-z0-9_\\-]{3,20}$',
          errorMessage: 'Неккоректное значение. Поле должно содержать от 3 до 20 символов, состоять только из латинских букв и цифр',
        },
        {
          id: 'first_name-input',
          type: eInputType.TEXT,
          name: 'first_name',
          value: 'Иван',
          title: 'Имя',
          pattern: '^([A-Za-zА-Яа-я])+([A-Za-zА-Яа-я\\-])*$',
          errorMessage: 'Неккоректное значение. Поле должно начинаться с заглавной буквы и содержать только латинские или кириллические символы',
        },
        {
          id: 'second_name-input',
          type: eInputType.TEXT,
          name: 'second_name',
          title: 'Фамилия',
          value: 'Иванов',
          pattern: '^([A-Za-zА-Яа-я])+([A-Za-zА-Яа-я\\-])*$',
          errorMessage: 'Неккоректное значение. Поле должно начинаться с заглавной буквы и содержать только латинские или кириллические символы',
        },
        {
          id: 'display_name-input',
          type: eInputType.TEXT,
          name: 'display_name',
          value: 'Иван',
          title: 'Имя в чате',
          pattern: '^([A-Za-zА-Яа-я])+([A-Za-zА-Яа-я\\-])*$',
          errorMessage: 'Неккоректное значение. Поле должно начинаться с заглавной буквы и содержать только латинские или кириллические символы',
        },
        {
          id: 'phone-input',
          type: eInputType.TEL,
          name: 'phone',
          value: '+7 (909) 967 30 30',
          title: 'Телефон',
          pattern: '^\\+?\\d{10,15}$',
          errorMessage: 'Неккоректное значение. Поле должно содержать от 10 до 15 цифр, без пробелов или других символов.',
        }
      ]
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
