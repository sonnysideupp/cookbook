import * as React from "react"
import Foodtype from "../foodtype/foodtype"
import FoodWindow from "../card/card"
import FoodSlide from "../carousel/carousel"
import "./home-page.css"
import Pages from "../pagination/pagination"
import Navbar from "../navbar/navbar"

class HomePage extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedFoodType: ""
    }
  }

  onFoodTypeChange = event => {
    this.setState({ selectedFoodType: event.target.value })
  }

  render() {
    return (
      <div className="main">
        <Navbar history={this.props.history} />
        <FoodSlide />
        <Foodtype />

        <div className="cards">
          <FoodWindow />
        </div>

        <Pages />
      </div>
    )
  }
}

export default HomePage
