import { defineCollection, z } from 'astro:content';

// ---- BLOG ----
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().default('General'),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// ---- RESEARCH PAPERS ----
// To add a paper: 1) drop the PDF in /public/papers/  2) add a .md file here
// with `pdfFile` matching the filename. Everything else (pages, buttons,
// search, related content) is generated automatically.
const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default('Your Name'),
    pubDate: z.coerce.date(),
    category: z.string().default('Research'),
    keywords: z.array(z.string()).default([]),
    pdfFile: z.string(), // filename only, must exist in /public/papers/
    citation: z.string().optional(),
  }),
});

// ---- PROJECTS ----
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()).default([]),
    image: z.string().optional(),
    github: z.string().url().optional(),
    externalLink: z.string().url().optional(),
    status: z.enum(['In Progress', 'Completed', 'Archived']).default('In Progress'),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

// ---- READING LIST ----
const books = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    rating: z.number().min(0).max(5),
    status: z.enum(['Reading', 'Finished', 'Want to Read']),
    review: z.string().optional(),
    cover: z.string().optional(),
    categories: z.array(z.string()).default([]),
  }),
});

// ---- RESOURCES ----
const resources = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    description: z.string(),
    type: z.enum(['Paper', 'Website', 'Video', 'Course', 'Software', 'Book']),
    category: z.string().default('General'),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, research, projects, books, resources };
