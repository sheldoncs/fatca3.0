import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

import style from "./Slideout.module.css";
import Header from "../assets/menu/header.png";
import HeaderOver from "../assets/menu/header_over.png";
import ColumnFormat from "../assets/menu/columnformats.png";
import ColumnFormatOver from "../assets/menu/columnformats_over.png";
import Logout from "../assets/menu/logout.png";
import LogoutOver from "../assets/menu/logout_over.png";

const SlideOut = (props) => {

  const [isHeaderShown, setIsHeaderShown] = useState(false);
  const [isColumnFormatShown, setIsColumnFormatShown] = useState(false);
  const [isFileTypeShown, setIsFileTypeShown] = useState(false);
  const [isLogout, setIsLogoutShown] = useState(false);

  let saveClasses = [style.Slideout, style.Open];
  if (props.show === true) {
    saveClasses = [style.Slideout, style.Close];
  }

  return (
    <div className={saveClasses.join(" ")}>
      <div className={style.MenuContainer}>
        <div onClick={() => props.click("header")} className={isHeaderShown ? style.BgMouseOver : null} onMouseEnter={() => setIsHeaderShown(true)} onMouseLeave={() => setIsHeaderShown(false)} style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ margin: "7px" }}><SettingsIcon className={isHeaderShown ? style.Blue : style.Black} /></div>
          <div style={{ margin: "7px", paddingTop: "3px" }}>File Header Settings</div>
        </div>

        <div className={isFileTypeShown ? style.BgMouseOver : null} onMouseEnter={() => setIsFileTypeShown(true)} onMouseLeave={() => setIsFileTypeShown(false)} style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ margin: "7px" }}>
            <DescriptionIcon className={isFileTypeShown ? style.Blue : style.Black} />
          </div>
          <div style={{ margin: "7px", paddingTop: "3px" }}>Change File Type</div>
        </div>
        <div className={isLogout ? style.BgMouseOver : null} onMouseEnter={() => setIsLogoutShown(true)} onMouseLeave={() => setIsLogoutShown(false)} style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ margin: "7px" }}>
            <LogoutIcon className={isLogout ? style.Blue : style.Black} />
          </div>
          <div style={{ margin: "7px", paddingTop: "3px" }}>Logout</div>
        </div>
      </div>
    </div>
  );
};

export default SlideOut;
