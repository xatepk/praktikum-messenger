// import { ChatInfo } from '../../api/ChatsAPI';
import { ChatInfo } from '../../api/ChatsAPI';
import Block from '../../utils/Block';
import { withStore } from '../../utils/Store';
import { Chat } from '../Chat';
import template from './chatsList.hbs';
import ChatsController from '../../controllers/ChatsController';
import { Button } from '../Button';
import router from '../../utils/Router';

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
  }

  protected componentDidUpdate(_: ChatsListProps, newProps: ChatsListProps): boolean {
    this.children.chats = this.createChats(newProps);

    return true;
  }

  private createChats(props: ChatsListProps) {
    return props.chats.map(data => {
      return new Chat({
        ...data,
        events: {
          click: () => {
            ChatsController.selectChat(data.id, data.title);
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
