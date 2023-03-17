import React from "react";
import classes from "./Popup.module.css";
import { useHistory } from "react-router-dom";

const Popup = (props) => {
  const history = useHistory();

  const navigate = (val) => {
    if (val === "home") {
      // history.push("/");
    } else if (val === "inquire") {
      // history.push("/contact");
    }
  };
  return (
    <div className={classes.Popup}>
      <div className={classes.Item}>
        <div className="text-center" onClick={() => props.click("home")}>
          Home
        </div>
      </div>
      <div className={classes.Line}></div>
      <div className={classes.Item}>
        <div className="text-center" onClick={() => props.click("reports")}>
          Reporting
        </div>
      </div>
      <div className={classes.Line}></div>
      <div className={classes.Item}>
        <div className="text-center" onClick={() => props.click("inquire")}>
          Inquiries
        </div>
      </div>
    </div>
  );
};

export default Popup;
