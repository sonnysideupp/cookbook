import React, { Component } from "react"
import Search from "react-search-box"
// import Dropdown from "react-dropdown"
import DropdownLogin from "../dropdown-login/dropdown-login"
// import ToggleButton from "react-toggle-button"
import { Query } from "react-apollo"

import "./navigation.css"

const GET_ALL_PROFILES = gql`
  query myRecipesQuery {
    allrecipes {
      name
      # creator {
      #   name
      # }
      description
      price
      likes {
        author {
          name
        }
      }
    }
  }
`

class Navigation extends Component {
  constructor() {
    super()

    this.state = {
      data: [],
      loading: false
    }
  }

  handleChange(value) {
    console.log(value)
  }

  render() {
    if (this.state.loading) {
      return <div className="app__loading">Loading...</div>
    }

    return (
      <Query query={GET_ALL_PROFILES}>
        {({ loading, error, data, refetch }) => {
          if (loading) {
            return "Loading..."
          }

          if (error) {
            return "Oops, something blew up."
          }

          return (
            <div>
              {data.allrecipes.map(recipe => {
                console.log(recipe)
                return (
                  <div className="content__search content__search--with-full_name">
                    <div className="search__component">
                      <Search
                        data={recipe.name}
                        onChange={this.handleChange.bind(this)}
                        placeholder="Search for a recipe..."
                        class="search-class"
                        searchKey="full_name"
                      />
                    </div>

                    <DropdownLogin />
                  </div>
                )
              })}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default Navigation
