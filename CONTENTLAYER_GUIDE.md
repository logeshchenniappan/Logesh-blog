# Contentlayer + MDX + Git Setup Guide

Your project now uses **Contentlayer** with **MDX** and **Git** for content management. This is a modern, performant approach perfect for blogs, portfolios, and documentation sites.

## What is This Setup?

- **Contentlayer**: Transforms your MDX/Markdown files into type-safe data
- **MDX**: Write Markdown with React components embedded
- **Git**: Your content lives in your repository with full version control

## Project Structure

```
.
├── data/
│   ├── blog/           # Blog posts (MDX files)
│   ├── snippets/       # Code snippets (MDX files)
│   └── projects.ts     # Projects data (JSON)
├── contentlayer.config.ts  # Contentlayer configuration
├── types/
│   └── data.ts         # TypeScript types for content
└── app/
    ├── blog/           # Blog pages
    ├── snippets/       # Snippets pages
    └── projects/       # Projects page
```

## Creating New Content

### 1. Create a Blog Post

Create a new `.mdx` file in `data/blog/`:

```mdx
---
title: "My Blog Post Title"
date: "2026-01-27"
tags: ["react", "nextjs"]
summary: "Brief description of your post"
draft: false
---

# Your content here

This is a blog post written in MDX...
```

**Fields:**
- `title` (required): Post title
- `date` (required): Publication date (YYYY-MM-DD)
- `tags` (optional): Array of tags for filtering
- `summary` (optional): Brief description
- `draft` (optional): Set to `true` to hide from listing
- `authors` (optional): Author information

### 2. Create a Code Snippet

Create a new `.mdx` file in `data/snippets/`:

```mdx
---
title: "Snippet Title"
description: "What this snippet does"
language: "typescript"
---

\`\`\`typescript
// Your code here
const example = () => {
  return "Hello"
}
\`\`\`
```

### 3. Add Projects

Edit `data/projects.ts`:

```typescript
export const projectsData = [
  {
    title: "Project Name",
    description: "What it does",
    href: "https://project-url.com",
    github: "https://github.com/user/repo",
    stack: ["React", "Next.js", "TypeScript"],
  },
]
```

## Markdown Features

Your content supports:

- **Markdown**: Standard markdown syntax
- **React Components**: Import and use React components
- **Code Highlighting**: Syntax highlighting with Shiki
- **Math**: LaTeX equations with `$...$` (inline) or `$$...$$` (block)
- **Citations**: Academic citations with `[@author2023]`
- **GitHub Alerts**: `> [!NOTE]`, `> [!WARNING]`, `> [!DANGER]`
- **Tables**: Standard markdown tables
- **Callouts**: Custom callout components

## Example MDX with Components

```mdx
---
title: "Using Components in MDX"
date: "2026-01-27"
---

import { Callout } from '@/components/mdx'

# My Post

<Callout type="info">
  This is a callout component embedded in MDX!
</Callout>

## Math Example

Inline math: $e = mc^2$

Block math:
$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

## Code Example

\`\`\`typescript title="example.ts"
const greet = (name: string) => {
  return \`Hello, \${name}!\`
}
\`\`\`
```

## Accessing Content in Your App

The content is automatically transformed into type-safe data. Import from `.contentlayer/generated`:

```typescript
import { allPosts, allSnippets } from ".contentlayer/generated"

export default function BlogPage() {
  return (
    <>
      {allPosts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.summary}</p>
          <p>{post.readingTime}</p>
        </div>
      ))}
    </>
  )
}
```

## Frontmatter Fields

### Blog Posts

```yaml
title: string         # Required
date: string         # Required (YYYY-MM-DD)
tags: string[]       # Optional
summary: string      # Optional
draft: boolean       # Optional (default: false)
authors: string[]    # Optional
lastmod: string      # Optional
```

### Snippets

```yaml
title: string        # Required
description: string  # Optional
language: string     # Optional (typescript, javascript, python, etc.)
```

## File Naming

Use kebab-case for filenames:
- `blog/my-first-post.mdx` ✅
- `snippets/react-hook-example.mdx` ✅
- `blog/myFirstPost.mdx` ❌

## Images in Content

Place images in `public/` and reference them in your MDX:

```mdx
![Alt text](/images/my-image.png)
```

Or use the custom Image component for optimization:

```mdx
import Image from "next/image"

<Image src="/images/my-image.png" alt="Description" width={800} height={400} />
```

## Git Workflow

Since your content is in Git:

```bash
# Create a new post
echo "---\ntitle: New Post\ndate: $(date +%Y-%m-%d)\n---" > data/blog/new-post.mdx

# Edit and save
# Stage changes
git add data/blog/new-post.mdx

# Commit
git commit -m "feat: add new blog post"

# Push
git push
```

## Building for Production

The content is generated at build time:

```bash
npm run build
```

This generates:
- `.contentlayer/` - Generated type definitions and data
- Static pages for your content
- Optimized bundle

## Development

While developing:

```bash
npm run dev
```

Changes to MDX files are automatically detected and regenerated.

## Troubleshooting

### Content not showing?

1. Check file is in correct directory (`data/blog/`, `data/snippets/`)
2. Verify frontmatter YAML is valid
3. Rebuild: `npm run build`

### Type errors in TypeScript?

Regenerate types:

```bash
npm run build
```

### Images not loading?

- Ensure image path starts with `/`
- Images must be in `public/` folder
- Example: `/images/my-image.png` refers to `public/images/my-image.png`

## Advanced: Customizing Document Types

Edit `contentlayer.config.ts` to customize:

- Document fields and validation
- Processing and transformations
- Computed fields (like `readingTime`, `slug`)
- Output formatting

## Resources

- [Contentlayer Documentation](https://contentlayer.dev)
- [MDX Documentation](https://mdxjs.com)
- [Next.js Pages to Dynamic Routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
- [Markdown Guide](https://www.markdownguide.org)

## Performance Benefits

✅ Content generated at build time (not runtime)
✅ Type-safe content in TypeScript
✅ Git versioning for all content
✅ No external CMS to manage
✅ Fast static site generation
✅ Full control over content structure

---

**Ready to create content?** Start by creating a new file in `data/blog/` and following the frontmatter format above!
