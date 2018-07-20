import * as React from "react"
import "./post.css"
import img from "./img/food_post.png"
import { Jumbotron, Container } from "reactstrap"
import "font-awesome/css/font-awesome.min.css"
import Navbar from "../navbar/navbar"
import FaClockO from "react-icons/lib/fa/clock-o.js"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import CommentForm from "../commentrecipe/commentrecipe"

const GET_ALL_RECIPES = gql`
  query myRecipesQuery($where: RecipeWhereInput) {
    recipes(where: $where) {
      id
      name
      description
      process
      price
      nutrition
      pictureUrl
      comments {
        text
        author {
          name
        }
      }
      ingredients {
        name
      }
      likes {
        id
        author {
          name
        }
      }
    }
  }
`

class Post extends React.Component {
  getComponent(event) {
    console.log("item clicked!")
    return (event.style = { color: "red" })
  }

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron>
          <Query
            variables={{
              where: {
                name: this.props.match.params.recipename
              }
            }}
            query={GET_ALL_RECIPES}
          >
            {({ loading, error, data, refetch }) => {
              if (loading) {
                return "LOading..."
              }
              if (error) {
                return "OOps, somehing blew up."
              }
              return (
                <div>
                  {data.recipes.map(recipe => {
                    return (
                      <div>
                        <div className="post_img">
                          <img
                            className="post_imgs"
                            src={{ url: recipe.pictureUrl }}
                            alt={"img"}
                          />
                        </div>
                        <h1 className="title">{recipe.name}</h1>
                        <p className="recipedescription">
                          {recipe.description}
                        </p>
                        <p className="recipeprice">${recipe.price}</p>
                        <p className="calories">{recipe.nutrition}</p>

                        <h2 id="directions">Directions</h2>
                        <p className="process">{recipe.process}</p>
                        <p className="ingredients">{recipe.ingredients.name}</p>
                        <p>
                          <i
                            className="fa fa-heart"
                            onClick={this.getComponent.bind(this)}
                          />{" "}
                          like <FaClockO /> mins
                        </p>
                        <p>
                          <h3 id="review">Reviews</h3>
                        </p>
                        <CommentForm
                          id="commentbutton"
                          recipename={this.props.match.params.recipename}
                        />
                        <p className="comments">{recipe.comments[0].text}</p>
                      </div>
                    )
                  })}
                </div>
              )
            }}
          </Query>
        </Jumbotron>
      </div>
    )
  }
}

export default Post
