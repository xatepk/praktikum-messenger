import Block from '../../utils/Block';
import template from './login.hbs';
import { eInputType, Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from '../../components/Link';
import { InputBlock } from '../../components/InputBlock';
import AuthController from '../../controllers/AuthController';
import { SignupData } from '../../api/AuthAPI';


export class LoginPage extends Block {
  constructor() {
    super({});
  }

  init() {
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

    this.children.button = new Button({
      label: 'Авторизоваться',
      class: 'button',
      onClick: () => this.onSubmit(),
    });

    this.children.link = new Link({
      label: 'Нет аккаунта?',
      class: 'login__link button_st',
      to: '/register'
    });
  }

  onSubmit() {
    const values = Object
      .values(this.children)
      .filter(child => child instanceof InputBlock)
      .map((child: any) => {
        return ([(child.children.input as Input).getName(), (child.children.input as Input).getValue()])
      })

    const data = Object.fromEntries(values);

    AuthController.signin(data as SignupData);
  }

  render() {
    return this.compile(template, this.props);
  }
}
