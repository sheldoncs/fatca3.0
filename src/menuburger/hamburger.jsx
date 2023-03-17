import React from "react";
import BurgerBar from "./burgerbar/burgerbar";
import classes from "./Menu.module.css";

const Menu = (props) => {
  return (
    <div className={classes.Menu} onClick={() => props.click()}>
      <div style={{ margin: "3px" }}>
        <BurgerBar />
      </div>
      <div style={{ margin: "3px" }}>
        <BurgerBar />
      </div>
      <div style={{ margin: "3px" }}>
        <BurgerBar />
      </div>
    </div>
  );
};

export default Menu;
