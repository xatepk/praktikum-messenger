import Block from '../../utils/Block';
import template from './profile.hbs';
import { withStore } from '../../utils/Store';
import { BackButton } from '../../components/BackButton';
import router from '../../utils/Router';
import { Button } from '../../components/Button';
import AuthController from '../../controllers/AuthController';
// import { User } from '../../api/AuthAPI';

// interface ProfileProps extends User {}

// const userFields = ['id', 'first_name', 'second_name', 'display_name', 'login', 'avatar', 'email', 'phone'] as Array<keyof ProfileProps>;

class ProfilePageBase extends Block {
  constructor(props: any) {
    super({
      ...props,
      buttons: [
        {
          label: 'Изменить данные',
          class: 'profile__info-title profile__info-title_blue button_st profile__info-title_mt',
          onClick: () => router.go('/settings'),
        },
        {
          label: 'Изменить пароль',
          class: 'profile__info-title profile__info-title_blue button_st',
          onClick: () => router.go('/password'),
        },
        {
          label: 'Выйти',
          class: 'profile__info-title profile__info-title_red button_st',
          onClick: () => AuthController.logout(),
        }]
    })
  }

  init() {
    this.children.backButton = new BackButton({
      type: 'button',
      onClick: () => router.go('/messenger'),
    });

    this.children.buttons = this.props.buttons.map((button: { label: string; class: string; onClick: () => void; }) => {
      return new Button ({
        label: button.label,
        class: button.class,
        type: 'button',
        onClick: button.onClick,
      });
    })
  }

  render() {
    return this.compile(template, this.props);
  }
}

const withUser = withStore((state) => {
  return ({ ...state })
})

export const ProfilePage = withUser(ProfilePageBase);
