import { set as helperSet } from './helpers';
import { EventBus } from './EventBus';
import Block from './Block';
import { ChatProps } from '../components/Chat';
import { User } from '../api/AuthAPI';
import { Message } from '../controllers/MessagesController';

export enum StoreEvents {
  Updated = 'updated'
}

export interface IRootStore {
  chats: Array<ChatProps>;
  selectedChat: ChatProps['id'] | null;
  user: User;
  messages: Record<number, Message[]>;
  messageUser?: string;
}

const initialUser: User= {
  id: 0,
  first_name: '',
  second_name: '',
  login: '',
  email: '',
  password: '',
  phone: '',
  avatar: '',
}

const initialStore = {
  chats: [],
  selectedChat: null,
  user: initialUser,
  messages: {},
}

export class Store extends EventBus {
  private state: IRootStore = initialStore;

  public set(keypath: string, data: unknown) {
    helperSet(this.state, keypath, data);
    this.emit(StoreEvents.Updated, this.getState());
  }

  public getState() {
    return this.state;
  }
}

const store = new Store();

export function withStore(mapStateToProps: (state: IRootStore) => any) {

  return function wrap(Component: typeof Block){
    let previousState: any;


    return class WithStore extends Component {

      constructor(props: any) {
        previousState = mapStateToProps(store.getState());

        super({ ...props, ...previousState });

        store.on(StoreEvents.Updated, () => {
          const stateProps = mapStateToProps(store.getState());

          previousState = stateProps;

          this.setProps({ ...stateProps });
        });
      }
    }

  }

}

export default store;
