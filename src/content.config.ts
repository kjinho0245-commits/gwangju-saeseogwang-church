import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const sermons = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/sermons" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    videoId: z.string(),
    scripture: z.string().optional(),
    summary: z.string().optional(),
    pastor: z.string().optional(),
  }),
});

const bulletins = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/bulletins" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string().optional(),
  }),
});

export const collections = { sermons, bulletins };
