import { ProfilePage } from "../pages/Profile";
import { HomePage } from '../pages/Home';
import { SettingsPage } from "../pages/Settings";
import { PasswordPage } from "../pages/Password";
import { NotFoundPage } from "../pages/404";
import { ServerErrorPage } from "../pages/500";
import { RegisterPage } from "../pages/Register";
import { LoginPage } from "../pages/Login";
import { ChatsPage } from "../pages/Chats";

const ROUTES = {
  'home': HomePage,
  'profile': ProfilePage,
  'settings': SettingsPage,
  'password': PasswordPage,
  'notFound': NotFoundPage,
  'errorPage': ServerErrorPage,
  'register': RegisterPage,
  'login': LoginPage,
  'chats': ChatsPage
}

export function render(name: keyof typeof ROUTES) {
  const root = document.querySelector('#app')!;

  root.innerHTML = '';

  const Page = ROUTES[name];

  const page = new Page();

  root.append(page.getContent()!);

  page.dispatchComponentDidMount();
}
