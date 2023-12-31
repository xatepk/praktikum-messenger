import { User } from './AuthAPI';
import BaseAPI from './BaseAPI';

export interface EditProfile {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  phone: string;
}

export interface EditPassword {
  oldPassword: string;
  newPassword: string;
}

export class UserAPI extends BaseAPI {
  constructor() {
    super('');
  }

  editProfile(data: EditProfile) {
    return this.http.put('/user/profile', data);
  }

  editPassword(data: EditPassword) {
    return this.http.put('/user/password', data);
  }

  editAvatar(data: any) {
    return this.http.put('/user/profile/avatar', data);
  }

  read(): Promise<User> {
    return this.http.get('/auth/user');
  }


  create = undefined;
  update = undefined;
  delete = undefined;
}

export default new UserAPI();
