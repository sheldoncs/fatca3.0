import React, { useState } from "react";
import { useSelector } from "react-redux";

import classes from "./setupheader.module.css";
import Input from "../input/input";
import { XML_HEADER_SETUP } from "../ui/constants";
import Calendar from "../assets/calendar.png"
import { getCompanyName } from "../util/fatca_api";


const SetupHeader = (props) => {

  const [saveData, setSaveData] = useState(false);
  const [settingForm, setSettingForm] = useState({
    sendingCompany: {
      elementType: "input",
      visibility: "visible",
      elementConfig: { type: "text", placeholder: "Sending Company" },
      label: "Sending Company",
      elementName: "sendingCompany",
      value: "",
      validation: {
        required: true,
        minLength: 8,
      },
      exist: false,
      valid: false,
      touched: false,
    },

    transmittingCountry: {
      elementType: "input",
      elementConfig: { type: "text", placeholder: "" },
      label: "Transmitting Country",
      value: "",
      elementName: "transmittingCountry",
      validation: {
        required: true,
        minLength: 8,
      },
      valid: false,
      touched: false,
      exist: false,
    },
    receivingCountry: {
      elementType: "input",
      elementConfig: { type: "text", placeholder: "" },
      value: "",
      elementName: "receivingCountry",
      label: "Receiving Country",
      validation: {
        required: true,
        minLength: 4,
      },
      valid: false,
      touched: false,
      exist: false,
    },
    messageType: {
      elementType: "input",
      elementConfig: { type: "text", placeholder: "" },
      value: "",
      elementName: "messageType",
      label: "Message Type",
      validation: {
        required: true,
        minLength: 4,
      },
      valid: false,
      touched: false,
      exist: false,
    },
    messageRefId: {
      elementType: "input",
      elementConfig: { type: "text", placeholder: "" },
      value: "",
      elementName: "messageRefId",
      label: "Message Ref Id",
      validation: {
        required: true,
        minLength: 45,
      },
      valid: false,
      touched: false,
      exist: false,
    },
    messageTypeIndic: {
      elementType: "input",
      elementConfig: { type: "text", placeholder: "" },
      value: "",
      elementName: "messageTypeIndic",
      label: "Message Type Indic",
      validation: {
        required: true,
        minLength: 45,
      },
      valid: false,
      touched: false,
      exist: false,
    },
    reportingPeriod: {
      elementType: "input",
      elementConfig: { type: "text", placeholder: "" },
      value: "",
      elementName: "reportingPeriod",
      label: "Reporting Period",
      validation: {
        required: true,
        minLength: 45,
      },
      valid: false,
      touched: false,
      exist: false,
    },
    reportingTimeStamp: {
      elementType: "input",
      elementConfig: { type: "text", placeholder: "" },
      value: "",
      elementName: "reportingTimeStamp",
      label: "Reporting TimeStamp",
      validation: {
        required: true,
        minLength: 45,
      },
      valid: false,
      touched: false,
      exist: false,
    },
  });
  const changeHandler = (event) => {

  }
  const setupForm = () => {


    return (
      Object.keys(settingForm).map((field, index) => {

        return (
          <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <div key={index} style={{ margin: "6px", width: "100%" }}>
              <Input
                id={settingForm[field].id}
                changed={(event) => {
                  changeHandler(event);
                }}
                elementType={settingForm[field].elementType}
                elementConfig={settingForm[field].elemConfig}
                value={settingForm[field].id}
                elementName={settingForm[field].elementName}
                label={settingForm[field].label}
              />
            </div>

          </div>

        );
      })
    );
  }

  return (
    <div className={classes.SetupHeader}>

      <div className={classes.HeaderContainer}>
        <div className={classes.Header}>
          <div className={classes.Title}>{XML_HEADER_SETUP}</div>
          <div className={classes.CloseContainer} onClick={props.closeClick}>{"X"}</div>
        </div>
        <div className={classes.Line} />
        <div className={classes.FieldContainer}>{setupForm()}</div>
        <div style={{ display: "flex", width: "340px", flexDirection: "row", margin: "auto", marginBottom: "70px" }}>
          <div style={{ margin: "2px", }}><div className={[classes.Button, "btn", "btn-primary"].join(" ")} style={{ width: "165px", fontSize: "12px", }} disabled={!saveData} >{"SAVE"}</div></div>
          <div style={{ margin: "2px", }}><div className={[classes.Button, "btn", "btn-dark"].join(" ")} style={{ width: "165px", fontSize: "12px" }} onClick={props.closeClick} >{"CLOSE"}</div></div>
        </div>
      </div>

    </div>

  );
}

export default SetupHeader;