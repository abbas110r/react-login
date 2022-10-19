import React from 'react';
import classes from './Input.module.css';
function Input(props) {
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>{props.id}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.changeHandler}
        onBlur={props.blurHandler}
      />
    </div>
  );
}
export default Input;
