import React, {useState} from "react";
import classes from "./login.css";
import Input from "../input/input";

const Login = () => {

    const [loginForm, setLoginForm] = useState({
        username: {
          elementType: "input",
          visibility: "visible",
          elementConfig: { type: "text", placeholder: "" },
          elementName: "Username",
          value: "",
          validation: {
            required: true,
            minLength: 8,
          },
          exist: false,
          valid: false,
          touched: false,
        },
    
        password: {
          elementType: "input",
          elementConfig: { type: "password", placeholder: "" },
          value: "",
          elementName: "Password",
          validation: {
            required: true,
            minLength: 8,
          },
          valid: false,
          touched: false,
          exist: false,
        },
      });

      return (
      <div className={classes.Login}>

      </div>
      );
}

export default Login;