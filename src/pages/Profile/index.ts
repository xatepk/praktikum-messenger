import Block from '../../utils/Block';
import template from './profile.hbs';
import { withStore } from '../../utils/Store';
import { BackButton } from '../../components/BackButton';
import router from '../../utils/Router';
import { Button } from '../../components/Button';
import AuthController from '../../controllers/AuthController';
import { Avatar } from '../../components/Avatar';
import UserController from '../../controllers/UserController';

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
        }
      ],
    })
  }

  init() {
    this.children.backButton = new BackButton({
      type: 'button',
      onClick: () => router.go('/messenger'),
    });

    this.children.save = new Button({
      label: 'Сохранить',
      class: 'button',
      type: 'button',
      onClick: () => this.onSaveAvatar(),
    });

    this.children.close = new Button({
      class: 'close',
      type: 'button',
      onClick: () => this.onCloseModal(),
    });

    this.children.avatar = new Avatar({
      src: `https://ya-praktikum.tech/api/v2/resources${this.props?.user.avatar}`,
      onClick: () => this.onEditAvatar(),
    });

    this.children.buttons = this.props.buttons.map((button: { label: string; class: string; onClick: () => void; }) => {
      return new Button({
        label: button.label,
        class: button.class,
        type: 'button',
        onClick: button.onClick,
      });
    })
  }

  protected componentDidUpdate(_: any, newProps: any): boolean {
    this.children.avatar = new Avatar({
      src: `https://ya-praktikum.tech/api/v2/resources${newProps?.user.avatar}`,
      onClick: () => this.onEditAvatar(),
    });

    return true;
  }


  onEditAvatar() {
    document.querySelector('#myModal')?.classList.remove('modal__none');
  }

  onCloseModal() {
    document.querySelector('#myModal')?.classList.add('modal__none');
  }

  onSaveAvatar() {
    const inputFile = document.querySelector('.profile__input-file') as HTMLInputElement;
    if (inputFile.files) {
      const data = new FormData();
      data.append('avatar', inputFile.files[0]);
      UserController.editAvatar(data as FormData);
    }
  }

  render() {
    return this.compile(template, this.props);
  }
}

const withUser = withStore((state) => {
  return ({ ...state })
})

export const ProfilePage = withUser(ProfilePageBase);
