// import { Context, getUserId, getLikeId } from "../../utils"
// export default {
//   unlikerecipe: async (parent, args, ctx: Context, info) => {
//     const id = getUserId(ctx)
//     const like = await getLikeId(args.name, ctx, info)
//     const likeid = like[0].id
//     return await ctx.db.mutation.deleteLike(
//       {
//         where: {
//           id: likeid
//         }
//       },
//       info
//     )
//   }
// }
