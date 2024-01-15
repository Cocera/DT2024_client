import React from "react";
import './Header.scss';
import Subheader from "./Subheader/Subheader";
import logoImg from "../../assets/logo_sinfondo.png"

const Header = (params) => {
  return (
    <>
      <div className="main-header">
        <img className="logo" src={logoImg} alt="logo" />
      </div>
      {params.title ? <Subheader title={params.title} community={params.community} /> : ""}
    </>
  );
};

export default Header;
