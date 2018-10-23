import PropTypes from 'prop-types';
import React from 'react'

const defaultValues = {
  forDiv: "form-check",
  forClass: "form-check-input",
  forLabel: "form-check-label"
}

const CheckBox = (props) => {
  return (
    <div className={props.divClass == undefined ? defaultValues.forDiv : props.divClass}>
      <input type="checkbox"
        className={props.class == undefined ?
          defaultValues.forClass :
          props.class}
        id={props.name} />
      <label className={props.labelClass == undefined ?
        defaultValues.forLabel :
        props.labelClass}
        htmlFor={props.name}>
        {props.title}
      </label>
    </div>
  )
}

CheckBox.propTypes = {
  divClass: PropTypes.string,
  class: PropTypes.string,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default CheckBox