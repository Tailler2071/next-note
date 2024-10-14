# NextNote 0.0.1

Это проект на [Next.js](https://nextjs.org) , созданный с помощью команды
[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).  
Этот проект использует [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) для
автоматической оптимизации и загрузки шрифта [Geist](https://vercel.com/font), нового семейства шрифтов от Vercel.  
Чтобы узнать больше о Next.js, обратитесь к следующим ресурсам:

- [Next.js Documentation](https://nextjs.org/docs) — изучите функции и API Next.js.
- [Learn Next.js](https://nextjs.org/learn) — интерактивный учебник по Next.js.

## Начало работы

Сначала запустите сервер разработки:

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в вашем браузере, чтобы увидеть результат.

Запустите [`docker`](https://www.docker.com/) на своем ПК.  
Чтобы создать контейнер в фоновом режиме и продолжить использовать терминал, выполните следующую команду:
```bash
docker compose up -d
```

Создайте таблицы в БД с помощью Prisma:
```bash
npx prisma migrate dev --name init
```

## Библиотеки

### Компонентные библиотеки и иконки

- [shadcn](https://ui.shadcn.com/) — это коллекция UI-компонентов, построенных на основе React и TailwindCSS. Она
  позволяет быстро и легко создавать современные интерфейсы, используя кастомизированные и переиспользуемые компоненты.
- [lucide](https://lucide.dev/) — это иконки с открытым исходным кодом, доступные для интеграции в проекты. Библиотека
  включает в себя множество SVG-иконок, которые легко стилизовать и использовать в веб-приложениях для создания
  интуитивно
  понятного интерфейса.

### Инструменты для форматирования и линтинга

- [prettier](https://prettier.io/) — Инструмент для автоматического форматирования кода, поддерживающий различные языки
  программирования.
- [stylelint](https://stylelint.io/) — Линтер для стилей, который помогает поддерживать качественные CSS и SCSS.
- [stylelint-config-standard-scss](https://www.npmjs.com/package/stylelint-config-standard-scss) — Конфигурация для
  stylelint, которая добавляет стандартные правила для SCSS.

### Инструменты для работы с CSS и SCSS

- [sass](https://sass-lang.com/) — Популярный препроцессор CSS, позволяющий использовать переменные, вложенные правила и
  другие мощные функции для стилизации.
- [clsx](https://www.npmjs.com/package/clsx) — Утилита для гибкого управления классами CSS, которая помогает
  комбинировать их динамически.
- [tailwindcss](https://tailwindcss.ru/) — это CSS-фреймворк, который предоставляет утилитарные классы для быстрой
  разработки адаптивных и гибких интерфейсов. Вместо написания кастомных стилей можно использовать предопределенные
  классы для настройки внешнего вида элементов.

### Инструменты для тестирования

- [jest](https://jestjs.io/) — Тестовый фреймворк для JavaScript с акцентом на простоту и поддержку асинхронного кода.
- [jest-environment-jsdom](https://www.npmjs.com/package/jest-environment-jsdom) — Среда для тестирования в Jest,
  которая имитирует браузер с использованием jsdom.

### Инструменты для работы с базами данных

- [prisma](https://www.prisma.io/) — ORM (Object-Relational Mapping) для работы с базами данных, упрощающий
  взаимодействие с базой и генерацию запросов.

### Инструменты для аутентификации

- [next-auth]() — Полнофункциональная библиотека для аутентификации в приложениях на Next.js, с поддержкой OAuth, JWT и
  других методов.

### Валидация данных

- [zod](https://zod.dev/) — Библиотека для типобезопасной валидации данных, основанная на TypeScript, которая позволяет
  создавать схемы для проверки данных.

### Прочие инструменты

- [@svgr/webpack]() — Плагин для Webpack, который конвертирует SVG в React-компоненты, что упрощает их использование в
  приложениях.