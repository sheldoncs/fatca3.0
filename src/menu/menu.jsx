import React from "react";
import {DOCUMENT_HEADER_DATA, DOCUMENT_EDITOR, EXCEL_FILE_FORMATS} from "../ui/constants";
import classes from "./menu.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Menu = (props) => {

    return (
      <div className={classes.Menu}>
        <div className={classes.Options}>
            <div onClick={()=>props.showDocumentHeader()} className="text-center pt-2">{DOCUMENT_HEADER_DATA}</div>
        </div>
        <div className={classes.Line}/>
        <div className={classes.Options}>
            <div className="text-center pt-2">{DOCUMENT_EDITOR}</div>
        </div>
        <div className={classes.Line}/>
        <div className={classes.Options}>
            <div className="text-center pt-2">{EXCEL_FILE_FORMATS}</div>
        </div>
      </div>
    );
}

export default Menu;