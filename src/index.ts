import Router from './utils/Router';
import { LoginPage } from './pages/Login';
import { RegisterPage } from './pages/Register';
import { ProfilePage } from './pages/Profile';
import { ChatsPage } from './pages/Chats';
import AuthController from './controllers/AuthController';
import { SettingsPage } from './pages/Settings';

enum Routes {
  Index = '/',
  Register = '/register',
  Profile = '/profile',
  Messenger = '/messenger',
  Settings = '/settings'
}

window.addEventListener('DOMContentLoaded', async () => {
  Router
    .use(Routes.Index, LoginPage)
    .use(Routes.Register, RegisterPage)
    .use(Routes.Profile, ProfilePage)
    .use(Routes.Messenger, ChatsPage)
    .use(Routes.Settings, SettingsPage)

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.Index:
    case Routes.Register:
      isProtectedRoute = false;
      break;
  }

  try {
    await AuthController.fetchUser();

    Router.start();

    if (!isProtectedRoute) {
      Router.go(Routes.Profile)
    }
  } catch (e) {
    console.log('e', e);

    Router.start();

    if (isProtectedRoute) {
      Router.go(Routes.Index);
    }
  }

});
