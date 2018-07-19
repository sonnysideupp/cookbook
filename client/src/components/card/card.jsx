import * as React from "react"
import gql from "graphql-tag"
import { Mutation, Query } from "react-apollo"
import "./card.css"

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap"

const GET_ALL_RECIPES = gql`
  query myRecipesQuery($where: RecipeWhereInput) {
    recipes(where: $where) {
      name
      description
      price
      likes {
        author {
          name
        }
      }
    }
  }
`

const LIKE = gql`
  mutation likeARecipe($name: String!) {
    likerecipe(name: $name) {
      likes {
        author {
          name
        }
      }
    }
  }
`

class FoodWindow extends React.Component {
  // const text = this.state.liked ? 'Unlike' : 'Like!';

  state = {
    like: false
  }

  handleClick = () => {
    this.setState({ liked: !this.state.liked })
  }

  render() {
    const { foodType, selectedRecipe } = this.props
    console.log({
      selectedRecipe: selectedRecipe
    })
    const hasFoodFilter = foodType && foodType.length > 0

    const hasRecipeFilter = selectedRecipe && selectedRecipe.length !== 0

    const foodTypesIDS =
      foodType &&
      foodType.map(foodType => {
        return foodType.value
      })

    let where = {}

    if (hasFoodFilter) {
      where = {
        ingredients_some: {
          id_in: foodTypesIDS
        }
      }
    }

    if (hasRecipeFilter) {
      where = {
        ...where,
        id: selectedRecipe.value
      }
    }

    return (
      <Query
        query={GET_ALL_RECIPES}
        variables={{
          where: where
        }}
      >
        {({ loading, error, data, refetch }) => {
          if (loading) {
            return "Loading..."
          }

          if (error) {
            return "Oops, something blew up."
          }

          if (!data.recipes) return "no data yet.."

          return (
            <div className="card_flex">
              {data.recipes.map(recipe => {
                console.log(this.props.foodType)
                return (
                  <div className="each_card">
                    <Card>
                      <CardImg
                        className="image"
                        top
                        width="100%"
                        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                        alt="Card image cap"
                      />
                      <CardBody>
                        <CardTitle>{recipe.name}</CardTitle>
                        {/* <CardSubtitle>{recipe.creator.name}</CardSubtitle> */}
                        <CardText>{recipe.description}</CardText>
                        <CardText>{recipe.price}</CardText>

                        <Mutation mutation={LIKE}>
                          {(likerecipe, { data, error }) => {
                            return (
                              <div>
                                <Button
                                  color="danger"
                                  onClick={async () => {
                                    await likerecipe({
                                      variables: {
                                        name: recipe.name
                                      }
                                    })
                                    this.handleClick()
                                  }}
                                >
                                  {this.state.liked ? "Unlike" : "Like!"}
                                </Button>
                              </div>
                            )
                          }}
                        </Mutation>
                        <CardText>
                          {recipe.likes && recipe.likes.length}
                        </CardText>
                      </CardBody>
                    </Card>
                  </div>
                )
              })}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default FoodWindow
