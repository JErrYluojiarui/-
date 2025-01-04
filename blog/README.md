# Next.js Blog

A modern blog built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 📝 Markdown support for blog posts
- 🎨 Responsive design with Tailwind CSS
- 🚀 Fast page loads with static generation
- 📱 Mobile-friendly layout
- 🔍 SEO optimized

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding Blog Posts

1. Create a new markdown file in the `posts` directory
2. Add frontmatter with title and date:
   ```markdown
   ---
   title: 'Your Title'
   date: 'YYYY-MM-DD'
   ---
   ```
3. Write your content in markdown format

## Deploying to Vercel

1. Push your code to a GitHub repository
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and deploy your site

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Gray Matter (for parsing markdown frontmatter)
- Marked (for markdown rendering)
