import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({
    pattern: '*/index.md',
    base: './src/content/news',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      author: z.string().default('Vicki Quellhorst'),
      cover: image(),
      coverAlt: z.string(),
      summary: z.string(),
    }),
});

export const collections = { news };
