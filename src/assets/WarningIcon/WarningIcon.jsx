import React from "react";
import "./WarningIcon.scss";
const WarningIcon = ({ isActive }) => {
  return (
    <span className={`material-icons ${isActive ? "active" : ""}`}>
      warning
    </span>
  );
};

export default WarningIcon;
