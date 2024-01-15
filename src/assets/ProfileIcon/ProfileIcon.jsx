import React from "react";
import "./ProfileIcon.scss"
const ProfileIcon = ({ isActive }) => {
  return (
    <span className={`material-icons ${isActive ? 'active' : ''}`}>
      person
    </span>
  );
};

export default ProfileIcon;
