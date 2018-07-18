import * as React from "react"
import "./post.css"
import img from "./img/food_post.png"
import { Jumbotron, Container } from "reactstrap"
import "font-awesome/css/font-awesome.min.css"
import Navbar from "../navbar/navbar"
import FaClockO from "react-icons/lib/fa/clock-o.js"

class Post extends React.Component {
  getComponent(event) {
    console.log("item clicked!")
    return (event.style = { color: "red" })
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="post_img">
          <img className = "post_imgs" src={img} alt={"img"} />
        </div>
        <Jumbotron>
          <Container>
            <div className="descrip">
              <h3>Title</h3>
              <p className="lead">Description</p>
              <hr />
              <p>
                <i
                  className="fa fa-heart"
                  onClick={this.getComponent.bind(this)}
                />{" "}
                like!
                <FaClockO /> mins
              </p>
            </div>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}

export default Post
