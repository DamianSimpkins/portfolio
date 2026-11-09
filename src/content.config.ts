import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Case study gallery image, shown at its own proportions. `full` spans the width; `half` sits
// two-up; `third` sits three in a row.
const galleryImage = z.object({
  src: z.string(),
  alt: z.string(),
  // Optional line shown under the image
  caption: z.string().optional(),
  layout: z.enum(['full', 'half', 'third']).default('full'),
  // Shows the image in a plain white phone frame (for mobile screenshots)
  frame: z.enum(['phone']).optional(),
  // `src` is an interactive HTML page, shown live in a frame instead of as a picture (`alt` titles it)
  embed: z.boolean().optional(),
  // Overrides the frame height (rem) at every screen width
  embedHeight: z.number().optional(),
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
    // Unfinished: left out of the site entirely (home list, case study page and next-project links)
    draft: z.boolean().default(false),
    // Deliverables list, shown under the overview
    services: z.array(z.string()).default([]),
    // Text sections after the first gallery, each with its own label (e.g. "What I did", "Outcome")
    sections: z
      .array(
        z.object({
          label: z.string(),
          text: z.string(),
          // Set to place the section inside the second gallery, before the image at this position
          // (counting from 0), instead of between the two galleries
          before: z.number().optional(),
        }),
      )
      .default([]),
    // Page background for this project's case study, e.g. "#EBF8FE"
    background: z.string().optional(),
    // Colour behind rows of two or more images, e.g. "#EBEFF7"; defaults to a faint tint of the page
    panel: z.string().optional(),
    // Blocks after the overview, and after "What I did"
    galleryTop: z.array(galleryImage).default([]),
    galleryBottom: z.array(galleryImage).default([]),
  }),
});

export const collections = { projects };
