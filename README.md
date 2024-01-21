# Messenger

## Описание проекта

Messenger - это приложение для обмена сообщениями. Оно разработано с использованием HTML, Handlebars, Vite и Express. Приложение позволяет пользователям авторизовываться, просматривать список чатов, читать и отправлять сообщения, а также настраивать свой профиль.
Для unit тестирования использованы mocha и chai

## Установка и запуск проекта

Для запуска проекта, выполните следующие шаги:

1. Склонируйте репозиторий:
2. Установите зависимости:

```bash
npm install
```

3. Запустите проект в режиме разработки:

```bash
npm run dev
```


4. Для сборки проекта:

```bash
npm run build
```

5. Для запйска тестов:

```bash
npm run test
```


## Страницы

### Авторизация

Страница с формой авторизации. Форма содержит следующие поля: "login" и "password".

### Список чатов и лента переписки

Страница отображает список доступных чатов и ленту переписки с выбранным чатом. Поле для ввода сообщения имеет имя "message".

### Настройки пользователя

На странице настроек пользователя можно изменить информацию о пользователе. Есть также поле для изменения аватара пользователя и страница для изменения пароля.

### Страница 404

Страница, которая отображается, когда запрошенный адрес не найден.

### Страница 5**

Страница, которая отображается в случае внутренней ошибки сервера (коды 500-599).

## Сборка проекта

Проект настроен для сборки с помощью Vite и использования Sass.

## Express-сервер

Проект включает в себя Express-сервер, который раздаёт статические файлы, включая файл index.html. При обращении к корневому адресу (/) также отдаётся index.html.

## Команды

- `npm run start` - запуск проекта на порту 3000.
- `npm run dev` - запуск проекта в режиме разработки.
- `npm run build` - сборка проекта.

## Ссылка
https://elaborate-crumble-28c4c9.netlify.app/
