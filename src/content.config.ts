import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Case study gallery image. `full` spans the width at 3:2; `half` sits two-up, square.
const galleryItem = z.object({
  src: z.string(),
  alt: z.string(),
  layout: z.enum(['full', 'half']).default('full'),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    year: z.number(),
    summary: z.string(),
    // Project type shown in the case study meta strip, e.g. "E-commerce website"
    type: z.string().optional(),
    role: z.array(z.string()).default([]),
    cover: z.string().optional(),
    url: z.string().url().optional(),
    order: z.number().default(0),
    featured: z.boolean().default(false),
    // "What I did": a short paragraph and the deliverables list
    process: z.string().optional(),
    services: z.array(z.string()).default([]),
    // Blocks after the overview, and after "What I did"
    galleryTop: z.array(galleryItem).default([]),
    galleryBottom: z.array(galleryItem).default([]),
  }),
});

export const collections = { projects };
