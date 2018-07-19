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

const GET_ALL_PROFILES = gql`
  query myRecipesQuery {
    allrecipes {
      name
      # creator {
      #   name
      # }
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
    return (
      <Query query={GET_ALL_PROFILES}>
        {({ loading, error, data, refetch }) => {
          if (loading) {
            return "Loading..."
          }

          if (error) {
            return "Oops, something blew up."
          }

          return (
            <div>
              {data.allrecipes.map(recipe => {
                console.log(recipe)
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
