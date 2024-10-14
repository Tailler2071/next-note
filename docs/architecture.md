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