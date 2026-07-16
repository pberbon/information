import { defineCollection, z } from 'astro:content';

// Every tab on this site works the same way: it's a single running feed,
// newest entries first. To add to any tab, just create a new .md file in
// its content folder — date it, write your text as the body, and
// optionally attach a PDF (drop the PDF in that tab's public/ folder and
// reference the filename in `pdfFile`). No separate page per entry.
const feedEntry = z.object({
  date: z.coerce.date(),
  title: z.string().optional(),
  pdfFile: z.string().optional(),
});

const blog = defineCollection({ type: 'content', schema: feedEntry });
const research = defineCollection({ type: 'content', schema: feedEntry });
const projects = defineCollection({ type: 'content', schema: feedEntry });
const books = defineCollection({ type: 'content', schema: feedEntry });
const resources = defineCollection({ type: 'content', schema: feedEntry });
const insights = defineCollection({ type: 'content', schema: feedEntry });

export const collections = { blog, research, projects, books, resources, insights };
