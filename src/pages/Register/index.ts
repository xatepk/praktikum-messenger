import Block from '../../utils/Block';
import template from './register.hbs';
import { eInputType, Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from '../../components/Link';
import { InputBlock } from '../../components/InputBlock';
import AuthController from '../../controllers/AuthController';
import { SignupData } from '../../api/AuthAPI';


export class RegisterPage extends Block {
  constructor() {
    super({});
  }

  init() {

    this.children.email = new InputBlock({
      id: 'email-input',
      type: eInputType.EMAIL,
      name: 'email',
      classInput: 'login__input',
      placeholder: 'Почта',
      for: 'email',
      classLabel: 'login__label',
      title: 'Почта',
      pattern: '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$',
      errorMessage: 'Неккоректное значение. Убедитесь, что вы использовали латинские буквы и не забыли @',
      classInputBlock: 'login__input-block'
    });

    this.children.login = new InputBlock({
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
      classInputBlock: 'login__input-block'
    });

    this.children.firstName = new InputBlock({
      id: 'first_name-input',
      type: eInputType.TEXT,
      name: 'first_name',
      classInput: 'login__input',
      placeholder: 'Имя',
      for: 'first_name',
      classLabel: 'login__label',
      title: 'Имя',
      pattern: '^([A-Za-zА-Яа-я])+([A-Za-zА-Яа-я\\-])*$',
      errorMessage: 'Неккоректное значение. Поле должно начинаться с заглавной буквы и содержать только латинские или кириллические символы',
      classInputBlock: 'login__input-block'
    });

    this.children.secondName = new InputBlock({
      id: 'second_name-input',
      type: eInputType.TEXT,
      name: 'second_name',
      classInput: 'login__input',
      placeholder: 'Фамилия',
      for: 'second_name',
      classLabel: 'login__label',
      title: 'Фамилия',
      pattern: '^([A-Za-zА-Яа-я])+([A-Za-zА-Яа-я-])*$',
      errorMessage: 'Неккоректное значение. Поле должно начинаться с заглавной буквы и содержать только латинские или кириллические символы',
      classInputBlock: 'login__input-block'
    });

    this.children.phone = new InputBlock({
      id: 'phone-input',
      type: eInputType.TEL,
      name: 'phone',
      classInput: 'login__input',
      placeholder: 'Телефон',
      for: 'phone',
      classLabel: 'login__label',
      title: 'Телефон',
      pattern: '^\\+?\\d{10,15}$',
      errorMessage: 'Неккоректное значение. Поле должно содержать от 10 до 15 цифр, без пробелов или других символов.',
      classInputBlock: 'login__input-block'
    });

    this.children.password = new InputBlock({
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
      classInputBlock: 'login__input-block'
    });

    this.children.password2 = new InputBlock({
      id: 'password2-input',
      type: eInputType.PASSWORD,
      name: 'password2',
      classInput: 'login__input input_password',
      placeholder: 'Пароль',
      for: 'password2',
      classLabel: 'login__label',
      title: 'Пароль (еще раз)',
      pattern: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,40}$',
      errorMessage: 'Неккоректное значение. Поле должно содержать от 8 до 40 символов и обязательно иметь хотя бы одну заглавную букву и одну цифру.',
      classInputBlock: 'login__input-block'
    });

    this.children.button = new Button({
      label: 'Зарегистрироваться',
      class: 'button',
      onClick: () => this.onSubmit(),
    });

    this.children.link = new Link({
      label: 'Войти',
      class: 'login__link button_st',
      to: '/'
    });
  }

  onSubmit() {
    const values = Object
      .values(this.children)
      .filter(child => child instanceof InputBlock)
      .map((child: any) => ([(child.children.input as Input).getName(), (child.children.input as Input).getValue()]))

    const data = Object.fromEntries(values);
    AuthController.signup(data as SignupData);
  }

  render() {
    return this.compile(template, this.props);
  }
}
