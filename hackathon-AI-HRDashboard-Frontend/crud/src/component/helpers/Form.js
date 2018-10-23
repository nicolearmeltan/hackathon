import PropTypes from 'prop-types';
import React from 'react'
import Input from './Input'

const Form = (props) => {
  let Items = []
  for (let index = 0; index < props.container.length; index++) {
    for (let columns = 0; columns < props.container[index].length; columns++) {
      Items.push(
        <Input
          name={props.container[index][columns].name}
          type={props.container[index][columns].type}
          name={props.container[index][columns].name}
          class={props.container[index][columns].class}
          divClass={props.container[index][columns].divClass} />
      )
    }
  }
  
  return (
    <div>
      {Items}
    </div>
  )
}

export default Form