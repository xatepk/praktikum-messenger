import Block from '../../utils/Block';
import template from './password.hbs';
import { render } from "../../utils/render";


export class PasswordPage extends Block {
  constructor() {
    super({
      type: 'button',
      onClick: () => { render('profile') },
      class:"profile__info-value input input_tr input_password",
      inputType: 'text',

      inputs: [{name:"oldPassword", title: 'Старый пароль', pattern: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,40}$'}, {name:"newPassword", title: 'Новый пароль', pattern: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,40}$'}, {name:"newPassword2", title: 'Новый пароль еще раз', pattern: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,40}$'} ]
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
