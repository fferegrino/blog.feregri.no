import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		publishDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(),
	}),
});

const project = defineCollection({
	schema: z.object({
		title: z.string(),
		iconUrl: z.string().optional(),
		darkIconUrl: z.string().optional(),
		description: z.string(),
		repoUrl: z.string().optional(),
		websiteUrl: z.string().optional(),
		active: z.boolean().optional().default(false),
		highlight: z.boolean().optional().default(false),
		heroImage: z.string().optional(),
	}),
});

const bookshelf = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		rating: z.number().min(0).max(5),
		author: z.string(),
		category: z.string(),
		isbn: z.string().optional(),
		links: z.array(z.object({ url: z.string(), text: z.string() })).optional(),
		recommended: z.boolean().optional().default(false),
	}),
});

export const collections = { blog, project, bookshelf };
