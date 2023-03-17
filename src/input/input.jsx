import React from "react";
import classes from "./input.module.css";
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Input = (props) => {
  let inputElement = null;

  let inputClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  let validationError = null;
  if (props.invalid && props.touched) {
    validationError = (
      <p style={{ color: "red" }}>Please enter a valid value!</p>
    );
  }

  inputClasses.push("form-control");
  inputClasses.push(classes.InputColor);
  if (props.elementType === "input") {
  }
  if (props.elementType !== undefined) {
    // alert(props.elementType);
  }

  switch (props.elementType) {
    case "input":

      if (props.elementName !== "Password") {

        inputElement = (
          <div>
            <TextField id={props.elementName}
              className={inputClasses.join(" ")}
              onChange={props.changed}

              size="small"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {props.elementName === "reportingPeriod" ? <CalendarMonthIcon /> : null}
                  </InputAdornment>
                ),
                style: {
                  fontSize: 14,
                  height: 60,
                  width: 335,
                  // padding: '0 14px',
                  fontWeight: 'bold'
                },
              }}
              label={props.label} variant="outlined" />
            {/* <input
              autoFocus
              onFocus={props.handleFocus}
              onChange={props.changed}
              className={inputClasses.join(" ")}
              {...props.elementConfig}
              name={props.elementName}
              id={props.elementName}
              placeholder={props.elementName}
            /> */}
          </div>
        );
      } else {
        inputElement = (
          <input
            onChange={props.changed}
            className={inputClasses.join(" ")}
            {...props.elementConfig}
            // value={props.value}
            name={props.elementName}
            id={props.elementName}
            placeholder={props.elementName}
          />
        );
      }
      break;
    case "date":
      inputElement = (
        <input
          onChange={props.changed}
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          name={props.elementName}
          id={props.elementName}
        />
      );
      break;
    case "radio":

      inputElement = (
        <input
          className={classes.radioContainer}
          onChange={props.changed}
          {...props.elementConfig}
          value={props.value}
          name={props.elementName}
          id={props.elementName}
        />

      );
      break;
    case "file":
      inputElement = (
        <div>
          <label htmlFor={props.elementName} className={classes.uploadlabel}>
            <div className="">
              {"CLICK TO UPLOAD"}
            </div>
          </label>
          <input
            onChange={props.changed}
            className={inputClasses.join(" ")}
            {...props.elementConfig}
            value={props.value}
            name={props.elementName}
            id={props.elementName}
            hidden
          />

          <span className="ml-3 mt-3">
            <b>{props.message}</b>
          </span>
        </div>
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          onChange={props.changed}
          className={inputClasses.join()}
          {...props}
        />
      );
      break;
    case "checkbox":
      console.log()
      inputElement = (
        <input
          onChange={props.changed}
          // className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          name={props.elementName}
          id={props.elementName}
          checked={props.checked}
        >
          {props.value}
        </input>
      );
      break;
    case "select":
      if (props.elementConfig !== undefined) {
        inputElement = (
          <select onChange={props.changed} className={classes.Select}>
            {props.elementConfig.selectoptions.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.displayValue}
                </option>
              );
            })}
          </select>
        );
      }
      break;
    default:
      inputElement = (
        <input
          key={props.key}
          onChange={props.changed}
          className={inputClasses.join(" ")}
          {...props.elementconfig}
          value={props.value}
          name={props.elementName}
          id={props.elementName}
          type={props.visibility}
        />
      );
  }

  return (
    <div className={inputClasses}>
      {inputElement}
      {validationError}
    </div>
  );
};

export default Input;
