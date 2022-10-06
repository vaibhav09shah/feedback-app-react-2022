import React from 'react'

// Type checking
import propTypes from 'prop-types'

// Without destructuring
// function Header(props) {
//   return (
//     <header>
//         <div className="container">
//             <h2>{props.text}</h2>
//         </div>
//     </header>
//   )
// }

// With destructuring
function Header({ text, textColor, bgColor }) {
    
    const headerStyles = { 
       backgroundColor: bgColor,
       color: textColor
    }

    return (
      <header style={headerStyles}>
          <div className="container">
              <h2>{text}</h2>
          </div>
      </header>
    )
  }

// Add default props to a functional component
Header.defaultProps = {
    text: 'Feedback UI Default Prop',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}

// Add props types
Header.propTypes = {
    text: propTypes.string
}

export default Header