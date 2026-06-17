import { defineCollection, z } from 'astro:content';

const service = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    price: z.number(),
    priceCurrency: z.string(),
    unitText: z.string(),
    modules: z.array(z.string()),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    testimonials: z.array(z.object({
      name: z.string(),
      location: z.string(),
      quote: z.string(),
    })).optional(),
    publishDate: z.date().optional(),
    updatedDate: z.date().optional(),
  }),
});

export const collections = { service };