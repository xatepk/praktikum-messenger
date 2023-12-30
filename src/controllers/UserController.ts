import API, { EditProfile, UserAPI } from '../api/UserAPI';
import store from '../utils/Store';
import router from '../utils/Router';

export class UserController {
  private readonly api: UserAPI;

  constructor() {
    this.api = API;
  }

  async editProfile(data: EditProfile) {
    try {
      await this.api.editProfile(data);

      await this.fetchUser();

      router.go('/profile');
    } catch (e: any) {
      console.error(e);
    }
  }

  async fetchUser() {
    const user = await this.api.read();
    store.set('user', user);
  }
}

export default new UserController();
