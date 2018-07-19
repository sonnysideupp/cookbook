import * as React from "react"
import Foodtype from "../foodtype/foodtype"
import FoodWindow from "../card/card"
import FoodSlide from "../carousel/carousel"
import "./home-page.css"
// import Pages from "../pagination/pagination"
import Navbar from "../navbar/navbar"

class HomePage extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedFoodType: "",
      selectedRecipe: ""
    }
  }

  onFoodTypeChange = event => {
    this.setState({ selectedFoodType: event.target.value })
  }

  handleFoodTypeOnChange = selectedOption => {
    this.setState({ selectedFoodType: selectedOption })
  }

  handleRecipeOnChange = selectedOption => {
    this.setState({ selectedRecipe: selectedOption })
  }

  render() {
    return (
      <div className="main">
        <Navbar
          handleRecipeOnChange={this.handleRecipeOnChange}
          history={this.props.history}
        />
        <FoodSlide />
        <Foodtype handleFoodTypeOnChange={this.handleFoodTypeOnChange} />

        <div className="cards">
          <FoodWindow
            selectedRecipe={this.state.selectedRecipe}
            foodType={this.state.selectedFoodType}
          />
          {/* console.log(this.props.selectedFoodType); */}
        </div>

        {/* <Pages /> */}
      </div>
    )
  }
}

export default HomePage
