import React from "react";
import './Header.scss';
import Subheader from "./Subheader/Subheader";

const Header = (params) => {
  return (
    <>
      <div className="main-header">
        <img className="logo" src="src/assets/logo_sinfondo.png" alt="logo" />
      </div>
      {params.title ? <Subheader title={params.title} community={params.community} /> : ""}
    </>
  );
};

export default Header;
