# Говорю легко — лендинг логопеда для детей

Одностраничный лендинг для детского логопеда. Тёплая пастельная палитра,
плавные scroll-анимации, переливающийся (shimmer) заголовок и адаптивная вёрстка.

## Стек

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** + структура **shadcn** (`/components/ui`, `/lib/utils`)
- **lucide-react** — иконки
- Шрифты **Onest** (заголовки) и **Manrope** (текст) с кириллицей

## Особенности

- **Shimmer-заголовок** — эффект «переливающегося стекла» (как в `tahoe-glass-text`)
  на акценте в Hero и на заголовке «Услуги логопеда» (см. `.shimmer-text` в
  `app/globals.css`).
- **Scroll reveal** — каждый блок плавно появляется при прокрутке
  (`components/reveal.tsx`, IntersectionObserver, fade-up + blur).
- Все секции референса: Hero, Услуги, Как проходят занятия, Почему выбирают меня,
  Отзывы, Запись на консультацию, Footer.
- Форма заявки — демонстрационная: показывает подтверждение локально, данные
  никуда не отправляются (бэкенд не подключён).

## Структура

```
app/
  layout.tsx        — шрифты, метаданные
  page.tsx          — сборка секций
  globals.css       — тема (CSS-переменные), shimmer, scroll-reveal
components/
  ui/               — shadcn-компоненты (pixel-perfect-hero)
  sections/         — header, hero, services, process, why-me, reviews, contact, footer
  reveal.tsx        — scroll-анимация
  decor.tsx         — пастельные блобы, точки, eyebrow
  section-heading.tsx
lib/utils.ts        — cn()
public/images/      — фото и аватарки
```

## Запуск

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # продакшен-сборка
```
