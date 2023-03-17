import React, { useState, useEffect } from "react";
import classes from "./ModalForm.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const ModalForm = React.memo((props) => {
  const { message } = props;
  const [display, setDisplay] = useState("");

  useEffect(() => {
    setDisplay(message);
  }, [display, message]);

  return (
    <div className={classes.ModalForm}>
      <div className={classes.Title}>{props.children}</div>
      <div className={classes.Body}><div className={classes.arrowUp}><div style={{marginLeft:"-2px",width:"1px"}}>!</div></div>{display}</div>
      <div className={classes.Button}>
        <div onClick={props.closeModal} className="btn btn-success">
          Close
        </div>
      </div>
    </div>
  );
});

export default ModalForm;
