import React from "react"

import Select from "react-select"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import makeAnimated from "react-select/lib/animated"
import "./foodtype.css"
// import { colourOptions } from "../data"

const GET_INGREDIENTS = gql`
  query ingredients {
    ingredients {
      id
      name
    }
  }
`

function AnimatedMulti(props) {
  return (
    <Query query={GET_INGREDIENTS}>
      {({ data, loading, error }) => {
        if (error) return "error"
        if (loading) return "...lading"
        const ingredients = data.ingredients.map(ingredient => {
          return {
            value: ingredient.id,
            label: ingredient.name
          }
        })
        return (
          <div className="selects">
            <Select
              closeMenuOnSelect={false}
              components={makeAnimated()}
              isMulti
              options={ingredients}
              onChange={props.handleFoodTypeOnChange}
            />
          </div>
        )
      }}
    </Query>
  )
}

export default AnimatedMulti
