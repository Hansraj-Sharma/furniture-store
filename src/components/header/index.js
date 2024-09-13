import React, { Fragment } from "react";
import Topbar from "./topbar";
import Navbar from "./navbar";

const Header = ({ navBgColor, navColor, topBgColor, topColor }) => {
  return (
    <Fragment>
      <Topbar topBgColor={topBgColor} topColor={topColor} />
      <Navbar navBgColor={navBgColor} navColor={navColor} />
    </Fragment>
  );
};

export default Header;
