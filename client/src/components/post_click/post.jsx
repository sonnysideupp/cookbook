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
const image = [
  require("./1.png"),
  require("./2.png"),
  require("./3.png"),
  require("./4.png"),
  require("./5.png"),
  require("./6.png")
]

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
                      <Container>
                        <div className="post_img">
                          <img
                            className="post_imgs"
                            src={image[recipe.price - 1]}
                            alt={"img"}
                          />
                        </div>
                        <div className="descrip">
                          <h3 className="title">{recipe.name}</h3>
                          <p className="recipedescription">
                            {recipe.description}
                          </p>
                          <p className="recipeprice">${recipe.price}</p>
                          <p className="process">{recipe.process}</p>
                          <p className="calories">{recipe.nutrition}</p>
                          <p className="ingredients">
                            {recipe.ingredients.name}
                          </p>
                          {recipe.comments.length >= 1 ? (
                            <p className="comments">
                              {" "}
                              {recipe.comments[0].text}{" "}
                            </p>
                          ) : null}

                          {recipe.comments.length >= 2 ? (
                            <p className="comments">
                              {" "}
                              {recipe.comments[1].text}{" "}
                            </p>
                          ) : null}

                          {recipe.comments.length >= 3 ? (
                            <p className="comments">
                              {" "}
                              {recipe.comments[2].text}{" "}
                            </p>
                          ) : null}

                          {recipe.comments.length >= 4 ? (
                            <p className="comments">
                              {" "}
                              {recipe.comments[3].text}{" "}
                            </p>
                          ) : null}

                          {recipe.comments.length >= 5 ? (
                            <p className="comments">
                              {" "}
                              {recipe.comments[4].text}{" "}
                            </p>
                          ) : null}

                          {recipe.comments.length >= 6 ? (
                            <p className="comments">
                              {" "}
                              {recipe.comments[5].text}{" "}
                            </p>
                          ) : null}

                          {recipe.comments.length >= 7 ? (
                            <p className="comments">
                              {" "}
                              {recipe.comments[6].text}{" "}
                            </p>
                          ) : null}

                          {recipe.comments.length >= 8 ? (
                            <p className="comments">
                              {" "}
                              {recipe.comments[7].text}{" "}
                            </p>
                          ) : null}

                          <p>
                            <i
                              className="fa fa-heart"
                              onClick={this.getComponent.bind(this)}
                            />{" "}
                            like <FaClockO /> mins
                          </p>
                          <CommentForm
                            history={this.props.history}
                            recipename={this.props.match.params.recipename}
                          />
                        </div>
                      </Container>
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
