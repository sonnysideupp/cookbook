import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    recipes: <T = Recipe[]>(args: { where?: RecipeWhereInput, orderBy?: RecipeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    comments: <T = Comment[]>(args: { where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    equipments: <T = Equipment[]>(args: { where?: EquipmentWhereInput, orderBy?: EquipmentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    ingredients: <T = Ingredient[]>(args: { where?: IngredientWhereInput, orderBy?: IngredientOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    recipe: <T = Recipe | null>(args: { where: RecipeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    equipment: <T = Equipment | null>(args: { where: EquipmentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    ingredient: <T = Ingredient | null>(args: { where: IngredientWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    recipesConnection: <T = RecipeConnection>(args: { where?: RecipeWhereInput, orderBy?: RecipeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    commentsConnection: <T = CommentConnection>(args: { where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    equipmentsConnection: <T = EquipmentConnection>(args: { where?: EquipmentWhereInput, orderBy?: EquipmentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    ingredientsConnection: <T = IngredientConnection>(args: { where?: IngredientWhereInput, orderBy?: IngredientOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createRecipe: <T = Recipe>(args: { data: RecipeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createComment: <T = Comment>(args: { data: CommentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createEquipment: <T = Equipment>(args: { data: EquipmentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createIngredient: <T = Ingredient>(args: { data: IngredientCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateRecipe: <T = Recipe | null>(args: { data: RecipeUpdateInput, where: RecipeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateEquipment: <T = Equipment | null>(args: { data: EquipmentUpdateInput, where: EquipmentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateIngredient: <T = Ingredient | null>(args: { data: IngredientUpdateInput, where: IngredientWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteRecipe: <T = Recipe | null>(args: { where: RecipeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteEquipment: <T = Equipment | null>(args: { where: EquipmentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteIngredient: <T = Ingredient | null>(args: { where: IngredientWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertRecipe: <T = Recipe>(args: { where: RecipeWhereUniqueInput, create: RecipeCreateInput, update: RecipeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertEquipment: <T = Equipment>(args: { where: EquipmentWhereUniqueInput, create: EquipmentCreateInput, update: EquipmentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertIngredient: <T = Ingredient>(args: { where: IngredientWhereUniqueInput, create: IngredientCreateInput, update: IngredientUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyRecipes: <T = BatchPayload>(args: { data: RecipeUpdateInput, where?: RecipeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyComments: <T = BatchPayload>(args: { data: CommentUpdateInput, where?: CommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyEquipments: <T = BatchPayload>(args: { data: EquipmentUpdateInput, where?: EquipmentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyIngredients: <T = BatchPayload>(args: { data: IngredientUpdateInput, where?: IngredientWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyRecipes: <T = BatchPayload>(args: { where?: RecipeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyComments: <T = BatchPayload>(args: { where?: CommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyEquipments: <T = BatchPayload>(args: { where?: EquipmentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyIngredients: <T = BatchPayload>(args: { where?: IngredientWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    recipe: <T = RecipeSubscriptionPayload | null>(args: { where?: RecipeSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    comment: <T = CommentSubscriptionPayload | null>(args: { where?: CommentSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    equipment: <T = EquipmentSubscriptionPayload | null>(args: { where?: EquipmentSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    ingredient: <T = IngredientSubscriptionPayload | null>(args: { where?: IngredientSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Recipe: (where?: RecipeWhereInput) => Promise<boolean>
  Comment: (where?: CommentWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
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
  author: UserCreateOneInput!
  recipe: RecipeCreateOneWithoutCommentsInput!
}

input CommentCreateManyWithoutRecipeInput {
  create: [CommentCreateWithoutRecipeInput!]
}

input CommentCreateWithoutRecipeInput {
  text: String!
  author: UserCreateOneInput!
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
  author: UserUpdateOneInput
  recipe: RecipeUpdateOneWithoutCommentsInput
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

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createRecipe(data: RecipeCreateInput!): Recipe!
  createComment(data: CommentCreateInput!): Comment!
  createUser(data: UserCreateInput!): User!
  createEquipment(data: EquipmentCreateInput!): Equipment!
  createIngredient(data: IngredientCreateInput!): Ingredient!
  updateRecipe(data: RecipeUpdateInput!, where: RecipeWhereUniqueInput!): Recipe
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateEquipment(data: EquipmentUpdateInput!, where: EquipmentWhereUniqueInput!): Equipment
  updateIngredient(data: IngredientUpdateInput!, where: IngredientWhereUniqueInput!): Ingredient
  deleteRecipe(where: RecipeWhereUniqueInput!): Recipe
  deleteUser(where: UserWhereUniqueInput!): User
  deleteEquipment(where: EquipmentWhereUniqueInput!): Equipment
  deleteIngredient(where: IngredientWhereUniqueInput!): Ingredient
  upsertRecipe(where: RecipeWhereUniqueInput!, create: RecipeCreateInput!, update: RecipeUpdateInput!): Recipe!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertEquipment(where: EquipmentWhereUniqueInput!, create: EquipmentCreateInput!, update: EquipmentUpdateInput!): Equipment!
  upsertIngredient(where: IngredientWhereUniqueInput!, create: IngredientCreateInput!, update: IngredientUpdateInput!): Ingredient!
  updateManyRecipes(data: RecipeUpdateInput!, where: RecipeWhereInput): BatchPayload!
  updateManyComments(data: CommentUpdateInput!, where: CommentWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyEquipments(data: EquipmentUpdateInput!, where: EquipmentWhereInput): BatchPayload!
  updateManyIngredients(data: IngredientUpdateInput!, where: IngredientWhereInput): BatchPayload!
  deleteManyRecipes(where: RecipeWhereInput): BatchPayload!
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
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
  recipes(where: RecipeWhereInput, orderBy: RecipeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Recipe]!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  equipments(where: EquipmentWhereInput, orderBy: EquipmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Equipment]!
  ingredients(where: IngredientWhereInput, orderBy: IngredientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Ingredient]!
  recipe(where: RecipeWhereUniqueInput!): Recipe
  user(where: UserWhereUniqueInput!): User
  equipment(where: EquipmentWhereUniqueInput!): Equipment
  ingredient(where: IngredientWhereUniqueInput!): Ingredient
  recipesConnection(where: RecipeWhereInput, orderBy: RecipeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RecipeConnection!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
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
  likes: Int!
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
  likes: Int!
  price: Float!
  nutrition: String!
  category: String!
  ingredients: IngredientCreateManyInput
  creator: UserCreateOneWithoutRecipesInput!
  comments: CommentCreateManyWithoutRecipeInput
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

input RecipeCreateWithoutCommentsInput {
  name: String!
  description: String!
  process: String!
  likes: Int!
  price: Float!
  nutrition: String!
  category: String!
  ingredients: IngredientCreateManyInput
  creator: UserCreateOneWithoutRecipesInput!
  equipments: EquipmentCreateManyInput
}

input RecipeCreateWithoutCreatorInput {
  name: String!
  description: String!
  process: String!
  likes: Int!
  price: Float!
  nutrition: String!
  category: String!
  ingredients: IngredientCreateManyInput
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
  likes_ASC
  likes_DESC
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
  likes: Int!
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
  likes: Int
  price: Float
  nutrition: String
  category: String
  ingredients: IngredientUpdateManyInput
  creator: UserUpdateOneWithoutRecipesInput
  comments: CommentUpdateManyWithoutRecipeInput
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

input RecipeUpdateWithoutCommentsDataInput {
  name: String
  description: String
  process: String
  likes: Int
  price: Float
  nutrition: String
  category: String
  ingredients: IngredientUpdateManyInput
  creator: UserUpdateOneWithoutRecipesInput
  equipments: EquipmentUpdateManyInput
}

input RecipeUpdateWithoutCreatorDataInput {
  name: String
  description: String
  process: String
  likes: Int
  price: Float
  nutrition: String
  category: String
  ingredients: IngredientUpdateManyInput
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
  likes: Int

  """All values that are not equal to given value."""
  likes_not: Int

  """All values that are contained in given list."""
  likes_in: [Int!]

  """All values that are not contained in given list."""
  likes_not_in: [Int!]

  """All values less than the given value."""
  likes_lt: Int

  """All values less than or equal the given value."""
  likes_lte: Int

  """All values greater than the given value."""
  likes_gt: Int

  """All values greater than or equal the given value."""
  likes_gte: Int
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
  equipments_every: EquipmentWhereInput
  equipments_some: EquipmentWhereInput
  equipments_none: EquipmentWhereInput
}

input RecipeWhereUniqueInput {
  id: ID
  name: String
}

type Subscription {
  recipe(where: RecipeSubscriptionWhereInput): RecipeSubscriptionPayload
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  equipment(where: EquipmentSubscriptionWhereInput): EquipmentSubscriptionPayload
  ingredient(where: IngredientSubscriptionWhereInput): IngredientSubscriptionPayload
}

type User implements Node {
  id: ID!
  email: String!
  name: String!
  password: String!
  recipes(where: RecipeWhereInput, orderBy: RecipeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Recipe!]
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
  name: String!
  password: String!
  recipes: RecipeCreateManyWithoutCreatorInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutRecipesInput {
  create: UserCreateWithoutRecipesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutRecipesInput {
  email: String!
  name: String!
  password: String!
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

input UserUpdateDataInput {
  email: String
  name: String
  password: String
  recipes: RecipeUpdateManyWithoutCreatorInput
}

input UserUpdateInput {
  email: String
  name: String
  password: String
  recipes: RecipeUpdateManyWithoutCreatorInput
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneWithoutRecipesInput {
  create: UserCreateWithoutRecipesInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutRecipesDataInput
  upsert: UserUpsertWithoutRecipesInput
}

input UserUpdateWithoutRecipesDataInput {
  email: String
  name: String
  password: String
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
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
  _MagicalBackRelation_CommentToUser_every: CommentWhereInput
  _MagicalBackRelation_CommentToUser_some: CommentWhereInput
  _MagicalBackRelation_CommentToUser_none: CommentWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type RecipeOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'process_ASC' |
  'process_DESC' |
  'likes_ASC' |
  'likes_DESC' |
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

export type EquipmentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'name_ASC' |
  'name_DESC' |
  'password_ASC' |
  'password_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface RecipeCreateWithoutCreatorInput {
  name: String
  description: String
  process: String
  likes: Int
  price: Float
  nutrition: String
  category: String
  ingredients?: IngredientCreateManyInput
  comments?: CommentCreateManyWithoutRecipeInput
  equipments?: EquipmentCreateManyInput
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
  likes?: Int
  likes_not?: Int
  likes_in?: Int[] | Int
  likes_not_in?: Int[] | Int
  likes_lt?: Int
  likes_lte?: Int
  likes_gt?: Int
  likes_gte?: Int
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
  equipments_every?: EquipmentWhereInput
  equipments_some?: EquipmentWhereInput
  equipments_none?: EquipmentWhereInput
}

export interface RecipeCreateOneWithoutCommentsInput {
  create?: RecipeCreateWithoutCommentsInput
  connect?: RecipeWhereUniqueInput
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

export interface EquipmentUpdateDataInput {
  name?: String
}

export interface UserUpsertWithoutRecipesInput {
  update: UserUpdateWithoutRecipesDataInput
  create: UserCreateWithoutRecipesInput
}

export interface EquipmentUpdateWithWhereUniqueNestedInput {
  where: EquipmentWhereUniqueInput
  data: EquipmentUpdateDataInput
}

export interface RecipeCreateWithoutCommentsInput {
  name: String
  description: String
  process: String
  likes: Int
  price: Float
  nutrition: String
  category: String
  ingredients?: IngredientCreateManyInput
  creator: UserCreateOneWithoutRecipesInput
  equipments?: EquipmentCreateManyInput
}

export interface EquipmentUpdateManyInput {
  create?: EquipmentCreateInput[] | EquipmentCreateInput
  connect?: EquipmentWhereUniqueInput[] | EquipmentWhereUniqueInput
  disconnect?: EquipmentWhereUniqueInput[] | EquipmentWhereUniqueInput
  delete?: EquipmentWhereUniqueInput[] | EquipmentWhereUniqueInput
  update?: EquipmentUpdateWithWhereUniqueNestedInput[] | EquipmentUpdateWithWhereUniqueNestedInput
  upsert?: EquipmentUpsertWithWhereUniqueNestedInput[] | EquipmentUpsertWithWhereUniqueNestedInput
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

export interface RecipeCreateInput {
  name: String
  description: String
  process: String
  likes: Int
  price: Float
  nutrition: String
  category: String
  ingredients?: IngredientCreateManyInput
  creator: UserCreateOneWithoutRecipesInput
  comments?: CommentCreateManyWithoutRecipeInput
  equipments?: EquipmentCreateManyInput
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

export interface IngredientCreateManyInput {
  create?: IngredientCreateInput[] | IngredientCreateInput
  connect?: IngredientWhereUniqueInput[] | IngredientWhereUniqueInput
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

export interface IngredientCreateInput {
  name: String
  price: Float
}

export interface RecipeUpsertWithoutCommentsInput {
  update: RecipeUpdateWithoutCommentsDataInput
  create: RecipeCreateWithoutCommentsInput
}

export interface UserCreateOneWithoutRecipesInput {
  create?: UserCreateWithoutRecipesInput
  connect?: UserWhereUniqueInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface UserCreateWithoutRecipesInput {
  email: String
  name: String
  password: String
}

export interface IngredientWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface CommentCreateManyWithoutRecipeInput {
  create?: CommentCreateWithoutRecipeInput[] | CommentCreateWithoutRecipeInput
}

export interface RecipeUpdateOneWithoutCommentsInput {
  create?: RecipeCreateWithoutCommentsInput
  connect?: RecipeWhereUniqueInput
  delete?: Boolean
  update?: RecipeUpdateWithoutCommentsDataInput
  upsert?: RecipeUpsertWithoutCommentsInput
}

export interface CommentCreateWithoutRecipeInput {
  text: String
  author: UserCreateOneInput
}

export interface UserUpdateDataInput {
  email?: String
  name?: String
  password?: String
  recipes?: RecipeUpdateManyWithoutCreatorInput
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface CommentUpdateInput {
  text?: String
  author?: UserUpdateOneInput
  recipe?: RecipeUpdateOneWithoutCommentsInput
}

export interface UserCreateInput {
  email: String
  name: String
  password: String
  recipes?: RecipeCreateManyWithoutCreatorInput
}

export interface EquipmentUpdateInput {
  name?: String
}

export interface RecipeCreateManyWithoutCreatorInput {
  create?: RecipeCreateWithoutCreatorInput[] | RecipeCreateWithoutCreatorInput
  connect?: RecipeWhereUniqueInput[] | RecipeWhereUniqueInput
}

export interface RecipeUpdateWithoutCreatorDataInput {
  name?: String
  description?: String
  process?: String
  likes?: Int
  price?: Float
  nutrition?: String
  category?: String
  ingredients?: IngredientUpdateManyInput
  comments?: CommentUpdateManyWithoutRecipeInput
  equipments?: EquipmentUpdateManyInput
}

export interface CommentUpdateManyWithoutRecipeInput {
  create?: CommentCreateWithoutRecipeInput[] | CommentCreateWithoutRecipeInput
}

export interface RecipeUpdateManyWithoutCreatorInput {
  create?: RecipeCreateWithoutCreatorInput[] | RecipeCreateWithoutCreatorInput
  connect?: RecipeWhereUniqueInput[] | RecipeWhereUniqueInput
  disconnect?: RecipeWhereUniqueInput[] | RecipeWhereUniqueInput
  delete?: RecipeWhereUniqueInput[] | RecipeWhereUniqueInput
  update?: RecipeUpdateWithWhereUniqueWithoutCreatorInput[] | RecipeUpdateWithWhereUniqueWithoutCreatorInput
  upsert?: RecipeUpsertWithWhereUniqueWithoutCreatorInput[] | RecipeUpsertWithWhereUniqueWithoutCreatorInput
}

export interface EquipmentCreateManyInput {
  create?: EquipmentCreateInput[] | EquipmentCreateInput
  connect?: EquipmentWhereUniqueInput[] | EquipmentWhereUniqueInput
}

export interface EquipmentUpsertWithWhereUniqueNestedInput {
  where: EquipmentWhereUniqueInput
  update: EquipmentUpdateDataInput
  create: EquipmentCreateInput
}

export interface EquipmentCreateInput {
  name: String
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

export interface CommentCreateInput {
  text: String
  author: UserCreateOneInput
  recipe: RecipeCreateOneWithoutCommentsInput
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

export interface EquipmentWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface IngredientUpdateInput {
  name?: String
  price?: Float
}

export interface RecipeUpdateInput {
  name?: String
  description?: String
  process?: String
  likes?: Int
  price?: Float
  nutrition?: String
  category?: String
  ingredients?: IngredientUpdateManyInput
  creator?: UserUpdateOneWithoutRecipesInput
  comments?: CommentUpdateManyWithoutRecipeInput
  equipments?: EquipmentUpdateManyInput
}

export interface RecipeUpdateWithWhereUniqueWithoutCreatorInput {
  where: RecipeWhereUniqueInput
  data: RecipeUpdateWithoutCreatorDataInput
}

export interface IngredientUpdateManyInput {
  create?: IngredientCreateInput[] | IngredientCreateInput
  connect?: IngredientWhereUniqueInput[] | IngredientWhereUniqueInput
  disconnect?: IngredientWhereUniqueInput[] | IngredientWhereUniqueInput
  delete?: IngredientWhereUniqueInput[] | IngredientWhereUniqueInput
  update?: IngredientUpdateWithWhereUniqueNestedInput[] | IngredientUpdateWithWhereUniqueNestedInput
  upsert?: IngredientUpsertWithWhereUniqueNestedInput[] | IngredientUpsertWithWhereUniqueNestedInput
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
  _MagicalBackRelation_CommentToUser_every?: CommentWhereInput
  _MagicalBackRelation_CommentToUser_some?: CommentWhereInput
  _MagicalBackRelation_CommentToUser_none?: CommentWhereInput
}

export interface IngredientUpdateWithWhereUniqueNestedInput {
  where: IngredientWhereUniqueInput
  data: IngredientUpdateDataInput
}

export interface RecipeWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface UserUpdateWithoutRecipesDataInput {
  email?: String
  name?: String
  password?: String
}

export interface UserUpdateOneWithoutRecipesInput {
  create?: UserCreateWithoutRecipesInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutRecipesDataInput
  upsert?: UserUpsertWithoutRecipesInput
}

export interface IngredientUpsertWithWhereUniqueNestedInput {
  where: IngredientWhereUniqueInput
  update: IngredientUpdateDataInput
  create: IngredientCreateInput
}

export interface IngredientUpdateDataInput {
  name?: String
  price?: Float
}

export interface RecipeUpdateWithoutCommentsDataInput {
  name?: String
  description?: String
  process?: String
  likes?: Int
  price?: Float
  nutrition?: String
  category?: String
  ingredients?: IngredientUpdateManyInput
  creator?: UserUpdateOneWithoutRecipesInput
  equipments?: EquipmentUpdateManyInput
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

export interface UserUpdateInput {
  email?: String
  name?: String
  password?: String
  recipes?: RecipeUpdateManyWithoutCreatorInput
}

export interface RecipeUpsertWithWhereUniqueWithoutCreatorInput {
  where: RecipeWhereUniqueInput
  update: RecipeUpdateWithoutCreatorDataInput
  create: RecipeCreateWithoutCreatorInput
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
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

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface Recipe extends Node {
  id: ID_Output
  name: String
  description: String
  ingredients?: Ingredient[]
  creator: User
  process: String
  comments?: Comment[]
  likes: Int
  price: Float
  nutrition: String
  category: String
  equipments?: Equipment[]
}

/*
 * A connection to a list of items.

 */
export interface RecipeConnection {
  pageInfo: PageInfo
  edges: RecipeEdge[]
  aggregate: AggregateRecipe
}

/*
 * An edge in a connection.

 */
export interface IngredientEdge {
  node: Ingredient
  cursor: String
}

export interface AggregateIngredient {
  count: Int
}

export interface User extends Node {
  id: ID_Output
  email: String
  name: String
  password: String
  recipes?: Recipe[]
}

/*
 * A connection to a list of items.

 */
export interface IngredientConnection {
  pageInfo: PageInfo
  edges: IngredientEdge[]
  aggregate: AggregateIngredient
}

export interface AggregateEquipment {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface EquipmentEdge {
  node: Equipment
  cursor: String
}

export interface AggregateUser {
  count: Int
}

export interface Equipment extends Node {
  id: ID_Output
  name: String
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface EquipmentPreviousValues {
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

export interface RecipeSubscriptionPayload {
  mutation: MutationType
  node?: Recipe
  updatedFields?: String[]
  previousValues?: RecipePreviousValues
}

export interface IngredientSubscriptionPayload {
  mutation: MutationType
  node?: Ingredient
  updatedFields?: String[]
  previousValues?: IngredientPreviousValues
}

export interface RecipePreviousValues {
  id: ID_Output
  name: String
  description: String
  process: String
  likes: Int
  price: Float
  nutrition: String
  category: String
}

export interface AggregateRecipe {
  count: Int
}

export interface EquipmentSubscriptionPayload {
  mutation: MutationType
  node?: Equipment
  updatedFields?: String[]
  previousValues?: EquipmentPreviousValues
}

export interface Ingredient extends Node {
  id: ID_Output
  name: String
  price: Float
}

export interface CommentSubscriptionPayload {
  mutation: MutationType
  node?: Comment
  updatedFields?: String[]
  previousValues?: CommentPreviousValues
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface BatchPayload {
  count: Long
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  name: String
  password: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface Comment {
  text: String
  author: User
  recipe: Recipe
}

export interface CommentPreviousValues {
  text: String
}

/*
 * A connection to a list of items.

 */
export interface CommentConnection {
  pageInfo: PageInfo
  edges: CommentEdge[]
  aggregate: AggregateComment
}

export interface AggregateComment {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface EquipmentConnection {
  pageInfo: PageInfo
  edges: EquipmentEdge[]
  aggregate: AggregateEquipment
}

/*
 * An edge in a connection.

 */
export interface RecipeEdge {
  node: Recipe
  cursor: String
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number