# Developer Portfolio Template

A modern, dark-themed developer portfolio website built with React, TypeScript, and TailwindCSS featuring animations, responsive design, and GitHub integration.

![Portfolio Preview](preview.png)

## Features

- **Beautiful Dark Theme** with smooth animations
- **Responsive Design** that works on all devices
- **Interactive UI Elements** using Framer Motion
- **Modular Component Architecture** for easy customization
- **GitHub Integration** to showcase your repositories
- **Contact Form** for potential clients or employers to reach you
- **Skills Showcase** to highlight your technical abilities
- **Projects Section** to display your work
- **CV Download** functionality

## Table of Contents

- [Installation](#installation)
- [Local Development](#local-development)
- [Customization](#customization)
- [Deployment](#deployment)
  - [Deploying to GitHub Pages](#deploying-to-github-pages)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with this portfolio template, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/yourusername/developer-portfolio.git
cd developer-portfolio
```

2. Install dependencies:

```bash
npm install
```

## Local Development

To run the project locally:

```bash
npm run dev
```

This will start a development server at `http://localhost:5000`. The site will automatically reload if you make changes to the code.

## Customization

This portfolio is designed to be easily customizable. Here are the key files you'll need to edit:

- `/client/src/data/portfolio-data.ts` - Contains your personal information
- `/client/src/lib/ProjectData.ts` - Define your projects here
- `/attached_assets` - Add your images and assets here
- `/client/index.html` - Change the title and metadata
- `/client/src/components/sections` - Modify individual sections as needed

## Deployment

### Deploying to GitHub Pages

To deploy your portfolio to GitHub Pages, follow these steps:

1. Update your repository settings:

   - Go to your GitHub repository
   - Navigate to "Settings" > "Pages"
   - Set the "Source" to "GitHub Actions"

2. Add a GitHub Actions workflow file to your project:

```bash
mkdir -p .github/workflows
```

3. Create a file called `.github/workflows/deploy.yml` with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
```

4. Update your `vite.config.ts` file to include the base path for GitHub Pages:

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/repository-name/', // Replace with your repository name
});
```

5. Add a build script to your `package.json`:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "preview": "vite preview"
}
```

6. Commit and push the changes to your repository:

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push
```

After pushing, GitHub Actions will automatically build and deploy your site. You can check the progress in the "Actions" tab of your repository.

## Project Structure

```
developer-portfolio/
├── client/
│   ├── public/           # Static assets
│   ├── src/
│   │   ├── components/   # React components
│   │   │   ├── common/   # Shared components
│   │   │   ├── sections/ # Page sections
│   │   │   ├── ui/       # UI components
│   │   │   └── navigation/ # Navigation components
│   │   ├── data/         # Portfolio data
│   │   ├── hooks/        # Custom hooks
│   │   ├── lib/          # Utilities and helpers
│   │   ├── pages/        # Page components
│   │   ├── App.tsx       # Main app component
│   │   └── main.tsx      # Entry point
│   └── index.html        # HTML template
├── server/               # Server-side code
├── shared/               # Shared types and schemas
├── package.json          # Project dependencies
└── tsconfig.json         # TypeScript configuration
```

## Technologies Used

- **Frontend**:
  - React
  - TypeScript
  - TailwindCSS
  - Framer Motion
  - Vite
  - React Query
  - Wouter (routing)

- **Backend**:
  - Express
  - Node.js

## License

This project is licensed under the MIT License - see the LICENSE file for details.