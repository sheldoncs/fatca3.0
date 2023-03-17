import React from "react";
import classes from "./Slideout.module.css";

const Shade = (props) => {
  return props.show ? (
    <div className={classes.shade} onClick={() => props.click()}></div>
  ) : (
    <div></div>
  );
};

export default Shade;
