# Sabrina Pradhan | Portfolio

Personal portfolio website showcasing my projects, skills and experience. Built with React, TypeScript and Tailwind CSS, with smooth page and scroll animations.

**Live site:** [sabrinapradhan.me](https://sabrinapradhan.me/)

---

## Features

- Responsive layout for mobile, tablet and desktop
- Multi-page navigation with client-side routing
- Animated transitions and scroll effects
- Clean, component-based codebase written in TypeScript
- Fast development and build with Vite

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19 |
| Language | TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS 4 |
| Routing | React Router 7 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Linting | ESLint |

---

## Project Structure

```
sabrina-portfolio/
├── public/              # static assets (images, favicon, resume)
├── src/                 # components, pages and styles
├── index.html           # app entry
├── vite.config.ts       # Vite and Tailwind configuration
├── tsconfig*.json       # TypeScript configuration
└── eslint.config.js     # lint rules
```

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 20 or newer
- npm

### Run locally

```bash
git clone https://github.com/Gladiolus-bat/sabrina-portfolio.git
cd sabrina-portfolio
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check the code with ESLint |

---

## Deployment

The site is a static Vite build, so it deploys easily to Vercel, Netlify or GitHub Pages.

1. Run `npm run build`
2. Deploy the generated `dist/` folder, or connect the repository to your hosting provider (build command `npm run build`, output directory `dist`)

If you use client-side routing on Netlify or Vercel, add a rewrite rule that sends all paths to `index.html`, so refreshing a page doesn't show a 404.

---

## Contact

- GitHub: [@Gladiolus-bat](https://github.com/Gladiolus-bat)
- LinkedIn: [Sabrina Pradhan](https://www.linkedin.com/in/sabrina-pradhan/)
- Email: [Sabrina Pradhan](pradhansabrina32@gmail.com)

---

## License

This project is licensed under the [MIT License](LICENSE).
