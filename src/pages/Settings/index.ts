import Block from '../../utils/Block';
import template from './settings.hbs';
import { eInputType, Input } from '../../components/Input';
import { BackButton } from '../../components/BackButton';
import router from '../../utils/Router';
import { withStore } from '../../utils/Store';
import { InputBlock } from '../../components/InputBlock';
import { Button } from '../../components/Button';
import UserController from '../../controllers/UserController';
import { EditProfile } from '../../api/UserAPI';

export class SettingsPageBase extends Block {
  constructor(props: any) {
    super({
      ...props,
      //   type: 'button',
      //   onClick: () => { render('profile') },
      //   events: {
      //     submit: (event: Event) => {
      //       event.preventDefault();
      //       const target = event.target as HTMLFormElement;
      //       const fields = target.querySelectorAll<HTMLInputElement>('input');

      //       fields.forEach(function (field) {
      //         const value = field.value;
      //         const pattern = field.getAttribute('pattern') as string;

      //         if (!value.match(pattern)) {
      //           console.log('Неккоректно заполненные данные', field)
      //         }
      //       });
      //     },
      //   },
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

  init() {
    this.children.backButton = new BackButton({
      type: 'button',
      onClick: () => router.go('/profile'),
    });

    this.children.inputs = this.props.inputs.map((input: { type: eInputType; name: string; pattern: string; id: string; errorMessage: string; title: string; }) => {
      return  new InputBlock({
          type: input.type,
          name: input.name,
          classInput: this.props.class,
          value: this.props.user[input.name],
          pattern: input.pattern,
          id: input.id,
          errorMessage: input.errorMessage,
          classInputBlock: 'profile__info-item',
          inputTitle: input.title
        });
    });

    this.children.button = new Button({
      label: 'Сохранить',
      class: 'button',
      type: 'button',
      onClick: () => this.onSubmit(),
    });
  }

  onSubmit() {
    const values = Object
      .values(this.children.inputs)
      .map((child: any) => {
        return ([(child.children.input as Input).getName(), (child.children.input as Input).getValue()])
      })

    const data = Object.fromEntries(values);

    UserController.editProfile(data as EditProfile);
  }

  render() {
    return this.compile(template, this.props);
  }
}

const withUser = withStore((state) => {
  return ({ ...state })
})

export const SettingsPage = withUser(SettingsPageBase);
