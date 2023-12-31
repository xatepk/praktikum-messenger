import Router from './utils/Router';
import { LoginPage } from './pages/Login';
import { RegisterPage } from './pages/Register';
import { ProfilePage } from './pages/Profile';
import { ChatsPage } from './pages/Chats';
import AuthController from './controllers/AuthController';
import { SettingsPage } from './pages/Settings';
import { PasswordPage } from './pages/Password';
import { NotFoundPage } from './pages/404';
import { ServerErrorPage } from './pages/500';

enum Routes {
  Index = '/',
  Register = '/sign-up',
  Profile = '/profile',
  Messenger = '/messenger',
  Settings = '/settings',
  Password = '/password',
  NotFoundPage = '/404',
  ServerErrorPage = '/500',
}

window.addEventListener('DOMContentLoaded', async () => {
  Router
    .use(Routes.Index, LoginPage)
    .use(Routes.Register, RegisterPage)
    .use(Routes.Profile, ProfilePage)
    .use(Routes.Messenger, ChatsPage)
    .use(Routes.Settings, SettingsPage)
    .use(Routes.Password, PasswordPage)
    .use(Routes.NotFoundPage, NotFoundPage)
    .use(Routes.ServerErrorPage, ServerErrorPage)

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
      Router.go(Routes.Messenger)
    }
  } catch (e) {
    console.log('e', e);

    Router.start();

    if (isProtectedRoute) {
      Router.go(Routes.Index);
    }
  }

});
