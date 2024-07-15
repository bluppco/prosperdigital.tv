import { z, defineCollection } from "astro:content"

const footerCollection = defineCollection({

	schema: z.object({

		title: z.string(),
		bottom: z.string(),
		items: z.array(

			z.object({

                order: z.number(),
                sub_title: z.string(),
				title: z.string(),

			})

		).optional(),

	})

})

export const collections = {

	"footer": footerCollection

}
