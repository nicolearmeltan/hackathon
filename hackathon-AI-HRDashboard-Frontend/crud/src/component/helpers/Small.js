import PropTypes from "prop-types";
import React from "react";

const defaultValues = {
  forClass: "form-text text-muted"
};

const Small = props => {
  return (
    <div>
      <small
        id={props.name}
        name={props.name}
        className={
          props.class == undefined ? defaultValues.forClass : props.class
        }
      >
        {props.title}
      </small>
    </div>
  );
};

Small.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.any.isRequired,
  className: PropTypes.string
};

export default Small;
