import React from "react";
/*
export const ACCOUNT_NUMBER = "ACCOUNT NUMBER";
export const LAST_NAME = "LAST NAME";
export const FIRST_NAME = "FIRST NAME";
export const DATE_OF_BIRTH = "DATE OF BIRTH";
export const SSN = "SSN";
export const CURRENT_CITY_AND_ADDRESS = "CURRENT CITY AND ADDRESS";
export const STATE = "STATE";
export const COUNTRY = "COUNTRY";
export const ZIP = "ZIP";
export const AMOUNT = "AMOUNT";
export const INTEREST = "PAYMENTS (INTEREST)";
export const INDIVIDUAL = "INDIVIDUAL";

*/ 
import {
    ACCOUNT_NUMBER,
    LAST_NAME,
    FIRST_NAME,
    DATE_OF_BIRTH,
    SSN,
    CURRENT_CITY_AND_ADDRESS,
    STATE,
    COUNTRY,
    ZIP,
    AMOUNT,
    INTEREST,
    INDIVIDUAL,
} from "../ui/constants";
import classes from "./formats.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Formats = (props) => {
   
    return (
        <div className={classes.Format}>
            <div className={classes.Title}>{"FATCA"}</div>
            <div className={classes.FormatContainer}>
              <div className={classes.Cell}><div className="text-center">{ACCOUNT_NUMBER}</div></div>
              <div className={classes.Cell}><div className="text-center">{LAST_NAME}</div></div>
              <div className={classes.Cell}><div className="text-center">{FIRST_NAME}</div></div>
              <div className={classes.Cell}><div className="text-center">{DATE_OF_BIRTH}</div></div>
              <div className={classes.Cell}><div className="text-center">{SSN}</div></div>
              <div className={classes.Cell}><div className="text-center">{CURRENT_CITY_AND_ADDRESS}</div></div>
              <div className={classes.Cell}><div className="text-center">{STATE}</div></div>
              <div className={classes.Cell}><div className="text-center">{COUNTRY}</div></div>
              <div className={classes.Cell}><div className="text-center">{ZIP}</div></div>
              <div className={classes.Cell}><div className="text-center">{AMOUNT}</div></div>
              <div className={classes.Cell}><div className="text-center">{INTEREST}</div></div>
              <div className={classes.Cell}><div className="text-center">{INDIVIDUAL}</div></div>
            </div>
        </div>
    );
}

export default Formats;