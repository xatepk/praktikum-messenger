// import { ChatInfo } from '../../api/ChatsAPI';
import { ChatInfo } from '../../api/ChatsAPI';
import Block from '../../utils/Block';
import { withStore } from '../../utils/Store';
import { Chat } from '../Chat';
import template from './chatsList.hbs';
import ChatsController from '../../controllers/ChatsController';
import { Button } from '../Button';
import router from '../../utils/Router';
import { eInputType, Input } from '../Input';

interface ChatsListProps {
  chats: ChatInfo[];
  isLoaded: boolean;
}

class ChatsListBase extends Block {
  constructor(props: ChatsListProps) {
    super({ ...props });
  }

  protected init() {
    this.children.chats = this.createChats(this.props);
    this.children.button = new Button({
      label: 'Профиль',
      class: 'button_st chats__button',
      type: 'button',
      onClick: () => router.go('/profile'),
    });

    this.children.add = new Button({
      label: '+ Новый чат',
      class: 'button button__new-chat',
      type: 'button',
      onClick: () => this.onAddChat(),
    });

    this.children.save = new Button({
      label: 'Создать',
      class: 'button button__new-chat',
      type: 'button',
      onClick: () => this.onSaveNewChat(),
    });

    this.children.close = new Button({
      class: 'close',
      type: 'button',
      onClick: () => this.onCloseModal(),
    });

    this.children.input = new Input({
      classInput: 'chats__message',
      placeholder: 'Название',
      name: 'new-chat',
      type: eInputType.TEXT,
      pattern: '.*',
      errorMessage: '',
      messenger: true,
    })
  }

  onCloseModal() {
    document.querySelector('#myModal')?.classList.add('modal__none');
  }

  onAddChat() {
    document.querySelector('#myModal')?.classList.remove('modal__none');
  }

  onSaveNewChat() {
    if ((this.children.input as Input).getValue().trim() === '') return;

    ChatsController.create((this.children.input as Input).getValue());
    document.querySelector('#myModal')?.classList.add('modal__none');
  }

  protected componentDidUpdate(_: ChatsListProps, newProps: ChatsListProps): boolean {
    this.children.chats = this.createChats(newProps);

    return true;
  }

  private createChats(props: ChatsListProps) {
    return props.chats.map(({ avatar, ...data }) => {
      return new Chat({
        ...data,
        avatar: (avatar === null) ? avatar : `https://ya-praktikum.tech/api/v2/resources${avatar}`,
        events: {
          click: () => {
            ChatsController.selectChat(data.id, data.title);
            ChatsController.getUsers(data.id);
          }
        }
      });
    })
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}

const withChats = withStore((state) => ({ chats: [...(state.chats || [])] }));

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const ChatsList = withChats(ChatsListBase);
