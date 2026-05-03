import { defineCollection, z } from 'astro:content';

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    time: z.string(),
    venue: z.string(),
    image: z.string(),
    summary: z.string(),
    ticketUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    status: z.enum(['upcoming', 'past']).default('upcoming'),
  }),
});

const merch = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    price: z.string(),
    image: z.string(),
    summary: z.string(),
    stripeUrl: z.string().url().optional(),
    available: z.boolean().default(true),
  }),
});

const stories = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    quote: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = { events, merch, stories };
