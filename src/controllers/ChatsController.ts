import API, { ChatsAPI } from '../api/ChatsAPI';
import store from '../utils/Store';
import MessagesController from './MessagesController';

class ChatsController {
  private readonly api: ChatsAPI;

  constructor() {
    this.api = API;
  }

  async create(title: string) {
    await this.api.create(title);

    this.fetchChats();
  }

  async fetchChats() {
    const chats = await this.api.read();

    chats.map(async (chat) => {
      const token = await this.getToken(chat.id);

      await MessagesController.connect(chat.id, token);
    });

    store.set('chats', chats);
  }

  async fetchChatUsers(id: number) {
    const users = await this.api.getUsers(id);

    store.set('chatUsers', users);
  }

  async addUserToChat(id: number, userId: number) {
    await this.api.addUsers(id, [userId]);

    this.fetchChatUsers(id);
  }

  async delete(id: number) {
    await this.api.delete(id);

    this.fetchChats();
  }

  async deleteUser(id: number, userId: number) {
    await this.api.deleteUser(id, [userId]);

    this.fetchChatUsers(id);
  }

  async getUsers(id: number) {
    await this.api.getUsers(id);

    this.fetchChatUsers(id);
  }

  getToken(id: number) {
    return this.api.getToken(id);
  }

  selectChat(id: number, name: string) {
    store.set('selectedChat', id);
    store.set('messageUser', name);
  }
}

const controller = new ChatsController();

export default controller;
