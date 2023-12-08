import Block from '../../utils/Block';
import template from './settings.hbs';
import { render } from '../../utils/render';

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
              console.log('Неккоректно заполненные данные')
            }
          });
        },
      },
      class:'profile__info-value input input_tr',

      inputs: [{ type:'email', name:'email', title:'Почта', value:'pochta@yandex.ru', pattern: '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$' }, { type:'text', name:'login',
      value:'ivanivanov', title: 'Логин', pattern: '^[A-Za-z0-9_-]{3,20}$' }, { type:'text', name:'first_name', value:'Иван', title: 'Имя', pattern: '^([A-Za-zА-Яа-я])+([A-Za-zА-Яа-я-])*$' }, { type:'text', name:'second_name', title: 'Фамилия', value: 'Иванов', pattern: '^([A-Za-zА-Яа-я])+([A-Za-zА-Яа-я-])*$' }, { type:'text', name:'display_name', value: 'Иван', title: 'Имя в чате', pattern: '^([A-Za-zА-Яа-я])+([A-Za-zА-Яа-я-])*$' }, { type:'tel', name:'phone', value: '+7 (909) 967 30 30', title: 'Телефон', pattern: '^\\+?\\d{10,15}$' }]
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
