import { z, defineCollection } from "astro:content"

const footerCollection = defineCollection({

	schema: z.object({

		title: z.string(),
		bottom_title: z.string(),

		schema: z.object({

			title_one: z.string(),
			title_two: z.string(),
			title_three: z.string(),
			contact_info: z.array(

				z.object({
					order: z.number(),
					sub_title: z.string(),
					title: z.string(),
				})

			).optional(),

			social_links: z.array(

				z.object({
					alternative_text: z.string(),
					link: z.string(),
					source: z.string(),
				})

			).optional(),

		}),

	})

})

export const collections = {

	"footer": footerCollection,

}
