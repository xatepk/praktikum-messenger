import Block from '../../utils/Block';
import template from './register.hbs';


export class RegisterPage extends Block {
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

      inputs: [
        {
          type: 'email',
          name: 'email',
          classInput: 'login__input',
          placeholder: 'Почта',
          for: 'email',
          classLabel: 'login__label',
          title: 'Почта',
          pattern: '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$'
        },
        {
          type: 'text',
          name: 'login',
          classInput: 'login__input',
          placeholder: 'Логин',
          for: 'login',
          classLabel: 'login__label',
          title: 'Логин',
          pattern: '^[A-Za-z0-9_-]{3,20}$'
        },
        {
          type: 'text',
          name: 'first_name',
          classInput: 'login__input',
          placeholder: 'Имя',
          for: 'first_name',
          classLabel: 'login__label',
          title: 'Имя',
          pattern: '^([A-Za-zА-Яа-я])+([A-Za-zА-Яа-я-])*$'
        },
        {
          type: 'text',
          name: 'second_name',
          classInput: 'login__input',
          placeholder: 'Фамилия',
          for: 'second_name',
          classLabel: 'login__label',
          title: 'Фамилия',
          pattern: '^([A-Za-zА-Яа-я])+([A-Za-zА-Яа-я-])*$'
        },
        {
          type: 'tel',
          name: 'phone',
          classInput: 'login__input',
          placeholder: 'Телефон',
          for: 'phone',
          classLabel: 'login__label',
          title: 'Телефон',
          pattern: '^\\+?\\d{10,15}$'
        },
        {
          type: 'password',
          name: 'password',
          classInput: 'login__input input_password',
          placeholder: 'Пароль',
          for: 'password',
          classLabel: 'login__label',
          title: 'Пароль',
          pattern: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,40}$'
        },
        {
          type: 'password',
          name: 'password2',
          classInput: 'login__input input_password',
          placeholder: 'Пароль',
          for: 'password2',
          classLabel: 'login__label',
          title: 'Пароль (еще раз)',
          pattern: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,40}$'
        },
      ],
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
