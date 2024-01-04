import Block from '../../utils/Block';
import { Button } from '../Button';
import { eInputType, Input } from '../Input';
import template from './messengerSettings.hbs';
import ChatsController from '../../controllers/ChatsController';
import { withStore } from '../../utils/Store';
import { User } from '../../api/AuthAPI';
import { ChatUsers } from '../Item';

interface MessengerSettingsProps {
  selectedChat: number | undefined;
  users: User[] | [];
}

class MessengerSettingsBase extends Block<MessengerSettingsProps> {
  constructor(props: MessengerSettingsProps) {
    super(props);
  }

  init() {
    this.children.input = new Input({
      classInput: 'chats__message chats__add-input',
      placeholder: 'Введите id',
      name: 'user-id',
      type: eInputType.TEXT,
      pattern: '.*',
      errorMessage: '',
      messenger: true,
    })

    this.children.add = new Button({
      label: '+ Добавить участника',
      class: 'button button__add-user',
      type: 'button',
      onClick: () => this.onAddUsers(),
    });

    this.children.button = new Button({
      label: 'Удалить чат',
      class: 'profile__info-title profile__info-title_red button_st',
      type: 'button',
      onClick: () => this. onDeleteChat(),
    });

    this.children.close = new Button({
      class: 'close',
      type: 'button',
      onClick: () => document.querySelector('#settings')?.classList.add('modal__none'),
    });

  }

  onAddUsers() {
    if ((this.children.input as Input).getValue().trim() === '') return;
    ChatsController.addUserToChat(this.props.selectedChat as number, Number((this.children.input as Input).getValue()));
    (this.children.input as Input).setValue('');
  }

  onDeleteChat() {
    ChatsController.delete(this.props.selectedChat as number);
  }

  protected componentDidUpdate(_: MessengerSettingsProps, newProps: MessengerSettingsProps): boolean {
    this.children.users = newProps.users.map((user) => {
      return new ChatUsers({
        avatar: user.avatar ? `https://ya-praktikum.tech/api/v2/resources${user.avatar}` : 'https://img.freepik.com/premium-photo/border-collie-dog-portrait-with-a-hiding-cat-behind_748076-74.jpg?w=996',
        name: user.first_name,
        id: user.id,
        selectedChat: this.props.selectedChat,
      });
    })

    return true;
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}

  const withSelectedChatUsers = withStore(state => {
    const selectedChatId = state.selectedChat;
    if (!selectedChatId) {
      return {
        selectedChat: undefined,
        users: [],
      };
    }

    return {
      selectedChat: state.selectedChat,
      users: state.chatUsers
    };
  });

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const MessengerSettings = withSelectedChatUsers(MessengerSettingsBase)
