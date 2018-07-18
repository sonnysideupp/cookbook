import * as React from "react"
import { Link } from "react-router-dom"
import "./my-profile.css"
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap"
import Navigation from "../navbar/navbar"

class MyProfile extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Navigation className="navbar" />
        </div>
        <h1 id="header">MY PROFILE PAGE</h1>
        <div className="likedposts">
          <h2 id="likedtitle">LIKED POSTS</h2>
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
          <h2 id="myrecipestitle">MY RECIPES</h2>
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
          <div>
            <Link to="/">
              <button type="button">NEW POST</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default MyProfile
