import Block from '../../utils/Block';
import template from './password.hbs';
import { eInputType, Input } from '../../components/Input';
import { BackButton } from '../../components/BackButton';
import router from '../../utils/Router';
import { InputBlock } from '../../components/InputBlock';
import { Button } from '../../components/Button';
import UserController from '../../controllers/UserController';
import { EditPassword } from '../../api/UserAPI';


export class PasswordPage extends Block {
  constructor() {
    super({
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

  init() {
    this.children.backButton = new BackButton({
      type: 'button',
      onClick: () => router.go('/profile'),
    });

    this.children.inputs = this.props.inputs.map((input: { type: eInputType; name: string; pattern: string; id: string; errorMessage: string; title: string; }) => {
      return  new InputBlock({
          type: this.props.type,
          name: input.name,
          classInput: this.props.class,
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
      .filter(child => (child.children.input as Input).getName() === 'oldPassword' || (child.children.input as Input).getName() === 'newPassword')
      .map((child: any) => {
        return ([(child.children.input as Input).getName(), (child.children.input as Input).getValue()])
      })

    const data = Object.fromEntries(values);

    UserController.editPassword(data as EditPassword);
  }

  render() {
    return this.compile(template, this.props);
  }
}
