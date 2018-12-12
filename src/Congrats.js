import React from 'react'
import PropTypes from 'prop-types'

export default function Congrats(props){
    if(props.success){
      return(
        <div data-test="congrats-message">
          <span data-test='component-congrats'>Congratulations! You guessed the word!</span>
        </div>
      )
    }else{
      return(
        <div data-test="component-congrats"/>
      )
    }
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
}