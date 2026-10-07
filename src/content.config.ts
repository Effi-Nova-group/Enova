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

const caseStudies = defineCollection({
  loader: glob({ base: './src/content/case-studies', pattern: '**/*.md' }),
  // `image()` runs these through Astro's asset pipeline, so logos/heroes come
  // from src/assets instead of being hotlinked off the Webflow CDN. Both are
  // optional — some studies ship without art and fall back to a gradient.
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      client: z.string(),
      sector: z.string(),
      title: z.string(),
      subtitle: z.string(),
      logo: image().optional(),
      heroImage: image().optional(),
      stats: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
      featured: z.boolean().default(false),
      publishedAt: z.coerce.date(),
      metaTitle: z.string(),
      metaDescription: z.string(),
      ctaHeading: z.string(),
      ctaBody: z.string(),
    }),
});

export const collections = { blog, caseStudies };
