// import * as React from "react"
// import Select from "react-select"
// import Animated from "react-select/lib/animated"
// // import "react-select/dist/react-select.css"

// class Foodtype extends React.Component {
//   state = {
//     selectedOption: ""
//   }
//   handleChange = selectedOption => {
//     this.setState({ selectedOption })
//     // selectedOption can be null when the `x` (close) button is clicked
//     if (selectedOption) {
//       console.log(`Selected: ${selectedOption.label}`)
//     }
//   }
//   render() {
//     const { selectedOption } = this.state

//     return (
//       <Select
//         isMulti={true}
//         components={makeAnimated()}
//         name="form-field-name"
//         value={selectedOption}
//         onChange={this.handleChange}
//         options={[
//           { value: "one", label: "One" },
//           { value: "two", label: "Two" }
//         ]}
//       />
//     )
//   }
// }

// export default Foodtype

import React from "react"

import Select from "react-select"
import makeAnimated from "react-select/lib/animated"
// import { colourOptions } from "../data"

function AnimatedMulti() {
  return (
    <div>
      <Select
        closeMenuOnSelect={false}
        components={makeAnimated()}
        // defaultValue={[colourOptions[4], colourOptions[5]]}
        isMulti
        options={[
          { value: "one", label: "One" },
          { value: "two", label: "Two" }
        ]}
      />

      <Select
        closeMenuOnSelect={false}
        components={makeAnimated()}
        // defaultValue={[colourOptions[4], colourOptions[5]]}
        isMulti
        options={[
          { value: "one", label: "One" },
          { value: "two", label: "Two" }
        ]}
      />
    </div>
  )
}

export default AnimatedMulti
