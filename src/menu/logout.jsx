import React from "react";
import {LOGOUT} from "../ui/constants";
import classes from "./menu.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Logout = (props) => {
    let joinClasses = [classes.Menu, classes.LogoutMenu];

    return (
        <div className={joinClasses.join(" ")}>
            <div className={classes.Options}>
                <div className="text-center pt-2">{LOGOUT}</div>
            </div>
        </div>
    );
}

export default Logout;