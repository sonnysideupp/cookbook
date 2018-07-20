import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    recipes: <T = Recipe[]>(args: { where?: RecipeWhereInput, orderBy?: RecipeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    likes: <T = Like[]>(args: { where?: LikeWhereInput, orderBy?: LikeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    comments: <T = Comment[]>(args: { where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    equipments: <T = Equipment[]>(args: { where?: EquipmentWhereInput, orderBy?: EquipmentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    ingredients: <T = Ingredient[]>(args: { where?: IngredientWhereInput, orderBy?: IngredientOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    recipe: <T = Recipe | null>(args: { where: RecipeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    like: <T = Like | null>(args: { where: LikeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    equipment: <T = Equipment | null>(args: { where: EquipmentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    ingredient: <T = Ingredient | null>(args: { where: IngredientWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    recipesConnection: <T = RecipeConnection>(args: { where?: RecipeWhereInput, orderBy?: RecipeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    likesConnection: <T = LikeConnection>(args: { where?: LikeWhereInput, orderBy?: LikeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    commentsConnection: <T = CommentConnection>(args: { where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    equipmentsConnection: <T = EquipmentConnection>(args: { where?: EquipmentWhereInput, orderBy?: EquipmentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    ingredientsConnection: <T = IngredientConnection>(args: { where?: IngredientWhereInput, orderBy?: IngredientOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createRecipe: <T = Recipe>(args: { data: RecipeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLike: <T = Like>(args: { data: LikeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createComment: <T = Comment>(args: { data: CommentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createEquipment: <T = Equipment>(args: { data: EquipmentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createIngredient: <T = Ingredient>(args: { data: IngredientCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateRecipe: <T = Recipe | null>(args: { data: RecipeUpdateInput, where: RecipeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLike: <T = Like | null>(args: { data: LikeUpdateInput, where: LikeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateEquipment: <T = Equipment | null>(args: { data: EquipmentUpdateInput, where: EquipmentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateIngredient: <T = Ingredient | null>(args: { data: IngredientUpdateInput, where: IngredientWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteRecipe: <T = Recipe | null>(args: { where: RecipeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLike: <T = Like | null>(args: { where: LikeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteEquipment: <T = Equipment | null>(args: { where: EquipmentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteIngredient: <T = Ingredient | null>(args: { where: IngredientWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertRecipe: <T = Recipe>(args: { where: RecipeWhereUniqueInput, create: RecipeCreateInput, update: RecipeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLike: <T = Like>(args: { where: LikeWhereUniqueInput, create: LikeCreateInput, update: LikeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertEquipment: <T = Equipment>(args: { where: EquipmentWhereUniqueInput, create: EquipmentCreateInput, update: EquipmentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertIngredient: <T = Ingredient>(args: { where: IngredientWhereUniqueInput, create: IngredientCreateInput, update: IngredientUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyRecipes: <T = BatchPayload>(args: { data: RecipeUpdateInput, where?: RecipeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLikes: <T = BatchPayload>(args: { data: LikeUpdateInput, where?: LikeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyComments: <T = BatchPayload>(args: { data: CommentUpdateInput, where?: CommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyEquipments: <T = BatchPayload>(args: { data: EquipmentUpdateInput, where?: EquipmentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyIngredients: <T = BatchPayload>(args: { data: IngredientUpdateInput, where?: IngredientWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyRecipes: <T = BatchPayload>(args: { where?: RecipeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLikes: <T = BatchPayload>(args: { where?: LikeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyComments: <T = BatchPayload>(args: { where?: CommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyEquipments: <T = BatchPayload>(args: { where?: EquipmentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyIngredients: <T = BatchPayload>(args: { where?: IngredientWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    recipe: <T = RecipeSubscriptionPayload | null>(args: { where?: RecipeSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    like: <T = LikeSubscriptionPayload | null>(args: { where?: LikeSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    comment: <T = CommentSubscriptionPayload | null>(args: { where?: CommentSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    equipment: <T = EquipmentSubscriptionPayload | null>(args: { where?: EquipmentSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    ingredient: <T = IngredientSubscriptionPayload | null>(args: { where?: IngredientSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Recipe: (where?: RecipeWhereInput) => Promise<boolean>
  Like: (where?: LikeWhereInput) => Promise<boolean>
  Comment: (where?: CommentWhereInput) => Promise<boolean>
  Equipment: (where?: EquipmentWhereInput) => Promise<boolean>
  Ingredient: (where?: IngredientWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateComment {
  count: Int!
}

type AggregateEquipment {
  count: Int!
}

type AggregateIngredient {
  count: Int!
}

type AggregateLike {
  count: Int!
}

type AggregateRecipe {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Comment {
  text: String!
  author(where: UserWhereInput): User!
  recipe(where: RecipeWhereInput): Recipe!
}

"""A connection to a list of items."""
type CommentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CommentEdge]!
  aggregate: AggregateComment!
}

input CommentCreateInput {
  text: String!
  author: UserCreateOneWithoutCommentsInput!
  recipe: RecipeCreateOneWithoutCommentsInput!
}

input CommentCreateManyWithoutAuthorInput {
  create: [CommentCreateWithoutAuthorInput!]
}

input CommentCreateManyWithoutRecipeInput {
  create: [CommentCreateWithoutRecipeInput!]
}

input CommentCreateWithoutAuthorInput {
  text: String!
  recipe: RecipeCreateOneWithoutCommentsInput!
}

input CommentCreateWithoutRecipeInput {
  text: String!
  author: UserCreateOneWithoutCommentsInput!
}

"""An edge in a connection."""
type CommentEdge {
  """The item at the end of the edge."""
  node: Comment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CommentOrderByInput {
  text_ASC
  text_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CommentPreviousValues {
  text: String!
}

type CommentSubscriptionPayload {
  mutation: MutationType!
  node: Comment
  updatedFields: [String!]
  previousValues: CommentPreviousValues
}

input CommentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CommentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CommentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CommentSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CommentWhereInput
}

input CommentUpdateInput {
  text: String
  author: UserUpdateOneWithoutCommentsInput
  recipe: RecipeUpdateOneWithoutCommentsInput
}

input CommentUpdateManyWithoutAuthorInput {
  create: [CommentCreateWithoutAuthorInput!]
}

input CommentUpdateManyWithoutRecipeInput {
  create: [CommentCreateWithoutRecipeInput!]
}

input CommentWhereInput {
  """Logical AND on all given filters."""
  AND: [CommentWhereInput!]

  """Logical OR on all given filters."""
  OR: [CommentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CommentWhereInput!]
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  author: UserWhereInput
  recipe: RecipeWhereInput
}

type Equipment implements Node {
  id: ID!
  name: String!
}

"""A connection to a list of items."""
type EquipmentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [EquipmentEdge]!
  aggregate: AggregateEquipment!
}

input EquipmentCreateInput {
  name: String!
}

input EquipmentCreateManyInput {
  create: [EquipmentCreateInput!]
  connect: [EquipmentWhereUniqueInput!]
}

"""An edge in a connection."""
type EquipmentEdge {
  """The item at the end of the edge."""
  node: Equipment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum EquipmentOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type EquipmentPreviousValues {
  id: ID!
  name: String!
}

type EquipmentSubscriptionPayload {
  mutation: MutationType!
  node: Equipment
  updatedFields: [String!]
  previousValues: EquipmentPreviousValues
}

input EquipmentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [EquipmentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [EquipmentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EquipmentSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: EquipmentWhereInput
}

input EquipmentUpdateDataInput {
  name: String
}

input EquipmentUpdateInput {
  name: String
}

input EquipmentUpdateManyInput {
  create: [EquipmentCreateInput!]
  connect: [EquipmentWhereUniqueInput!]
  disconnect: [EquipmentWhereUniqueInput!]
  delete: [EquipmentWhereUniqueInput!]
  update: [EquipmentUpdateWithWhereUniqueNestedInput!]
  upsert: [EquipmentUpsertWithWhereUniqueNestedInput!]
}

input EquipmentUpdateWithWhereUniqueNestedInput {
  where: EquipmentWhereUniqueInput!
  data: EquipmentUpdateDataInput!
}

input EquipmentUpsertWithWhereUniqueNestedInput {
  where: EquipmentWhereUniqueInput!
  update: EquipmentUpdateDataInput!
  create: EquipmentCreateInput!
}

input EquipmentWhereInput {
  """Logical AND on all given filters."""
  AND: [EquipmentWhereInput!]

  """Logical OR on all given filters."""
  OR: [EquipmentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EquipmentWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  _MagicalBackRelation_EquipmentToRecipe_every: RecipeWhereInput
  _MagicalBackRelation_EquipmentToRecipe_some: RecipeWhereInput
  _MagicalBackRelation_EquipmentToRecipe_none: RecipeWhereInput
}

input EquipmentWhereUniqueInput {
  id: ID
  name: String
}

type Ingredient implements Node {
  id: ID!
  name: String!
  price: Float!
}

"""A connection to a list of items."""
type IngredientConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [IngredientEdge]!
  aggregate: AggregateIngredient!
}

input IngredientCreateInput {
  name: String!
  price: Float!
}

input IngredientCreateManyInput {
  create: [IngredientCreateInput!]
  connect: [IngredientWhereUniqueInput!]
}

"""An edge in a connection."""
type IngredientEdge {
  """The item at the end of the edge."""
  node: Ingredient!

  """A cursor for use in pagination."""
  cursor: String!
}

enum IngredientOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  price_ASC
  price_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type IngredientPreviousValues {
  id: ID!
  name: String!
  price: Float!
}

type IngredientSubscriptionPayload {
  mutation: MutationType!
  node: Ingredient
  updatedFields: [String!]
  previousValues: IngredientPreviousValues
}

input IngredientSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [IngredientSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [IngredientSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [IngredientSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: IngredientWhereInput
}

input IngredientUpdateDataInput {
  name: String
  price: Float
}

input IngredientUpdateInput {
  name: String
  price: Float
}

input IngredientUpdateManyInput {
  create: [IngredientCreateInput!]
  connect: [IngredientWhereUniqueInput!]
  disconnect: [IngredientWhereUniqueInput!]
  delete: [IngredientWhereUniqueInput!]
  update: [IngredientUpdateWithWhereUniqueNestedInput!]
  upsert: [IngredientUpsertWithWhereUniqueNestedInput!]
}

input IngredientUpdateWithWhereUniqueNestedInput {
  where: IngredientWhereUniqueInput!
  data: IngredientUpdateDataInput!
}

input IngredientUpsertWithWhereUniqueNestedInput {
  where: IngredientWhereUniqueInput!
  update: IngredientUpdateDataInput!
  create: IngredientCreateInput!
}

input IngredientWhereInput {
  """Logical AND on all given filters."""
  AND: [IngredientWhereInput!]

  """Logical OR on all given filters."""
  OR: [IngredientWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [IngredientWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  price: Float

  """All values that are not equal to given value."""
  price_not: Float

  """All values that are contained in given list."""
  price_in: [Float!]

  """All values that are not contained in given list."""
  price_not_in: [Float!]

  """All values less than the given value."""
  price_lt: Float

  """All values less than or equal the given value."""
  price_lte: Float

  """All values greater than the given value."""
  price_gt: Float

  """All values greater than or equal the given value."""
  price_gte: Float
  _MagicalBackRelation_IngredientToRecipe_every: RecipeWhereInput
  _MagicalBackRelation_IngredientToRecipe_some: RecipeWhereInput
  _MagicalBackRelation_IngredientToRecipe_none: RecipeWhereInput
}

input IngredientWhereUniqueInput {
  id: ID
  name: String
}

type Like implements Node {
  id: ID!
  author(where: UserWhereInput): User!
  recipe(where: RecipeWhereInput): Recipe!
}

"""A connection to a list of items."""
type LikeConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LikeEdge]!
  aggregate: AggregateLike!
}

input LikeCreateInput {
  author: UserCreateOneWithoutLikesInput!
  recipe: RecipeCreateOneWithoutLikesInput!
}

input LikeCreateManyWithoutAuthorInput {
  create: [LikeCreateWithoutAuthorInput!]
  connect: [LikeWhereUniqueInput!]
}

input LikeCreateManyWithoutRecipeInput {
  create: [LikeCreateWithoutRecipeInput!]
  connect: [LikeWhereUniqueInput!]
}

input LikeCreateWithoutAuthorInput {
  recipe: RecipeCreateOneWithoutLikesInput!
}

input LikeCreateWithoutRecipeInput {
  author: UserCreateOneWithoutLikesInput!
}

"""An edge in a connection."""
type LikeEdge {
  """The item at the end of the edge."""
  node: Like!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LikeOrderByInput {
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type LikePreviousValues {
  id: ID!
}

type LikeSubscriptionPayload {
  mutation: MutationType!
  node: Like
  updatedFields: [String!]
  previousValues: LikePreviousValues
}

input LikeSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LikeSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LikeSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LikeSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LikeWhereInput
}

input LikeUpdateInput {
  author: UserUpdateOneWithoutLikesInput
  recipe: RecipeUpdateOneWithoutLikesInput
}

input LikeUpdateManyWithoutAuthorInput {
  create: [LikeCreateWithoutAuthorInput!]
  connect: [LikeWhereUniqueInput!]
  disconnect: [LikeWhereUniqueInput!]
  delete: [LikeWhereUniqueInput!]
  update: [LikeUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [LikeUpsertWithWhereUniqueWithoutAuthorInput!]
}

input LikeUpdateManyWithoutRecipeInput {
  create: [LikeCreateWithoutRecipeInput!]
  connect: [LikeWhereUniqueInput!]
  disconnect: [LikeWhereUniqueInput!]
  delete: [LikeWhereUniqueInput!]
  update: [LikeUpdateWithWhereUniqueWithoutRecipeInput!]
  upsert: [LikeUpsertWithWhereUniqueWithoutRecipeInput!]
}

input LikeUpdateWithoutAuthorDataInput {
  recipe: RecipeUpdateOneWithoutLikesInput
}

input LikeUpdateWithoutRecipeDataInput {
  author: UserUpdateOneWithoutLikesInput
}

input LikeUpdateWithWhereUniqueWithoutAuthorInput {
  where: LikeWhereUniqueInput!
  data: LikeUpdateWithoutAuthorDataInput!
}

input LikeUpdateWithWhereUniqueWithoutRecipeInput {
  where: LikeWhereUniqueInput!
  data: LikeUpdateWithoutRecipeDataInput!
}

input LikeUpsertWithWhereUniqueWithoutAuthorInput {
  where: LikeWhereUniqueInput!
  update: LikeUpdateWithoutAuthorDataInput!
  create: LikeCreateWithoutAuthorInput!
}

input LikeUpsertWithWhereUniqueWithoutRecipeInput {
  where: LikeWhereUniqueInput!
  update: LikeUpdateWithoutRecipeDataInput!
  create: LikeCreateWithoutRecipeInput!
}

input LikeWhereInput {
  """Logical AND on all given filters."""
  AND: [LikeWhereInput!]

  """Logical OR on all given filters."""
  OR: [LikeWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LikeWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  author: UserWhereInput
  recipe: RecipeWhereInput
}

input LikeWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createRecipe(data: RecipeCreateInput!): Recipe!
  createLike(data: LikeCreateInput!): Like!
  createComment(data: CommentCreateInput!): Comment!
  createEquipment(data: EquipmentCreateInput!): Equipment!
  createIngredient(data: IngredientCreateInput!): Ingredient!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateRecipe(data: RecipeUpdateInput!, where: RecipeWhereUniqueInput!): Recipe
  updateLike(data: LikeUpdateInput!, where: LikeWhereUniqueInput!): Like
  updateEquipment(data: EquipmentUpdateInput!, where: EquipmentWhereUniqueInput!): Equipment
  updateIngredient(data: IngredientUpdateInput!, where: IngredientWhereUniqueInput!): Ingredient
  deleteUser(where: UserWhereUniqueInput!): User
  deleteRecipe(where: RecipeWhereUniqueInput!): Recipe
  deleteLike(where: LikeWhereUniqueInput!): Like
  deleteEquipment(where: EquipmentWhereUniqueInput!): Equipment
  deleteIngredient(where: IngredientWhereUniqueInput!): Ingredient
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertRecipe(where: RecipeWhereUniqueInput!, create: RecipeCreateInput!, update: RecipeUpdateInput!): Recipe!
  upsertLike(where: LikeWhereUniqueInput!, create: LikeCreateInput!, update: LikeUpdateInput!): Like!
  upsertEquipment(where: EquipmentWhereUniqueInput!, create: EquipmentCreateInput!, update: EquipmentUpdateInput!): Equipment!
  upsertIngredient(where: IngredientWhereUniqueInput!, create: IngredientCreateInput!, update: IngredientUpdateInput!): Ingredient!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyRecipes(data: RecipeUpdateInput!, where: RecipeWhereInput): BatchPayload!
  updateManyLikes(data: LikeUpdateInput!, where: LikeWhereInput): BatchPayload!
  updateManyComments(data: CommentUpdateInput!, where: CommentWhereInput): BatchPayload!
  updateManyEquipments(data: EquipmentUpdateInput!, where: EquipmentWhereInput): BatchPayload!
  updateManyIngredients(data: IngredientUpdateInput!, where: IngredientWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyRecipes(where: RecipeWhereInput): BatchPayload!
  deleteManyLikes(where: LikeWhereInput): BatchPayload!
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  deleteManyEquipments(where: EquipmentWhereInput): BatchPayload!
  deleteManyIngredients(where: IngredientWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  recipes(where: RecipeWhereInput, orderBy: RecipeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Recipe]!
  likes(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Like]!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  equipments(where: EquipmentWhereInput, orderBy: EquipmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Equipment]!
  ingredients(where: IngredientWhereInput, orderBy: IngredientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Ingredient]!
  user(where: UserWhereUniqueInput!): User
  recipe(where: RecipeWhereUniqueInput!): Recipe
  like(where: LikeWhereUniqueInput!): Like
  equipment(where: EquipmentWhereUniqueInput!): Equipment
  ingredient(where: IngredientWhereUniqueInput!): Ingredient
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  recipesConnection(where: RecipeWhereInput, orderBy: RecipeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RecipeConnection!
  likesConnection(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LikeConnection!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  equipmentsConnection(where: EquipmentWhereInput, orderBy: EquipmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EquipmentConnection!
  ingredientsConnection(where: IngredientWhereInput, orderBy: IngredientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): IngredientConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Recipe implements Node {
  id: ID!
  name: String!
  description: String!
  ingredients(where: IngredientWhereInput, orderBy: IngredientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Ingredient!]
  creator(where: UserWhereInput): User!
  process: String!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  likes(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Like!]
  pictureUrl: String
  price: Float!
  nutrition: String!
  category: String!
  equipments(where: EquipmentWhereInput, orderBy: EquipmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Equipment!]
}

"""A connection to a list of items."""
type RecipeConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [RecipeEdge]!
  aggregate: AggregateRecipe!
}

input RecipeCreateInput {
  name: String!
  description: String!
  process: String!
  pictureUrl: String
  price: Float!
  nutrition: String!
  category: String!
  ingredients: IngredientCreateManyInput
  creator: UserCreateOneWithoutRecipesInput!
  comments: CommentCreateManyWithoutRecipeInput
  likes: LikeCreateManyWithoutRecipeInput
  equipments: EquipmentCreateManyInput
}

input RecipeCreateManyWithoutCreatorInput {
  create: [RecipeCreateWithoutCreatorInput!]
  connect: [RecipeWhereUniqueInput!]
}

input RecipeCreateOneWithoutCommentsInput {
  create: RecipeCreateWithoutCommentsInput
  connect: RecipeWhereUniqueInput
}

input RecipeCreateOneWithoutLikesInput {
  create: RecipeCreateWithoutLikesInput
  connect: RecipeWhereUniqueInput
}

input RecipeCreateWithoutCommentsInput {
  name: String!
  description: String!
  process: String!
  pictureUrl: String
  price: Float!
  nutrition: String!
  category: String!
  ingredients: IngredientCreateManyInput
  creator: UserCreateOneWithoutRecipesInput!
  likes: LikeCreateManyWithoutRecipeInput
  equipments: EquipmentCreateManyInput
}

input RecipeCreateWithoutCreatorInput {
  name: String!
  description: String!
  process: String!
  pictureUrl: String
  price: Float!
  nutrition: String!
  category: String!
  ingredients: IngredientCreateManyInput
  comments: CommentCreateManyWithoutRecipeInput
  likes: LikeCreateManyWithoutRecipeInput
  equipments: EquipmentCreateManyInput
}

input RecipeCreateWithoutLikesInput {
  name: String!
  description: String!
  process: String!
  pictureUrl: String
  price: Float!
  nutrition: String!
  category: String!
  ingredients: IngredientCreateManyInput
  creator: UserCreateOneWithoutRecipesInput!
  comments: CommentCreateManyWithoutRecipeInput
  equipments: EquipmentCreateManyInput
}

"""An edge in a connection."""
type RecipeEdge {
  """The item at the end of the edge."""
  node: Recipe!

  """A cursor for use in pagination."""
  cursor: String!
}

enum RecipeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  process_ASC
  process_DESC
  pictureUrl_ASC
  pictureUrl_DESC
  price_ASC
  price_DESC
  nutrition_ASC
  nutrition_DESC
  category_ASC
  category_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type RecipePreviousValues {
  id: ID!
  name: String!
  description: String!
  process: String!
  pictureUrl: String
  price: Float!
  nutrition: String!
  category: String!
}

type RecipeSubscriptionPayload {
  mutation: MutationType!
  node: Recipe
  updatedFields: [String!]
  previousValues: RecipePreviousValues
}

input RecipeSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [RecipeSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RecipeSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RecipeSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: RecipeWhereInput
}

input RecipeUpdateInput {
  name: String
  description: String
  process: String
  pictureUrl: String
  price: Float
  nutrition: String
  category: String
  ingredients: IngredientUpdateManyInput
  creator: UserUpdateOneWithoutRecipesInput
  comments: CommentUpdateManyWithoutRecipeInput
  likes: LikeUpdateManyWithoutRecipeInput
  equipments: EquipmentUpdateManyInput
}

input RecipeUpdateManyWithoutCreatorInput {
  create: [RecipeCreateWithoutCreatorInput!]
  connect: [RecipeWhereUniqueInput!]
  disconnect: [RecipeWhereUniqueInput!]
  delete: [RecipeWhereUniqueInput!]
  update: [RecipeUpdateWithWhereUniqueWithoutCreatorInput!]
  upsert: [RecipeUpsertWithWhereUniqueWithoutCreatorInput!]
}

input RecipeUpdateOneWithoutCommentsInput {
  create: RecipeCreateWithoutCommentsInput
  connect: RecipeWhereUniqueInput
  delete: Boolean
  update: RecipeUpdateWithoutCommentsDataInput
  upsert: RecipeUpsertWithoutCommentsInput
}

input RecipeUpdateOneWithoutLikesInput {
  create: RecipeCreateWithoutLikesInput
  connect: RecipeWhereUniqueInput
  delete: Boolean
  update: RecipeUpdateWithoutLikesDataInput
  upsert: RecipeUpsertWithoutLikesInput
}

input RecipeUpdateWithoutCommentsDataInput {
  name: String
  description: String
  process: String
  pictureUrl: String
  price: Float
  nutrition: String
  category: String
  ingredients: IngredientUpdateManyInput
  creator: UserUpdateOneWithoutRecipesInput
  likes: LikeUpdateManyWithoutRecipeInput
  equipments: EquipmentUpdateManyInput
}

input RecipeUpdateWithoutCreatorDataInput {
  name: String
  description: String
  process: String
  pictureUrl: String
  price: Float
  nutrition: String
  category: String
  ingredients: IngredientUpdateManyInput
  comments: CommentUpdateManyWithoutRecipeInput
  likes: LikeUpdateManyWithoutRecipeInput
  equipments: EquipmentUpdateManyInput
}

input RecipeUpdateWithoutLikesDataInput {
  name: String
  description: String
  process: String
  pictureUrl: String
  price: Float
  nutrition: String
  category: String
  ingredients: IngredientUpdateManyInput
  creator: UserUpdateOneWithoutRecipesInput
  comments: CommentUpdateManyWithoutRecipeInput
  equipments: EquipmentUpdateManyInput
}

input RecipeUpdateWithWhereUniqueWithoutCreatorInput {
  where: RecipeWhereUniqueInput!
  data: RecipeUpdateWithoutCreatorDataInput!
}

input RecipeUpsertWithoutCommentsInput {
  update: RecipeUpdateWithoutCommentsDataInput!
  create: RecipeCreateWithoutCommentsInput!
}

input RecipeUpsertWithoutLikesInput {
  update: RecipeUpdateWithoutLikesDataInput!
  create: RecipeCreateWithoutLikesInput!
}

input RecipeUpsertWithWhereUniqueWithoutCreatorInput {
  where: RecipeWhereUniqueInput!
  update: RecipeUpdateWithoutCreatorDataInput!
  create: RecipeCreateWithoutCreatorInput!
}

input RecipeWhereInput {
  """Logical AND on all given filters."""
  AND: [RecipeWhereInput!]

  """Logical OR on all given filters."""
  OR: [RecipeWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RecipeWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  process: String

  """All values that are not equal to given value."""
  process_not: String

  """All values that are contained in given list."""
  process_in: [String!]

  """All values that are not contained in given list."""
  process_not_in: [String!]

  """All values less than the given value."""
  process_lt: String

  """All values less than or equal the given value."""
  process_lte: String

  """All values greater than the given value."""
  process_gt: String

  """All values greater than or equal the given value."""
  process_gte: String

  """All values containing the given string."""
  process_contains: String

  """All values not containing the given string."""
  process_not_contains: String

  """All values starting with the given string."""
  process_starts_with: String

  """All values not starting with the given string."""
  process_not_starts_with: String

  """All values ending with the given string."""
  process_ends_with: String

  """All values not ending with the given string."""
  process_not_ends_with: String
  pictureUrl: String

  """All values that are not equal to given value."""
  pictureUrl_not: String

  """All values that are contained in given list."""
  pictureUrl_in: [String!]

  """All values that are not contained in given list."""
  pictureUrl_not_in: [String!]

  """All values less than the given value."""
  pictureUrl_lt: String

  """All values less than or equal the given value."""
  pictureUrl_lte: String

  """All values greater than the given value."""
  pictureUrl_gt: String

  """All values greater than or equal the given value."""
  pictureUrl_gte: String

  """All values containing the given string."""
  pictureUrl_contains: String

  """All values not containing the given string."""
  pictureUrl_not_contains: String

  """All values starting with the given string."""
  pictureUrl_starts_with: String

  """All values not starting with the given string."""
  pictureUrl_not_starts_with: String

  """All values ending with the given string."""
  pictureUrl_ends_with: String

  """All values not ending with the given string."""
  pictureUrl_not_ends_with: String
  price: Float

  """All values that are not equal to given value."""
  price_not: Float

  """All values that are contained in given list."""
  price_in: [Float!]

  """All values that are not contained in given list."""
  price_not_in: [Float!]

  """All values less than the given value."""
  price_lt: Float

  """All values less than or equal the given value."""
  price_lte: Float

  """All values greater than the given value."""
  price_gt: Float

  """All values greater than or equal the given value."""
  price_gte: Float
  nutrition: String

  """All values that are not equal to given value."""
  nutrition_not: String

  """All values that are contained in given list."""
  nutrition_in: [String!]

  """All values that are not contained in given list."""
  nutrition_not_in: [String!]

  """All values less than the given value."""
  nutrition_lt: String

  """All values less than or equal the given value."""
  nutrition_lte: String

  """All values greater than the given value."""
  nutrition_gt: String

  """All values greater than or equal the given value."""
  nutrition_gte: String

  """All values containing the given string."""
  nutrition_contains: String

  """All values not containing the given string."""
  nutrition_not_contains: String

  """All values starting with the given string."""
  nutrition_starts_with: String

  """All values not starting with the given string."""
  nutrition_not_starts_with: String

  """All values ending with the given string."""
  nutrition_ends_with: String

  """All values not ending with the given string."""
  nutrition_not_ends_with: String
  category: String

  """All values that are not equal to given value."""
  category_not: String

  """All values that are contained in given list."""
  category_in: [String!]

  """All values that are not contained in given list."""
  category_not_in: [String!]

  """All values less than the given value."""
  category_lt: String

  """All values less than or equal the given value."""
  category_lte: String

  """All values greater than the given value."""
  category_gt: String

  """All values greater than or equal the given value."""
  category_gte: String

  """All values containing the given string."""
  category_contains: String

  """All values not containing the given string."""
  category_not_contains: String

  """All values starting with the given string."""
  category_starts_with: String

  """All values not starting with the given string."""
  category_not_starts_with: String

  """All values ending with the given string."""
  category_ends_with: String

  """All values not ending with the given string."""
  category_not_ends_with: String
  ingredients_every: IngredientWhereInput
  ingredients_some: IngredientWhereInput
  ingredients_none: IngredientWhereInput
  creator: UserWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
  likes_every: LikeWhereInput
  likes_some: LikeWhereInput
  likes_none: LikeWhereInput
  equipments_every: EquipmentWhereInput
  equipments_some: EquipmentWhereInput
  equipments_none: EquipmentWhereInput
}

input RecipeWhereUniqueInput {
  id: ID
  name: String
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  recipe(where: RecipeSubscriptionWhereInput): RecipeSubscriptionPayload
  like(where: LikeSubscriptionWhereInput): LikeSubscriptionPayload
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  equipment(where: EquipmentSubscriptionWhereInput): EquipmentSubscriptionPayload
  ingredient(where: IngredientSubscriptionWhereInput): IngredientSubscriptionPayload
}

type User implements Node {
  id: ID!
  email: String!
  username: String!
  name: String!
  password: String!
  recipes(where: RecipeWhereInput, orderBy: RecipeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Recipe!]
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  likes(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Like!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  username: String!
  name: String!
  password: String!
  recipes: RecipeCreateManyWithoutCreatorInput
  comments: CommentCreateManyWithoutAuthorInput
  likes: LikeCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutCommentsInput {
  create: UserCreateWithoutCommentsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutLikesInput {
  create: UserCreateWithoutLikesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutRecipesInput {
  create: UserCreateWithoutRecipesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutCommentsInput {
  email: String!
  username: String!
  name: String!
  password: String!
  recipes: RecipeCreateManyWithoutCreatorInput
  likes: LikeCreateManyWithoutAuthorInput
}

input UserCreateWithoutLikesInput {
  email: String!
  username: String!
  name: String!
  password: String!
  recipes: RecipeCreateManyWithoutCreatorInput
  comments: CommentCreateManyWithoutAuthorInput
}

input UserCreateWithoutRecipesInput {
  email: String!
  username: String!
  name: String!
  password: String!
  comments: CommentCreateManyWithoutAuthorInput
  likes: LikeCreateManyWithoutAuthorInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  username_ASC
  username_DESC
  name_ASC
  name_DESC
  password_ASC
  password_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  username: String!
  name: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  email: String
  username: String
  name: String
  password: String
  recipes: RecipeUpdateManyWithoutCreatorInput
  comments: CommentUpdateManyWithoutAuthorInput
  likes: LikeUpdateManyWithoutAuthorInput
}

input UserUpdateOneWithoutCommentsInput {
  create: UserCreateWithoutCommentsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutCommentsDataInput
  upsert: UserUpsertWithoutCommentsInput
}

input UserUpdateOneWithoutLikesInput {
  create: UserCreateWithoutLikesInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutLikesDataInput
  upsert: UserUpsertWithoutLikesInput
}

input UserUpdateOneWithoutRecipesInput {
  create: UserCreateWithoutRecipesInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutRecipesDataInput
  upsert: UserUpsertWithoutRecipesInput
}

input UserUpdateWithoutCommentsDataInput {
  email: String
  username: String
  name: String
  password: String
  recipes: RecipeUpdateManyWithoutCreatorInput
  likes: LikeUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutLikesDataInput {
  email: String
  username: String
  name: String
  password: String
  recipes: RecipeUpdateManyWithoutCreatorInput
  comments: CommentUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutRecipesDataInput {
  email: String
  username: String
  name: String
  password: String
  comments: CommentUpdateManyWithoutAuthorInput
  likes: LikeUpdateManyWithoutAuthorInput
}

input UserUpsertWithoutCommentsInput {
  update: UserUpdateWithoutCommentsDataInput!
  create: UserCreateWithoutCommentsInput!
}

input UserUpsertWithoutLikesInput {
  update: UserUpdateWithoutLikesDataInput!
  create: UserCreateWithoutLikesInput!
}

input UserUpsertWithoutRecipesInput {
  update: UserUpdateWithoutRecipesDataInput!
  create: UserCreateWithoutRecipesInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  username: String

  """All values that are not equal to given value."""
  username_not: String

  """All values that are contained in given list."""
  username_in: [String!]

  """All values that are not contained in given list."""
  username_not_in: [String!]

  """All values less than the given value."""
  username_lt: String

  """All values less than or equal the given value."""
  username_lte: String

  """All values greater than the given value."""
  username_gt: String

  """All values greater than or equal the given value."""
  username_gte: String

  """All values containing the given string."""
  username_contains: String

  """All values not containing the given string."""
  username_not_contains: String

  """All values starting with the given string."""
  username_starts_with: String

  """All values not starting with the given string."""
  username_not_starts_with: String

  """All values ending with the given string."""
  username_ends_with: String

  """All values not ending with the given string."""
  username_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  recipes_every: RecipeWhereInput
  recipes_some: RecipeWhereInput
  recipes_none: RecipeWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
  likes_every: LikeWhereInput
  likes_some: LikeWhereInput
  likes_none: LikeWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
  username: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'username_ASC' |
  'username_DESC' |
  'name_ASC' |
  'name_DESC' |
  'password_ASC' |
  'password_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type RecipeOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'process_ASC' |
  'process_DESC' |
  'pictureUrl_ASC' |
  'pictureUrl_DESC' |
  'price_ASC' |
  'price_DESC' |
  'nutrition_ASC' |
  'nutrition_DESC' |
  'category_ASC' |
  'category_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type IngredientOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'price_ASC' |
  'price_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type CommentOrderByInput =   'text_ASC' |
  'text_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type LikeOrderByInput =   'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type EquipmentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface UserCreateWithoutLikesInput {
  email: String
  username: String
  name: String
  password: String
  recipes?: RecipeCreateManyWithoutCreatorInput
  comments?: CommentCreateManyWithoutAuthorInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  username?: String
  username_not?: String
  username_in?: String[] | String
  username_not_in?: String[] | String
  username_lt?: String
  username_lte?: String
  username_gt?: String
  username_gte?: String
  username_contains?: String
  username_not_contains?: String
  username_starts_with?: String
  username_not_starts_with?: String
  username_ends_with?: String
  username_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  recipes_every?: RecipeWhereInput
  recipes_some?: RecipeWhereInput
  recipes_none?: RecipeWhereInput
  comments_every?: CommentWhereInput
  comments_some?: CommentWhereInput
  comments_none?: CommentWhereInput
  likes_every?: LikeWhereInput
  likes_some?: LikeWhereInput
  likes_none?: LikeWhereInput
}

export interface LikeCreateInput {
  author: UserCreateOneWithoutLikesInput
  recipe: RecipeCreateOneWithoutLikesInput
}

export interface EquipmentWhereInput {
  AND?: EquipmentWhereInput[] | EquipmentWhereInput
  OR?: EquipmentWhereInput[] | EquipmentWhereInput
  NOT?: EquipmentWhereInput[] | EquipmentWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  _MagicalBackRelation_EquipmentToRecipe_every?: RecipeWhereInput
  _MagicalBackRelation_EquipmentToRecipe_some?: RecipeWhereInput
  _MagicalBackRelation_EquipmentToRecipe_none?: RecipeWhereInput
}

export interface CommentCreateWithoutRecipeInput {
  text: String
  author: UserCreateOneWithoutCommentsInput
}

export interface EquipmentUpsertWithWhereUniqueNestedInput {
  where: EquipmentWhereUniqueInput
  update: EquipmentUpdateDataInput
  create: EquipmentCreateInput
}

export interface UserCreateOneWithoutCommentsInput {
  create?: UserCreateWithoutCommentsInput
  connect?: UserWhereUniqueInput
}

export interface CommentCreateInput {
  text: String
  author: UserCreateOneWithoutCommentsInput
  recipe: RecipeCreateOneWithoutCommentsInput
}

export interface UserCreateWithoutCommentsInput {
  email: String
  username: String
  name: String
  password: String
  recipes?: RecipeCreateManyWithoutCreatorInput
  likes?: LikeCreateManyWithoutAuthorInput
}

export interface IngredientSubscriptionWhereInput {
  AND?: IngredientSubscriptionWhereInput[] | IngredientSubscriptionWhereInput
  OR?: IngredientSubscriptionWhereInput[] | IngredientSubscriptionWhereInput
  NOT?: IngredientSubscriptionWhereInput[] | IngredientSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: IngredientWhereInput
}

export interface LikeCreateManyWithoutAuthorInput {
  create?: LikeCreateWithoutAuthorInput[] | LikeCreateWithoutAuthorInput
  connect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput
}

export interface EquipmentSubscriptionWhereInput {
  AND?: EquipmentSubscriptionWhereInput[] | EquipmentSubscriptionWhereInput
  OR?: EquipmentSubscriptionWhereInput[] | EquipmentSubscriptionWhereInput
  NOT?: EquipmentSubscriptionWhereInput[] | EquipmentSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: EquipmentWhereInput
}

export interface LikeCreateWithoutAuthorInput {
  recipe: RecipeCreateOneWithoutLikesInput
}

export interface CommentSubscriptionWhereInput {
  AND?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput
  OR?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput
  NOT?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CommentWhereInput
}

export interface RecipeCreateOneWithoutLikesInput {
  create?: RecipeCreateWithoutLikesInput
  connect?: RecipeWhereUniqueInput
}

export interface RecipeSubscriptionWhereInput {
  AND?: RecipeSubscriptionWhereInput[] | RecipeSubscriptionWhereInput
  OR?: RecipeSubscriptionWhereInput[] | RecipeSubscriptionWhereInput
  NOT?: RecipeSubscriptionWhereInput[] | RecipeSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: RecipeWhereInput
}

export interface RecipeCreateWithoutLikesInput {
  name: String
  description: String
  process: String
  pictureUrl?: String
  price: Float
  nutrition: String
  category: String
  ingredients?: IngredientCreateManyInput
  creator: UserCreateOneWithoutRecipesInput
  comments?: CommentCreateManyWithoutRecipeInput
  equipments?: EquipmentCreateManyInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface UserCreateOneWithoutRecipesInput {
  create?: UserCreateWithoutRecipesInput
  connect?: UserWhereUniqueInput
}

export interface RecipeWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface UserCreateWithoutRecipesInput {
  email: String
  username: String
  name: String
  password: String
  comments?: CommentCreateManyWithoutAuthorInput
  likes?: LikeCreateManyWithoutAuthorInput
}

export interface EquipmentWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface CommentCreateManyWithoutAuthorInput {
  create?: CommentCreateWithoutAuthorInput[] | CommentCreateWithoutAuthorInput
}

export interface RecipeUpsertWithoutCommentsInput {
  update: RecipeUpdateWithoutCommentsDataInput
  create: RecipeCreateWithoutCommentsInput
}

export interface CommentCreateWithoutAuthorInput {
  text: String
  recipe: RecipeCreateOneWithoutCommentsInput
}

export interface RecipeUpdateOneWithoutCommentsInput {
  create?: RecipeCreateWithoutCommentsInput
  connect?: RecipeWhereUniqueInput
  delete?: Boolean
  update?: RecipeUpdateWithoutCommentsDataInput
  upsert?: RecipeUpsertWithoutCommentsInput
}

export interface RecipeCreateOneWithoutCommentsInput {
  create?: RecipeCreateWithoutCommentsInput
  connect?: RecipeWhereUniqueInput
}

export interface UserUpdateWithoutCommentsDataInput {
  email?: String
  username?: String
  name?: String
  password?: String
  recipes?: RecipeUpdateManyWithoutCreatorInput
  likes?: LikeUpdateManyWithoutAuthorInput
}

export interface RecipeCreateWithoutCommentsInput {
  name: String
  description: String
  process: String
  pictureUrl?: String
  price: Float
  nutrition: String
  category: String
  ingredients?: IngredientCreateManyInput
  creator: UserCreateOneWithoutRecipesInput
  likes?: LikeCreateManyWithoutRecipeInput
  equipments?: EquipmentCreateManyInput
}

export interface CommentUpdateInput {
  text?: String
  author?: UserUpdateOneWithoutCommentsInput
  recipe?: RecipeUpdateOneWithoutCommentsInput
}

export interface LikeCreateManyWithoutRecipeInput {
  create?: LikeCreateWithoutRecipeInput[] | LikeCreateWithoutRecipeInput
  connect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput
}

export interface EquipmentUpdateInput {
  name?: String
}

export interface LikeCreateWithoutRecipeInput {
  author: UserCreateOneWithoutLikesInput
}

export interface RecipeUpdateInput {
  name?: String
  description?: String
  process?: String
  pictureUrl?: String
  price?: Float
  nutrition?: String
  category?: String
  ingredients?: IngredientUpdateManyInput
  creator?: UserUpdateOneWithoutRecipesInput
  comments?: CommentUpdateManyWithoutRecipeInput
  likes?: LikeUpdateManyWithoutRecipeInput
  equipments?: EquipmentUpdateManyInput
}

export interface UserCreateOneWithoutLikesInput {
  create?: UserCreateWithoutLikesInput
  connect?: UserWhereUniqueInput
}

export interface RecipeUpsertWithoutLikesInput {
  update: RecipeUpdateWithoutLikesDataInput
  create: RecipeCreateWithoutLikesInput
}

export interface LikeUpdateManyWithoutAuthorInput {
  create?: LikeCreateWithoutAuthorInput[] | LikeCreateWithoutAuthorInput
  connect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput
  disconnect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput
  delete?: LikeWhereUniqueInput[] | LikeWhereUniqueInput
  update?: LikeUpdateWithWhereUniqueWithoutAuthorInput[] | LikeUpdateWithWhereUniqueWithoutAuthorInput
  upsert?: LikeUpsertWithWhereUniqueWithoutAuthorInput[] | LikeUpsertWithWhereUniqueWithoutAuthorInput
}

export interface UserUpdateWithoutRecipesDataInput {
  email?: String
  username?: String
  name?: String
  password?: String
  comments?: CommentUpdateManyWithoutAuthorInput
  likes?: LikeUpdateManyWithoutAuthorInput
}

export interface EquipmentCreateManyInput {
  create?: EquipmentCreateInput[] | EquipmentCreateInput
  connect?: EquipmentWhereUniqueInput[] | EquipmentWhereUniqueInput
}

export interface RecipeUpdateWithoutLikesDataInput {
  name?: String
  description?: String
  process?: String
  pictureUrl?: String
  price?: Float
  nutrition?: String
  category?: String
  ingredients?: IngredientUpdateManyInput
  creator?: UserUpdateOneWithoutRecipesInput
  comments?: CommentUpdateManyWithoutRecipeInput
  equipments?: EquipmentUpdateManyInput
}

export interface EquipmentCreateInput {
  name: String
}

export interface LikeUpdateWithoutAuthorDataInput {
  recipe?: RecipeUpdateOneWithoutLikesInput
}

export interface RecipeCreateInput {
  name: String
  description: String
  process: String
  pictureUrl?: String
  price: Float
  nutrition: String
  category: String
  ingredients?: IngredientCreateManyInput
  creator: UserCreateOneWithoutRecipesInput
  comments?: CommentCreateManyWithoutRecipeInput
  likes?: LikeCreateManyWithoutRecipeInput
  equipments?: EquipmentCreateManyInput
}

export interface UserCreateInput {
  email: String
  username: String
  name: String
  password: String
  recipes?: RecipeCreateManyWithoutCreatorInput
  comments?: CommentCreateManyWithoutAuthorInput
  likes?: LikeCreateManyWithoutAuthorInput
}

export interface RecipeUpsertWithWhereUniqueWithoutCreatorInput {
  where: RecipeWhereUniqueInput
  update: RecipeUpdateWithoutCreatorDataInput
  create: RecipeCreateWithoutCreatorInput
}

export interface RecipeCreateWithoutCreatorInput {
  name: String
  description: String
  process: String
  pictureUrl?: String
  price: Float
  nutrition: String
  category: String
  ingredients?: IngredientCreateManyInput
  comments?: CommentCreateManyWithoutRecipeInput
  likes?: LikeCreateManyWithoutRecipeInput
  equipments?: EquipmentCreateManyInput
}

export interface IngredientCreateInput {
  name: String
  price: Float
}

export interface LikeWhereInput {
  AND?: LikeWhereInput[] | LikeWhereInput
  OR?: LikeWhereInput[] | LikeWhereInput
  NOT?: LikeWhereInput[] | LikeWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  author?: UserWhereInput
  recipe?: RecipeWhereInput
}

export interface UserUpdateInput {
  email?: String
  username?: String
  name?: String
  password?: String
  recipes?: RecipeUpdateManyWithoutCreatorInput
  comments?: CommentUpdateManyWithoutAuthorInput
  likes?: LikeUpdateManyWithoutAuthorInput
}

export interface IngredientWhereInput {
  AND?: IngredientWhereInput[] | IngredientWhereInput
  OR?: IngredientWhereInput[] | IngredientWhereInput
  NOT?: IngredientWhereInput[] | IngredientWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  price?: Float
  price_not?: Float
  price_in?: Float[] | Float
  price_not_in?: Float[] | Float
  price_lt?: Float
  price_lte?: Float
  price_gt?: Float
  price_gte?: Float
  _MagicalBackRelation_IngredientToRecipe_every?: RecipeWhereInput
  _MagicalBackRelation_IngredientToRecipe_some?: RecipeWhereInput
  _MagicalBackRelation_IngredientToRecipe_none?: RecipeWhereInput
}

export interface RecipeUpdateManyWithoutCreatorInput {
  create?: RecipeCreateWithoutCreatorInput[] | RecipeCreateWithoutCreatorInput
  connect?: RecipeWhereUniqueInput[] | RecipeWhereUniqueInput
  disconnect?: RecipeWhereUniqueInput[] | RecipeWhereUniqueInput
  delete?: RecipeWhereUniqueInput[] | RecipeWhereUniqueInput
  update?: RecipeUpdateWithWhereUniqueWithoutCreatorInput[] | RecipeUpdateWithWhereUniqueWithoutCreatorInput
  upsert?: RecipeUpsertWithWhereUniqueWithoutCreatorInput[] | RecipeUpsertWithWhereUniqueWithoutCreatorInput
}

export interface RecipeWhereInput {
  AND?: RecipeWhereInput[] | RecipeWhereInput
  OR?: RecipeWhereInput[] | RecipeWhereInput
  NOT?: RecipeWhereInput[] | RecipeWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  process?: String
  process_not?: String
  process_in?: String[] | String
  process_not_in?: String[] | String
  process_lt?: String
  process_lte?: String
  process_gt?: String
  process_gte?: String
  process_contains?: String
  process_not_contains?: String
  process_starts_with?: String
  process_not_starts_with?: String
  process_ends_with?: String
  process_not_ends_with?: String
  pictureUrl?: String
  pictureUrl_not?: String
  pictureUrl_in?: String[] | String
  pictureUrl_not_in?: String[] | String
  pictureUrl_lt?: String
  pictureUrl_lte?: String
  pictureUrl_gt?: String
  pictureUrl_gte?: String
  pictureUrl_contains?: String
  pictureUrl_not_contains?: String
  pictureUrl_starts_with?: String
  pictureUrl_not_starts_with?: String
  pictureUrl_ends_with?: String
  pictureUrl_not_ends_with?: String
  price?: Float
  price_not?: Float
  price_in?: Float[] | Float
  price_not_in?: Float[] | Float
  price_lt?: Float
  price_lte?: Float
  price_gt?: Float
  price_gte?: Float
  nutrition?: String
  nutrition_not?: String
  nutrition_in?: String[] | String
  nutrition_not_in?: String[] | String
  nutrition_lt?: String
  nutrition_lte?: String
  nutrition_gt?: String
  nutrition_gte?: String
  nutrition_contains?: String
  nutrition_not_contains?: String
  nutrition_starts_with?: String
  nutrition_not_starts_with?: String
  nutrition_ends_with?: String
  nutrition_not_ends_with?: String
  category?: String
  category_not?: String
  category_in?: String[] | String
  category_not_in?: String[] | String
  category_lt?: String
  category_lte?: String
  category_gt?: String
  category_gte?: String
  category_contains?: String
  category_not_contains?: String
  category_starts_with?: String
  category_not_starts_with?: String
  category_ends_with?: String
  category_not_ends_with?: String
  ingredients_every?: IngredientWhereInput
  ingredients_some?: IngredientWhereInput
  ingredients_none?: IngredientWhereInput
  creator?: UserWhereInput
  comments_every?: CommentWhereInput
  comments_some?: CommentWhereInput
  comments_none?: CommentWhereInput
  likes_every?: LikeWhereInput
  likes_some?: LikeWhereInput
  likes_none?: LikeWhereInput
  equipments_every?: EquipmentWhereInput
  equipments_some?: EquipmentWhereInput
  equipments_none?: EquipmentWhereInput
}

export interface RecipeUpdateWithWhereUniqueWithoutCreatorInput {
  where: RecipeWhereUniqueInput
  data: RecipeUpdateWithoutCreatorDataInput
}

export interface LikeWhereUniqueInput {
  id?: ID_Input
}

export interface RecipeUpdateWithoutCreatorDataInput {
  name?: String
  description?: String
  process?: String
  pictureUrl?: String
  price?: Float
  nutrition?: String
  category?: String
  ingredients?: IngredientUpdateManyInput
  comments?: CommentUpdateManyWithoutRecipeInput
  likes?: LikeUpdateManyWithoutRecipeInput
  equipments?: EquipmentUpdateManyInput
}

export interface RecipeUpdateWithoutCommentsDataInput {
  name?: String
  description?: String
  process?: String
  pictureUrl?: String
  price?: Float
  nutrition?: String
  category?: String
  ingredients?: IngredientUpdateManyInput
  creator?: UserUpdateOneWithoutRecipesInput
  likes?: LikeUpdateManyWithoutRecipeInput
  equipments?: EquipmentUpdateManyInput
}

export interface IngredientUpdateManyInput {
  create?: IngredientCreateInput[] | IngredientCreateInput
  connect?: IngredientWhereUniqueInput[] | IngredientWhereUniqueInput
  disconnect?: IngredientWhereUniqueInput[] | IngredientWhereUniqueInput
  delete?: IngredientWhereUniqueInput[] | IngredientWhereUniqueInput
  update?: IngredientUpdateWithWhereUniqueNestedInput[] | IngredientUpdateWithWhereUniqueNestedInput
  upsert?: IngredientUpsertWithWhereUniqueNestedInput[] | IngredientUpsertWithWhereUniqueNestedInput
}

export interface UserUpdateOneWithoutCommentsInput {
  create?: UserCreateWithoutCommentsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutCommentsDataInput
  upsert?: UserUpsertWithoutCommentsInput
}

export interface IngredientUpdateWithWhereUniqueNestedInput {
  where: IngredientWhereUniqueInput
  data: IngredientUpdateDataInput
}

export interface LikeUpdateInput {
  author?: UserUpdateOneWithoutLikesInput
  recipe?: RecipeUpdateOneWithoutLikesInput
}

export interface IngredientUpdateDataInput {
  name?: String
  price?: Float
}

export interface UserUpsertWithoutRecipesInput {
  update: UserUpdateWithoutRecipesDataInput
  create: UserCreateWithoutRecipesInput
}

export interface IngredientUpsertWithWhereUniqueNestedInput {
  where: IngredientWhereUniqueInput
  update: IngredientUpdateDataInput
  create: IngredientCreateInput
}

export interface RecipeUpdateOneWithoutLikesInput {
  create?: RecipeCreateWithoutLikesInput
  connect?: RecipeWhereUniqueInput
  delete?: Boolean
  update?: RecipeUpdateWithoutLikesDataInput
  upsert?: RecipeUpsertWithoutLikesInput
}

export interface CommentUpdateManyWithoutRecipeInput {
  create?: CommentCreateWithoutRecipeInput[] | CommentCreateWithoutRecipeInput
}

export interface RecipeCreateManyWithoutCreatorInput {
  create?: RecipeCreateWithoutCreatorInput[] | RecipeCreateWithoutCreatorInput
  connect?: RecipeWhereUniqueInput[] | RecipeWhereUniqueInput
}

export interface LikeUpdateManyWithoutRecipeInput {
  create?: LikeCreateWithoutRecipeInput[] | LikeCreateWithoutRecipeInput
  connect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput
  disconnect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput
  delete?: LikeWhereUniqueInput[] | LikeWhereUniqueInput
  update?: LikeUpdateWithWhereUniqueWithoutRecipeInput[] | LikeUpdateWithWhereUniqueWithoutRecipeInput
  upsert?: LikeUpsertWithWhereUniqueWithoutRecipeInput[] | LikeUpsertWithWhereUniqueWithoutRecipeInput
}

export interface CommentCreateManyWithoutRecipeInput {
  create?: CommentCreateWithoutRecipeInput[] | CommentCreateWithoutRecipeInput
}

export interface LikeUpdateWithWhereUniqueWithoutRecipeInput {
  where: LikeWhereUniqueInput
  data: LikeUpdateWithoutRecipeDataInput
}

export interface LikeSubscriptionWhereInput {
  AND?: LikeSubscriptionWhereInput[] | LikeSubscriptionWhereInput
  OR?: LikeSubscriptionWhereInput[] | LikeSubscriptionWhereInput
  NOT?: LikeSubscriptionWhereInput[] | LikeSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: LikeWhereInput
}

export interface LikeUpdateWithoutRecipeDataInput {
  author?: UserUpdateOneWithoutLikesInput
}

export interface IngredientWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface UserUpdateOneWithoutLikesInput {
  create?: UserCreateWithoutLikesInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutLikesDataInput
  upsert?: UserUpsertWithoutLikesInput
}

export interface IngredientUpdateInput {
  name?: String
  price?: Float
}

export interface UserUpdateWithoutLikesDataInput {
  email?: String
  username?: String
  name?: String
  password?: String
  recipes?: RecipeUpdateManyWithoutCreatorInput
  comments?: CommentUpdateManyWithoutAuthorInput
}

export interface UserUpdateOneWithoutRecipesInput {
  create?: UserCreateWithoutRecipesInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutRecipesDataInput
  upsert?: UserUpsertWithoutRecipesInput
}

export interface CommentUpdateManyWithoutAuthorInput {
  create?: CommentCreateWithoutAuthorInput[] | CommentCreateWithoutAuthorInput
}

export interface IngredientCreateManyInput {
  create?: IngredientCreateInput[] | IngredientCreateInput
  connect?: IngredientWhereUniqueInput[] | IngredientWhereUniqueInput
}

export interface UserUpsertWithoutLikesInput {
  update: UserUpdateWithoutLikesDataInput
  create: UserCreateWithoutLikesInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
  username?: String
}

export interface EquipmentUpdateDataInput {
  name?: String
}

export interface EquipmentUpdateWithWhereUniqueNestedInput {
  where: EquipmentWhereUniqueInput
  data: EquipmentUpdateDataInput
}

export interface EquipmentUpdateManyInput {
  create?: EquipmentCreateInput[] | EquipmentCreateInput
  connect?: EquipmentWhereUniqueInput[] | EquipmentWhereUniqueInput
  disconnect?: EquipmentWhereUniqueInput[] | EquipmentWhereUniqueInput
  delete?: EquipmentWhereUniqueInput[] | EquipmentWhereUniqueInput
  update?: EquipmentUpdateWithWhereUniqueNestedInput[] | EquipmentUpdateWithWhereUniqueNestedInput
  upsert?: EquipmentUpsertWithWhereUniqueNestedInput[] | EquipmentUpsertWithWhereUniqueNestedInput
}

export interface LikeUpsertWithWhereUniqueWithoutRecipeInput {
  where: LikeWhereUniqueInput
  update: LikeUpdateWithoutRecipeDataInput
  create: LikeCreateWithoutRecipeInput
}

export interface UserUpsertWithoutCommentsInput {
  update: UserUpdateWithoutCommentsDataInput
  create: UserCreateWithoutCommentsInput
}

export interface CommentWhereInput {
  AND?: CommentWhereInput[] | CommentWhereInput
  OR?: CommentWhereInput[] | CommentWhereInput
  NOT?: CommentWhereInput[] | CommentWhereInput
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  author?: UserWhereInput
  recipe?: RecipeWhereInput
}

export interface LikeUpdateWithWhereUniqueWithoutAuthorInput {
  where: LikeWhereUniqueInput
  data: LikeUpdateWithoutAuthorDataInput
}

export interface LikeUpsertWithWhereUniqueWithoutAuthorInput {
  where: LikeWhereUniqueInput
  update: LikeUpdateWithoutAuthorDataInput
  create: LikeCreateWithoutAuthorInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface IngredientPreviousValues {
  id: ID_Output
  name: String
  price: Float
}

export interface AggregateUser {
  count: Int
}

export interface Ingredient extends Node {
  id: ID_Output
  name: String
  price: Float
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface User extends Node {
  id: ID_Output
  email: String
  username: String
  name: String
  password: String
  recipes?: Recipe[]
  comments?: Comment[]
  likes?: Like[]
}

export interface Recipe extends Node {
  id: ID_Output
  name: String
  description: String
  ingredients?: Ingredient[]
  creator: User
  process: String
  comments?: Comment[]
  likes?: Like[]
  pictureUrl?: String
  price: Float
  nutrition: String
  category: String
  equipments?: Equipment[]
}

/*
 * An edge in a connection.

 */
export interface IngredientEdge {
  node: Ingredient
  cursor: String
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface AggregateEquipment {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

/*
 * A connection to a list of items.

 */
export interface EquipmentConnection {
  pageInfo: PageInfo
  edges: EquipmentEdge[]
  aggregate: AggregateEquipment
}

export interface Equipment extends Node {
  id: ID_Output
  name: String
}

/*
 * An edge in a connection.

 */
export interface CommentEdge {
  node: Comment
  cursor: String
}

export interface EquipmentPreviousValues {
  id: ID_Output
  name: String
}

export interface AggregateLike {
  count: Int
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface LikeConnection {
  pageInfo: PageInfo
  edges: LikeEdge[]
  aggregate: AggregateLike
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  username: String
  name: String
  password: String
}

export interface BatchPayload {
  count: Long
}

export interface Like extends Node {
  id: ID_Output
  author: User
  recipe: Recipe
}

/*
 * An edge in a connection.

 */
export interface RecipeEdge {
  node: Recipe
  cursor: String
}

export interface RecipeSubscriptionPayload {
  mutation: MutationType
  node?: Recipe
  updatedFields?: String[]
  previousValues?: RecipePreviousValues
}

export interface AggregateIngredient {
  count: Int
}

export interface RecipePreviousValues {
  id: ID_Output
  name: String
  description: String
  process: String
  pictureUrl?: String
  price: Float
  nutrition: String
  category: String
}

/*
 * An edge in a connection.

 */
export interface EquipmentEdge {
  node: Equipment
  cursor: String
}

export interface EquipmentSubscriptionPayload {
  mutation: MutationType
  node?: Equipment
  updatedFields?: String[]
  previousValues?: EquipmentPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface CommentConnection {
  pageInfo: PageInfo
  edges: CommentEdge[]
  aggregate: AggregateComment
}

export interface LikeSubscriptionPayload {
  mutation: MutationType
  node?: Like
  updatedFields?: String[]
  previousValues?: LikePreviousValues
}

export interface AggregateRecipe {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface RecipeConnection {
  pageInfo: PageInfo
  edges: RecipeEdge[]
  aggregate: AggregateRecipe
}

export interface CommentPreviousValues {
  text: String
}

export interface CommentSubscriptionPayload {
  mutation: MutationType
  node?: Comment
  updatedFields?: String[]
  previousValues?: CommentPreviousValues
}

export interface Comment {
  text: String
  author: User
  recipe: Recipe
}

export interface LikePreviousValues {
  id: ID_Output
}

/*
 * A connection to a list of items.

 */
export interface IngredientConnection {
  pageInfo: PageInfo
  edges: IngredientEdge[]
  aggregate: AggregateIngredient
}

export interface IngredientSubscriptionPayload {
  mutation: MutationType
  node?: Ingredient
  updatedFields?: String[]
  previousValues?: IngredientPreviousValues
}

/*
 * An edge in a connection.

 */
export interface LikeEdge {
  node: Like
  cursor: String
}

export interface AggregateComment {
  count: Int
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number