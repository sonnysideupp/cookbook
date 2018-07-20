import * as React from "react"
import Foodtype from "../foodtype/foodtype"
// import Foodtype2 from "../foodtype2/foodtype2"
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
      // selectedFoodType2: "",
      // selectedRecipe2: ""
    }
  }

  onFoodTypeChange = event => {
    this.setState({ selectedFoodType: event.target.value })
  }

  // onFoodTypeChange2 = event2 => {
  //   this.setState({ selectedFoodType2: event2.target.value })
  // }

  handleFoodTypeOnChange = selectedOption => {
    this.setState({ selectedFoodType: selectedOption })
  }

  // handleFoodTypeOnChange2 = selectedOption2 => {
  //   this.setState({ selectedFoodType2: selectedOption2 })
  // }

  handleRecipeOnChange = selectedOption => {
    this.setState({ selectedRecipe: selectedOption })
  }

  // handleRecipeOnChange2 = selectedOption2 => {
  //   this.setState({ selectedRecipe2: selectedOption2 })
  // }

  render() {
    return (
      <div className="main">
        <Navbar
          handleRecipeOnChange={this.handleRecipeOnChange}
          history={this.props.history}
        />
        <FoodSlide />
        <Foodtype handleFoodTypeOnChange={this.handleFoodTypeOnChange} />
        {/* <Foodtype2 handleFoodTypeOnChange={this.handleFoodTypeOnChange} /> */}

        <div className="cards">
          <FoodWindow
            history={this.props.history}
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
