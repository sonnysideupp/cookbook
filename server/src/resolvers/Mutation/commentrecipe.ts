import { Context, getUserId } from "../../utils"
export default {
  commentRecipe: async (parent, args, ctx: Context, info) => {
    // const id = getUserId(ctx)
    return await ctx.db.mutation.updateRecipe(
      {
        data: {
          comments: {
            create: {
              text: args.text,
              author: {
                connect: {
                  id: "cjjrbowf7iacf0b295tx5zpfp"
                }
              }
            }
          }
        },
        where: {
          name: "Fried Rice"
        }
      },
      info
    )
  }
}
