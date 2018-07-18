import * as React from "react"
import { Link } from "react-router-dom"
import Navigation from "../navbar/navbar"
import "./my-profile.css"
import gql from "graphql-tag"
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap"
import { Query } from "react-apollo"

const GET_RECIPES = gql`
  query {
    recipes(where: RecipeWhereInput) {
      # pictureURL
      name
      creator {
        name
      }
      category
    }
  }
`

class MyProfile extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Navigation className="navbar" />
        </div>
        <h1 id="header">My Profile</h1>
        <div>
          <Link to="/my-profile/create-recipe">
              <button type="button" className="newrecipebutton">Create new recipe!</button>
            </Link>
        </div>
        <div className="likedposts">
          <h2 className="likedtitle" id="likedtitle">LIKED POSTS</h2>
          <div>
            <Query query={GET_RECIPES}>
              {({ loading, error, data }) => {
                if (loading) {
                  return "Loading..."
                }
                if (error) {
                  return "Oops, something blew up."
                }
                return <div>test</div>
              }}
            </Query>
          </div>
          <div>
            <Card>
              <CardImg
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="myrecipes">
          <h2 className="myrecipestitle" id="myrecipestitle">MY RECIPES</h2>
          <div>
            <Card>
              <CardImg
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default MyProfile
