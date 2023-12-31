import Block from '../../utils/Block';
import template from './messenger.hbs';
import MessagesController, { Message as MessageInfo } from '../../controllers/MessagesController';
import { withStore } from '../../utils/Store';
import { Button } from '../Button';
import { eInputType, Input } from '../Input';
import { Message } from '../Message';

interface MessengerProps {
  selectedChat: number | undefined;
  messages: MessageInfo[];
  userId: number;
  title: string;
}

class MessengerBase extends Block<MessengerProps> {
  constructor(props: MessengerProps) {
    super(props);
  }
  protected init() {
    this.children.input = new Input({
      classInput: 'chats__message',
      placeholder: 'Сообщение',
      name: 'message',
      type: eInputType.TEXT,
      pattern: '.*',
      errorMessage: '',
      messenger: true,
    })

    this.children.button = new Button({
      label: 'о',
      type: 'button',
      class: 'chats__message_done button_st',
      onClick: () => this.onSentMessage(),
    });
  }

  onSentMessage() {
    const input =this.children.input as Input;
    const message = input.getValue();

    input.setValue('');

    MessagesController.sendMessage(this.props.selectedChat!, message);
  }

  protected componentDidUpdate(_: MessengerProps, newProps: MessengerProps): boolean {
    this.children.messages = this.createMessages(newProps);

    return true;
  }

  private createMessages(props: MessengerProps) {
    return props.messages.map(data => {
      return new Message({ ...data, isMine: props.userId === data.user_id });
    })
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}

const withSelectedChatMessages = withStore(state => {
  const selectedChatId = state.selectedChat;

  if (!selectedChatId) {
    return {
      messages: [],
      selectedChat: undefined,
      userId: state.user.id
    };
  }

  return {
    messages: (state.messages || {})[selectedChatId] || [],
    selectedChat: state.selectedChat,
    userId: state.user.id,
    title: state.messageUser
  };
});

export const Messenger = withSelectedChatMessages(MessengerBase);
