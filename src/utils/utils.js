export const contextUtils = {
  login: {
    inputs: [
      {
        type: 'text',
        name: 'login',
        classInput: "login__input",
        placeholder: 'Логин',
        for: "login",
        classLabel: "login__label",
        title: 'Логин'
      },
      {
        type: 'password',
        name: 'password',
        classInput: "login__input input_password",
        placeholder: 'Пароль',
        for: "password",
        classLabel: "login__label",
        title: 'Пароль'
      },
    ]
  },
  signup: {
    inputs: [
      {
        type: 'email',
        name: 'email',
        classInput: "login__input",
        placeholder: 'Почта',
        for: "email",
        classLabel: "login__label",
        title: 'Почта'
      },
      {
        type: 'text',
        name: 'login',
        classInput: "login__input",
        placeholder: 'Логин',
        for: "login",
        classLabel: "login__label",
        title: 'Логин'
      },
      {
        type: 'text',
        name: 'first_name',
        classInput: "login__input",
        placeholder: 'Имя',
        for: "first_name",
        classLabel: "login__label",
        title: 'Имя'
      },
      {
        type: 'text',
        name: 'second_name',
        classInput: "login__input",
        placeholder: 'Фамилия',
        for: "second_name",
        classLabel: "login__label",
        title: 'Фамилия'
      },
      {
        type: 'tel',
        name: 'phone',
        classInput: "login__input",
        placeholder: 'Телефон',
        for: "phone",
        classLabel: "login__label",
        title: 'Телефон'
      },
      {
        type: 'password',
        name: 'password',
        classInput: "login__input input_password",
        placeholder: 'Пароль',
        for: "password",
        classLabel: "login__label",
        title: 'Пароль'
      },
      {
        type: 'password',
        name: 'password2',
        classInput: "login__input input_password",
        placeholder: 'Пароль',
        for: "password2",
        classLabel: "login__label",
        title: 'Пароль (еще раз)'
      },
    ]
  },
  user: {
    firstName: "Иван",
    lastName: 'Иванов',
    email: 'pochta@yandex.ru',
    login: 'ivanivanov',
    displayName: 'Иван',
    phone: '+7 (909) 967 30 30',
  }
}
