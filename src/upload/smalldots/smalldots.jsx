import React from "react";
import classes from "./smalldots.module.css";
import Settings from "../../assets/settings.png";
const Smalldots = (props) => {

    return (
    
         <div onClick={props.click} className={classes.Smalldots}>
             <img src={Settings}/>
         </div>

    );
}


export default Smalldots;