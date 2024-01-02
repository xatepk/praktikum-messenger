import Block from '../../utils/Block';
import template from './chat.hbs';
import { withStore } from '../../utils/Store';
import { ChatInfo } from '../../api/ChatsAPI';

export interface ChatProps {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  selectedChat: ChatInfo;
  events: {
    click: () => void;
  }
}

class ChatBase extends Block {
  constructor(props: ChatProps) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, isSelected: this.props.id === this.props.selectedChat?.id });
  }
}

export const withSelectedChat = withStore(
  (state) => ({
    selectedChat: (state.chats || []).find((chat) => chat.id === state.selectedChat)
  })
);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Chat = withSelectedChat(ChatBase);
