import React, { useState } from 'react';
import Input from "../input/input";
import classes from "./FileType.module.css";

const FileType = ({ radioChangeHandler }) => {

    const [reportOption, setReportOption] = useState({
        fatcaRadio: {
            label: "FATCA",
            id: "fatca",
            key: "fatca",
            elementType: "radio",
            elemConfig: { type: "radio" },
            value: "FATCA",
            name: "radioOpts",
            validation: {
                required: true,
            },
            valid: true,
            touched: false,
            exist: false,
            checked: false,

        },
        crsRadio: {
            label: "CRS",
            id: "crs",
            key: "crs",
            elementType: "radio",
            elemConfig: { type: "radio" },
            value: "CRS",
            name: "radioOpts",
            validation: {
                required: true,
            },
            valid: true,
            touched: false,
            exist: false,
            checked: true,
        },
    });
    const setupRadioFields = () => {

        return Object.keys(reportOption).map((field, index) => {

            return (
                <div style={{ display: "flex", flexDirection: "row", width: "130px" }} key={index}>
                    <div style={{ marginTop: "40px!important" }}>
                        <Input

                            id={reportOption[field].id}
                            changed={(event) => {
                                radioChangeHandler(event, reportOption[field].id);
                            }}
                            elementType={reportOption[field].elementType}
                            elementConfig={reportOption[field].elemConfig}
                            value={reportOption[field].id}
                            elementName={reportOption[field].name}

                        />
                    </div>
                    <div className="mt-3 px-3">
                        <div className={classes.TextFont}>{reportOption[field].label}</div>
                    </div>
                </div>
            )
        });
    }
    return <div>{setupRadioFields()}</div>
}

export default FileType;