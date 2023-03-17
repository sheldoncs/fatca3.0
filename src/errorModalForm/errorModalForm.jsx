import React, { useState, useEffect } from "react";
import classes from "./ErrorModalForm.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const ErrorModalForm = React.memo((props) => {
  const { errorMessage } = props;
  const [error, setError] = useState("");

  useEffect(() => {
    setError(errorMessage);
  }, [error, errorMessage]);

  return (
    <div className={classes.ErrorModalForm}>
      <div className={classes.Title}>{props.children}</div>
      <div className={classes.Body}><div className={classes.arrowUp}><div style={{marginLeft:"-2px",width:"1px"}}>!</div></div>{error}</div>
      <div className={classes.Button}>
        <div onClick={props.closeErrorModal} className="btn btn-danger">
          Close
        </div>
      </div>
    </div>
  );
});

export default ErrorModalForm;
