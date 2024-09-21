# Vite Crazy Kickstart

<p align="center">
  <img src="https://vitejs.dev/logo.svg" alt="Vite Logo" height="80px">
  <img src="https://reactjs.org/logo-og.png" alt="React Logo" height="80px">
  <img src="https://recoiljs.org/img/logo.svg" alt="Recoil Logo" height="80px">
  <img src="https://tailwindcss.com/favicons/favicon.ico?v=3" alt="Tailwind Logo" height="80px">
  <img src="https://ui.aceternity.com/_next/image?url=%2Flogo.png&w=128&q=75" alt="Aceternity Logo" height="80px">
</p>

**Vite Crazy Kickstart** is a fast, feature-rich starter template for building modern React applications with TypeScript. It comes pre-configured with the following technologies:
- [Vite](https://vitejs.dev/) for fast development and hot module replacement (HMR).
- [React](https://react.dev/) for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) for static typing and enhanced developer tooling.
- [Recoil](https://recoiljs.org/) for state management.
- [TailwindCSS](https://tailwindcss.com/) for utility-first, responsive styling.
- [Aceternity UI](https://ui.aceternity.com/) for UI components.

## Features

- **Vite for blazing fast development**: Instant server start and fast HMR powered by Vite.
- **Recoil for global state management**: Easy-to-use state management for your React app, perfect for both small and large-scale applications.
- **TailwindCSS for utility-first styling**: Pre-configured TailwindCSS for building responsive layouts quickly.
- **Aceternity UI**: Pre-built UI components to help you kickstart your project with a professional look.

## Preview

Here's what the template looks like out of the box:

<!-- Placeholder for a screenshot of the template -->

<p align="center">
  <img src="https://i.ibb.co/87X48nr/Screenshot-20240914-122632.png" alt="Template Preview" height="300px">
</p>

## Installation

You can easily create a new project using this template with the following command:

```bash
npx vite-crazy-kickstart@latest 
```

This will set up the template in a new folder called `my-new-project`. You can then navigate into your project directory and start the development server.

```bash
cd my-new-project
npm install  # Install dependencies
npm run dev  # Start development server
```

For **pnpm** or **yarn** users, you can use your preferred package manager instead of `npm`.

### Build for Production

To create a production build of your project, run:

```bash
npm run build
```

This will output your built files into a `dist` folder, ready for deployment.

## Folder Structure

Here’s a quick overview of the important folders in this template:

```
my-new-project/
├── public/              # Static assets like images, favicons, etc.
├── src/
│   ├── assets/          # Logos, images, and static assets
│   ├── components/      # Reusable components (includes UI components)
│   ├── lib/             # reusable function's and method's
│   ├── recoil/          # Recoil atoms and selectors
│   ├── index.css/       # Global CSS (including Tailwind imports)
│   ├── AppRoutes.tsx/   # declaring App routes
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Entry point for React
└── index.html           # Main HTML file
```

### Vite Configuration

Vite’s configuration is minimal but flexible. Here’s the `vite.config.ts` that comes with this template:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',  // Allows importing from 'src' directory using '@'
    },
  },
});
```

## Technologies Used

### [Vite](https://vitejs.dev/)
Vite is a next-generation frontend tool that focuses on speed and performance. It provides instant server start and fast hot module replacement (HMR), making the development experience smooth.

### [React](https://react.dev/)
React is a JavaScript library for building user interfaces, focusing on declarative, component-driven development. It's perfect for building interactive and dynamic web applications.

### [TypeScript](https://www.typescriptlang.org/)
TypeScript provides optional static typing to JavaScript, allowing developers to catch errors early and enjoy enhanced editor tooling like autocompletion, refactoring, and more.

### [Recoil](https://recoiljs.org/)
Recoil is a state management library for React, providing powerful, flexible tools for managing both local and global state.

### [TailwindCSS](https://tailwindcss.com/)
TailwindCSS is a utility-first CSS framework that makes styling fast and efficient. It allows you to build responsive, mobile-first designs directly in your JSX files.

### [Aceternity UI](https://ui.aceternity.com/)
Aceternity UI provides a set of clean, customizable UI components for quickly building modern web applications. This template includes its preconfigured components to give your project a polished look right from the start.

## Getting Started

Once you've installed the template, you can start adding your components and business logic. Here are a few steps to help you get started:

1. **Create Components**: Start building your components in the `src/components/` directory.
2. **Manage State**: Use Recoil for state management. Define your atoms and selectors in the `src/recoil/` directory.
3. **Style with TailwindCSS**: Write your styles using Tailwind classes right in your JSX files.
4. **Add Assets**: Put images, logos, and other static files in the `src/assets/` folder.

## License

This template is open-source and available under the [MIT License](LICENSE).

---

### Links:

- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://react.dev/)
- [Recoil Documentation](https://recoiljs.org/docs/introduction/getting-started)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Aceternity UI](https://ui.aceternity.com/)

