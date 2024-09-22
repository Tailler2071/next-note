This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Модель разработки

#### Разработка ведётся по модели **GitHub Flow**:
📝 **GitHub документация** - [GitHub Doc](https://docs.github.com/ru/get-started/using-github/github-flow)

📝 **Habr статья с картинками** - [Habr Article](https://docs.github.com/ru/get-started/using-github/github-flow)

## Структура проекта

```
├── app              # Папка app (NextJS)
├── src
│   ├── app          # Папка app (FSD)
│   ├── views        # Папка взаимозаменяющая pages (FSD)
│   ├── widgets
│   ├── features
│   ├── entities
│   ├── shared
```

#### ⚠️ **Папка pages (FSD) заменена на views, чтобы избежать конфликта.**

⚠️ Для слоя shared определяем public API (index.ts) на уровне сегмента.

```
├── shared
    ├── ui
    │   ├── index.ts ✅️
    ├── api
    │   ├── index.ts ✅️
    ├── index.ts ⛔
```

⚠️ Для остальных слоёв определяем public API (index.ts) на уровне слайсов.

```
├── widgets
    ├── Navbar
    │   ├── ui
    │   │   ├── Navbar.tsx
    │   │   ├── index.ts ⛔️
    │   ├── index.ts ✅️
```

## Нэйминг компонентов

```
├── widgets
    ├── ComponentName
    │   ├── ui
    │   │   ├── ComponentName.tsx (компонент) ✅️
    │   │   ├── ComponentName.module.scss (стили) ✅️
    │   │   ├── ComponentName.types.ts (типы для компонента) ✅️
    │   │   ├── ComponentName.test.tsx (тесты компонента) ✅️
    │   ├── types.ts (общие типы)
    │   ├── index.ts
```

## Библиотеки

[shadcn](https://ui.shadcn.com/) -  
[tailwindcss](https://tailwindcss.ru/) -  
[lucide](https://lucide.dev/) -
