CupHead | Clone

A beautiful, responsive clone of the CupHead landing page. This project is created for educational purposes as a clone of the original site.

## 🚀 Features

Responsive layout (desktop & mobile)

Game cards with CTA buttons

Embedded videos (YouTube iframe)

Platform selection overlays

Clean typography and smooth animations

## 🛠️ Technologies
<img src="https://skillicons.dev/icons?i=git,js,html,css,vscode" /> 

## 📁 Project Structure
```
cupHead/
├── 📁 img/               # Graphic resources and logos
│   ├── company-logo/
│   ├── favicon/
│   ├── logo/
│   ├── overlay-logo/
│   └── pictures/
├── 📁 styles/            
│   └── index.css         # Basics styles
├── index.html            # Entry point
└── index.js              # Logic script
```

## 📸 Screenshots

<img width="920" height="951" alt="cupehead-img" src="https://github.com/user-attachments/assets/bf7d2faa-46d3-4ac9-9972-e101abceb892" />

## 💻 Local Setup
git clone <your-repo-url>
cd cupHead
## Optional: start a static server
npx serve .
## or
python -m http.server 8080

## 🌐 Deploy on GitHub Pages

Ensure image paths are relative: ./img/... (not /img/...).

Commit & push to the main branch:

git add -A
git commit -m "docs: add README; fix relative image paths"
git push origin main


Go to Settings → Pages → Source:
Select Deploy from a branch → Branch: main / (root).

## ⚠️ Common Console Messages

net::ERR_BLOCKED_BY_CLIENT (domains like googleads.g.doubleclick.net or YouTube) — caused by browser extensions (AdBlock). Not your site’s error.

Permissions policy violation: compute-pressure is not allowed — YouTube iframe warning. Can be ignored.

## 📝 File Notes

Avoid spaces in filenames (e.g., logo (1).png). Use logo.png and update paths in index.html.

## ⚖️ Legal Disclaimer

This is an educational clone of the original site. All trademarks and images belong to their respective owners (StudioMDHR, etc.). Use responsibly.
