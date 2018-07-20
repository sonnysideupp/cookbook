import React from "react"

import Select from "react-select"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import makeAnimated from "react-select/lib/animated"
import "./foodtype2.css"

const GET_MONEY = gql`
    query prices {
        prices {
            id
            // name of the food
            name
        }
    }
`

function AnimatedMulti(props) {
  return (
    <Query query={GET_MONEY}>
      {({ data, loading, error }) => {
        if (error) return "error"
        if (loading) return "...loading"
        const prices = data.prices.map(price => {
          return {
            value: price.id,
            label: price.name
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
