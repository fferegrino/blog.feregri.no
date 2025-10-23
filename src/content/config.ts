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
		language: z.string().optional().default('en'),
		tags: z.array(z.string()).optional(),
		original_url: z.string().optional(),
		youtube: z.string().optional(),
		priority: z.number().optional().default(0),
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
		priority: z.number().optional().default(0),
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
		priority: z.number().optional().default(0),
	}),
});

const gallery = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		thumbnail: z.string(),
		images: z.array(z.object({
			url: z.string(),
			customTransform: z.string().optional(),
			caption: z.string().optional(),
			alt: z.string().optional(),
		})),
		category: z.string().optional(),
		date: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val))
			.optional(),
		collection: z.string().optional(),
		defaultTransform: z.string().optional(),
		priority: z.number().optional().default(0),
	}),
});

export const collections = { blog, project, bookshelf, gallery };
