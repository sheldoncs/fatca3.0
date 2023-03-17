import React, { useState, useEffect } from "react";
import classes from "./upload.module.css";
import {
    FATCA_TITLE,
    DRAG_AND_DROP,
} from "../ui/constants";
import { uploadFile, getCompanyName } from "../util/fatca_api";
import Smalldots from "./smalldots/smalldots";
import UploadIcon from "../assets/upload.png";
import PersonIcon from "../assets/person.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Input from "../input/input";
import Menu from "../menu/menu";
import Logout from "../menu/logout";
import SetupHeader from "../documentheader/setupheader";
import Formats from "../formats/formats";
import { useDispatch, useSelector } from "react-redux";
import ErrorModal from "../errorModalForm/errorModalForm";
import Loading from "../processing/processing";
import { FileUploader } from "react-drag-drop-files";
import BurgerMenu from "../menuburger/hamburger";
import SlideOut from "../slideout/slideout";
import FileType from "../filetype/filetype";

const Upload = () => {


    const dispatch = useDispatch();
    const company = useSelector((state) => state.fatca.companyName);
    const data = useSelector((state) => state.fatca.data);

    const fileTypes = ["CSV"];
    const [target, setTarget] = useState(null);
    const [fileType, setFileType] = useState("");
    const [dispError, setDispError] = useState(false);
    const [showSetupHeader, setShowSetupHeader] = useState(false);
    const [message, setMessage] = useState("");
    const [title, setTitle] = useState("");
    const [disableBuild, setDisableBuild] = useState(true);
    const [showSlide, setShowSlide] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showLogout, setShowLogout] = useState(false);
    const [companyName, setCompanyName] = useState("");
    const [showFormats, setShowFormats] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);

    const [fileUpload, setFileUpload] = useState(
        {
            excelfile: {
                elementtype: "file",
                visibility: "visible",
                elemConfig: { type: "file", placeholder: "" },
                value: "",
                name: "excelfile",
                selectedFile: null,
                fileInput: null,
                message: "",
                validation: {
                    required: true,
                },
                valid: true,
                touched: false,
                exist: false,
            },
        }
    );
    const [upBtnClass, setUpBtnClass] = useState([
        "btn", "btn-success"
    ]);
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
    const [dragActive, setDragActive] = useState(false);
    const [dropActive, setDropActive] = useState(false);

    const toggleMenu = () => {
        setShowSlide(!showSlide);
    };

    useEffect(() => {

        if (target != null) {
            if (fileType === "") {
                setDispError(true);
                setTitle("FATCA & CRS INFORMATION"); setMessage("Please select file type!!");
            } else {
                setDispError(false);
                const formData = new FormData();
                formData.append("fileType", fileType);
                formData.append("fileName", target.name);
                formData.append("companyName", company);
                formData.append("fatcaFile", target);
                dispatch(uploadFile(formData));
            }
        }

    }, [target]);

    useEffect(() => {
        setDragActive(false);
    }, [data]);


    const handleChange = (e) => {
        setDragActive(true);
        e.preventDefault();
        e.stopPropagation();
        setTarget(e.target.files[0]);
    };
    const handleDragDropChange = (file) => {
        setDragActive(true);
        setTarget(file);
    };


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
    const closeErrorModal = () => {
        setDispError(false);
    }
    const closeModal = () => {
        setDragActive(false);
        setDropActive(false);
    }
    const radioChangeHandler = (e, radioId) => {
        dispatch(getCompanyName(e.target.value));
        setFileType(e.target.value);
    }
    const logoutHandler = (val) => {
        setShowLogout(val);
        if (showMenu) {
            setShowMenu(false);
        }
    }
    const menuHandler = (val) => {
        setShowMenu(val);
        if (showLogout) {
            setShowLogout(false);
        }
    }
    const menuOption = (option) => {
        if (option === "header") {
            setShowSetupHeader(true);
            setShowSlide(false);
        }
    }
    return (

        <div className={classes.Upload}>

            {dispError ? <ErrorModal closeErrorModal={closeErrorModal} errorMessage={message}>{title}</ErrorModal> : null}
            {dispError || showSetupHeader || dropActive || dragActive ? <div className={classes.shade}></div> : null}
            {dropActive || dragActive ? <Loading /> : null}
            <SlideOut click={(option) => menuOption(option)} show={showSlide} />

            {showSetupHeader || showFormats || showSlide && !isUpdating && (<div className={classes.shade} onClick={toggleMenu}></div>)}
            {showSetupHeader && (<SetupHeader closeClick={() => setShowSetupHeader(!showSetupHeader)} />)}
            <div className={classes.HeaderContainer}>
                <div className={classes.Header}>
                    <BurgerMenu click={() => toggleMenu()} />
                    <div className={classes.Title}>{FATCA_TITLE}</div>
                    <div className={classes.setupContainer}>
                        {/* <div style={{cursor: "pointer", marginRight:"40px" }}>
                          <Smalldots click={()=>menuHandler(!showMenu)}/>
                        </div> */}
                        <div style={{ cursor: "pointer", marginRight: "40px" }} onClick={() => logoutHandler(!showLogout)}>
                            <img src={PersonIcon} style={{ width: "40px", height: "32px", marginTop: "1px" }} />
                        </div>
                    </div>
                </div>
                <div>
                    {showMenu && (<Menu showDocumentHeader={() => setShowSetupHeader(!showSetupHeader)} />)}
                    {showLogout && (<Logout />)}
                    {showFormats && (<Formats />)}
                </div>
                {/* <div className={classes.Line} /> */}
            </div>
            {!fileType ? <div className={classes.shade} /> : null}
            {!fileType ? <div className={classes.RadioContainer}>
                <FileType radioChangeHandler={(eve, id) => radioChangeHandler(eve, id)} />
            </div> : null}
            <div className={classes.UploadIcon}>
                <div className={classes.UploadContainer}>
                    <FileUploader handleChange={handleDragDropChange} name="file" types={fileTypes} >
                        <img src={UploadIcon} style={{ width: "150px" }} />
                    </FileUploader>
                </div>
            </div>
            <div className="text-center pt-5" ><div>{DRAG_AND_DROP}</div></div>
            <div className="text-center" style={{ display: "flex", flexDirection: "row", margin: "auto", marginTop: "60px" }}>
                <div style={{ margin: "3px" }}>

                    <Input
                        className={upBtnClass.join(" ")}
                        key={fileUpload.excelfile.name}
                        changed={(event) => handleChange(event)}
                        visibility={fileUpload.excelfile.visibility}
                        elementType={fileUpload.excelfile.elementtype}
                        elementConfig={fileUpload.excelfile.elemConfig}
                        message={fileUpload.excelfile.message}
                        elementName={fileUpload.excelfile.name}
                        valid={fileUpload.excelfile.valid}
                        value={fileUpload.excelfile.value}
                        fileInput={fileUpload.excelfile.fileInput}
                    />

                </div>
                {/* <div style={{margin: "3px"}}>
                    <button disabled={disableBuild} className="btn btn-primary"><div className={classes.TextFont}>{BUILD_DOCUMENT}</div></button>
                </div> */}
            </div>
            {/* <div className="text-center" style={{ margin:"auto ", marginTop: "60px", width: "89%" }}>{FILE_UPLOAD_INSTRUCTION}</div> */}
        </div>

    );
}


export default Upload;