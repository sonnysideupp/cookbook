import { Context, getUserId } from "../utils"

export default {
  me: (parent, args, ctx: Context, info) => {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },
  recipes: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.recipes(
      {
        where: args.where
      },
      info
    )
  },
  allrecipes: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.recipes({})
  },
  ingredients: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.ingredients({ ...args }, info)
  },
  likes: async (parent, args, ctx: Context, info) => {
    return await ctx.db.query.likes({ ...args }, info)
  },
  recipe: async (parent, args, ctx: Context, info) => {
    return await ctx.db.query.recipes({ ...args }, info)
  }
}
