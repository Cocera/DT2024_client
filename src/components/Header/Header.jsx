import React from "react";
import './Header.scss';
import Subheader from "./Subheader/Subheader";
import logoImg from "../../assets/Logo_TuAppMin.png"
import { Link } from "react-router-dom";

const Header = (params) => {
  return (
    <>
      <Link to="/">
        <div className="main-header secondary-color-bg">
          <img className="logo" src={logoImg} alt="logo" />
        </div>
      </Link>
      {params.title ? <Subheader title={params.title} community={params.community} route={params.route} /> : ""}
    </>
  );
};

export default Header;
