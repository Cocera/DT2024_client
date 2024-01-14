import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "../../assets/HomeIcon/HomeIcon";
import WarningIcon from "../../assets/WarningIcon/WarningIcon";
import StoreFrontIcon from "../../assets/StoreFrontIcon/StoreFrontIcon";
import ProfileIcon from "../../assets/ProfileIcon/ProfileIcon";
import "./NavBarGeneral.scss";

const NavBarGeneral = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="navigation">
      <ul  style={{ '--active-index': activeIndex }}>
        <li
          className={`list ${activeIndex === 0 ? "active" : ""}`}
          onClick={() => handleItemClick(0)}
        >
          <span className="icon">
            <NavLink to="/">
              <HomeIcon />
            </NavLink>
          </span>
        </li>
        <li
          className={`list ${activeIndex === 1 ? "active" : ""}`}
          onClick={() => handleItemClick(1)}
        >
          <a href="#">
            <span className="icon">
              <NavLink to="/">
                <WarningIcon />
              </NavLink>
            </span>
          </a>
        </li>
        <li
          className={`list ${activeIndex === 2 ? "active" : ""}`}
          onClick={() => handleItemClick(2)}
        >
          <span className="icon">
            <NavLink to="/">
              <StoreFrontIcon className='ST' isActive={activeIndex === 2}/>
            </NavLink>
          </span>
        </li>
        <li
          className={`list ${activeIndex === 3 ? "active" : ""}`}
          onClick={() => handleItemClick(3)}
        >
          <a href="#">
            <span className="icon">
              <NavLink to="/">
                <ProfileIcon />
              </NavLink>
            </span>
          </a>
        </li>
        <div className="indicator">
          <span></span>
        </div>
      </ul>
    </div>
  );
};

export default NavBarGeneral;
