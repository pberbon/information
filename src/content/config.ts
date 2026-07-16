import { defineCollection, z } from 'astro:content';

// Every "feed" tab on this site works the same way: it's a single running
// log, newest entries first. To add to any of them, create a new .md file
// in its content folder — date it, write your text as the body, and
// optionally attach a PDF or a star rating.
const feedEntry = z.object({
  date: z.coerce.date(),
  title: z.string().optional(),
  rating: z.number().min(0).max(5).optional(), // used by Matcha Analytics and Recent Books
  pdfFile: z.string().optional(),
});

const weeklySummary = defineCollection({ type: 'content', schema: feedEntry });
const matchaAnalytics = defineCollection({ type: 'content', schema: feedEntry });
const insights = defineCollection({ type: 'content', schema: feedEntry });
const recentBooks = defineCollection({ type: 'content', schema: feedEntry });

export const collections = { weeklySummary, matchaAnalytics, insights, recentBooks };
