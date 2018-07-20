import React from "react"

import Select from "react-select"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import makeAnimated from "react-select/lib/animated"
import "./foodtype2.css"

const GET_MONEY = gql`
<<<<<<< HEAD
  query allrecipes {
    allrecipes {
      id
      name
      price
    }
  }
=======
    query prices {
        prices {
            id
            // name of the food
            name
        }
    }
>>>>>>> d26d8f093ca5681c96d514c7ad457e7bbe87944f
`

function AnimatedMulti(props) {
  return (
    <Query query={GET_MONEY}>
      {({ data, loading, error }) => {
<<<<<<< HEAD
        if (error) return "error getting price"
        if (loading) return "...loading"
        const prices = data.allrecipes.map(recipe => {
          return {
            value: recipe.id,
            label: recipe.price
=======
        if (error) return "error"
        if (loading) return "...loading"
        const prices = data.prices.map(price => {
          return {
            value: price.id,
            label: price.name
>>>>>>> d26d8f093ca5681c96d514c7ad457e7bbe87944f
          }
        })
        return (
          <div className="selects">
            <Select
              closeMenuOnSelect={false}
              components={makeAnimated()}
              isMulti
              options={prices}
              onChange={props.handleFoodTypeOnChange}
            />
          </div>
        )
      }}
    </Query>
  )
}

export default AnimatedMulti
