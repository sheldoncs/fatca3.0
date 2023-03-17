import React from "react";
import classes from "./processing.module.css";
import loading from "../assets/loading.gif";
const Processing = (props) => {

    return <div className={classes.Processing}><img src={loading} /></div>
}


export default Processing;