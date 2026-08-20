import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    image: z.string(),
    readTime: z.string().default('6 min read'),
    author: z.string().default('Enova'),
    ctaTitle: z.string(),
    ctaText: z.string(),
    order: z.number(),
  }),
});

export const collections = { blog };
