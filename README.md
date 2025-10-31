# CupHead Website Clone (клон)

Красивая и адаптивная копия лендинга Cuphead. Проект создан в учебных целях как клон оригинального сайта.

## Демо
- Продакшен: `https://anonimus099.github.io/CupHead-website-clone/`

## Возможности
- Адаптивная вёрстка (desktop/mobile)
- Карточки игр с CTA-кнопками
- Встраиваемые видео (YouTube iframe)
- Оверлеи выбора платформы
- Аккуратная типографика и лёгкие анимации

## Технологии
- HTML5, CSS3
- Нативный JavaScript (логика модальных окон)

## Структура
```
cupHead/
├─ index.html
├─ styles/
│  └─ index.css
├─ index.js
└─ img/
   ├─ company-logo/
   ├─ favicon/
   ├─ logo/
   ├─ overlay-logo/
   └─ pictures/
```

## Локальный запуск
```bash
git clone <your-repo-url>
cd cupHead
# опционально запустить статический сервер
npx serve .
# или
python -m http.server 8080
```

## Деплой на GitHub Pages
1) Убедитесь, что пути к картинкам относительные: `./img/...` (не `/img/...`).
2) Закоммитьте и запушьте в ветку `main`:
```bash
git add -A
git commit -m "docs: add README; fix relative image paths"
git push origin main
```
3) Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)`.

## Частые сообщения в консоли
- `net::ERR_BLOCKED_BY_CLIENT` к доменам `googleads.g.doubleclick.net` или `www.youtube.com/youtubei/v1/log_event` — это блокировка расширениями (AdBlock и пр.), не ошибка вашего сайта.
- `Permissions policy violation: compute-pressure is not allowed` — предупреждение политики браузера для встраиваемого контента (YouTube). Игнорируйте.

## Примечание о файлах
- Избегайте пробелов в именах файлов (например, `logo (1).png`). Лучше `logo.png` и обновить путь в `index.html`.

## Правовой дисклеймер
Это учебный клон оригинального сайта. Все торговые марки и изображения принадлежат их владельцам (StudioMDHR и др.). Используйте материалы ответственно.
