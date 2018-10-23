import PropTypes from "prop-types";
import React from "react";
import { validate } from "./Validation";
import Small from "./Small";
import Loader from "./Loader";

const defaultValues = {
  forDiv: "row",
  forClass: "form-control",
  forLabel: "col-sm-3 col-form-label text-right",
  forGroup: "input-group col-sm-8",
  forPrepend: "input-group-prepend",
  forAppend: "input-group-append",
  colorPrepend: "black",
  colorAppend: "black",
  spanPrepend: "input-group-text",
  spanAppend: "input-group-text",
  required: false
};

const Input = props => {
  return (
    <div>
      <div
        className={
          props.divClass == undefined ? defaultValues.forDiv : props.divClass
        }
      >
        <label
          htmlFor={props.name}
          className={
            props.labelClass == undefined
              ? defaultValues.forLabel
              : props.labelClass
          }
        >
          {props.title}
        </label>
        <div
          className={
            props.groupClass == undefined
              ? defaultValues.forGroup
              : props.groupClass
          }
        >
          {props.prepend != undefined || props.prependIcon != undefined ? (
            <div
              className={
                props.prependClass == undefined
                  ? defaultValues.forPrepend
                  : props.prependClass
              }
            >
              <span
                className={
                  props.spanPrepend == undefined
                    ? defaultValues.spanPrepend
                    : props.spanPrepend
                }
              >
                {props.prependIcon == undefined ? null : (
                  <i className={props.prependIcon} style={{color: props.prependColor ? props.prependColor : defaultValues.colorPrepend}} />
                )}
                {props.prepend}
              </span>
            </div>
          ) : null}
          <input
            type={props.type}
            className={
              props.class == undefined ? defaultValues.forClass : props.class
            }
            id={props.name}
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
            autoComplete={props.autoComplete}
            onChange={props.onChange}
            onKeyUp={props.onKeyUp}
            onBlur={props.onBlur}
            required={
              props.required == undefined
                ? defaultValues.required
                : props.required
            }
          />
          {props.append != undefined || props.appendIcon != undefined ? (
            <div
              className={
                props.appendClass == undefined
                  ? defaultValues.forAppend
                  : props.appendClass
              }
            >
              <span
                className={
                  props.spanAppend == undefined
                    ? defaultValues.spanAppend
                    : props.spanAppend
                }
              >
                {props.appendIcon == undefined ? null : (
                  <i className={props.appendIcon} />
                )}
                {props.append}
              </span>
            </div>
          ) : (
            <div
              className={
                props.appendClass == undefined
                  ? defaultValues.forAppend
                  : props.appendClass
              }
            >
              <span
                className={
                  props.spanAppend == undefined
                    ? defaultValues.spanAppend
                    : props.spanAppend
                }
                style={{"width": "42px"}}
              >
                {props.validationClass ? <i className={props.validationClass} 
                style={{"color": props.validationClass == "glyphicon glyphicon-ok" ? "green" : "red"}}/> : <span></span>}
              </span>
            </div>
          )}
        </div>
        <div style={{"position": "relative", "textAlign": "center", "color": "red"}}>{props.small}</div>
        {props.small ? (
          <Small
            name={props.name}
            title={props.small}
            class={props.smallClass}
          />
        ) : null}
      </div>
      
    </div>
  );
};

Input.propTypes = {
  divClass: PropTypes.string,
  class: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.any,
  onChange: PropTypes.func,
  required: PropTypes.bool
};

export default Input;
