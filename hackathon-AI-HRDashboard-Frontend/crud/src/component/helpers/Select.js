import PropTypes from 'prop-types';
import React from 'react'

const defaultValues = {
  forDiv: "form-group row",
  forClass: "form-control",
  forLabel: "col-sm-3 col-form-label",
  forGroup: "input-group mb-3 col-sm-8",
  forPrepend: "input-group-prepend",
  forAppend: "input-group-append",
  spanPrepend: "input-group-text",
  spanAppend: "input-group-text",
  required: false
}

const Select = (props) => {
  let values = [];
  for (let index = 0; index < props.values.length; index++) {
    values.push(
      "defaultValue" in props.values[index] ?
        <option key={index} defaultValue={true}>{props.values[index].value}</option> :
        <option key={index}>{props.values[index].value}</option>
    )
  }
  return (
    <div className={props.divClass == undefined ? defaultValues.forDiv : props.divClass}>
      <label htmlFor={props.name} className={props.labelClass == undefined ? defaultValues.forLabel : props.labelClass}>{props.title}</label>
      <div className={props.groupClass == undefined ? defaultValues.forGroup : props.groupClass}>
        {
          props.prepend != undefined || props.prependIcon != undefined ?
            <div className={props.prependClass == undefined ? defaultValues.forPrepend : props.prependClass}>
              <span className={props.spanPrepend == undefined ? defaultValues.spanPrepend : props.spanPrepend}>
                {props.prependIcon == undefined ? null : <i className={props.prependIcon}></i>}
                {props.prepend}
              </span>
            </div> :
            null
        }
        <select id={props.name} className={props.class == undefined ? defaultValues.forClass : props.class}>
          {values}
        </select>
        {
          props.append != undefined || props.appendIcon != undefined ?
            <div className={props.appendClass == undefined ? defaultValues.forAppend : props.appendClass}>
              <span className={props.spanAppend == undefined ? defaultValues.spanAppend : props.spanAppend}>
                {props.appendIcon == undefined ? null : <i className={props.appendIcon}></i>}
                {props.append}
              </span>
            </div> :
            null
        }
      </div>
    </div>
  )
}

Select.propTypes = {
  divClass: PropTypes.string,
  class: PropTypes.string,
  name: PropTypes.string.isRequired,
  values: PropTypes.array,
  onChange: PropTypes.func,
  required: PropTypes.bool
}

export default Select