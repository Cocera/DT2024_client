import React from "react";
import "./StoreFrontIcon.scss";

const StoreFrontIcon = ({ isActive }) => {
  return (
    <span className={`material-icons ${isActive ? "active" : ""}`}>
      storefront
    </span>
  );
};

export default StoreFrontIcon;
