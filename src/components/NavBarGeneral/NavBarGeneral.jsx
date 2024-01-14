// import { NavLink } from "react-router-dom";
// import StoreFrontIcon from "../../assets/StoreFrontIcon";
// import ProfileIcon from "../../assets/ProfileIcon";
// import WarningIcon from "../../assets/WarningIcon";
// import HomeIcon from "../../assets/HomeIcon";

// import React from "react";

// const NavBarGeneral = () => {
//   return (
//     <>
//       <nav>
//         <NavLink to="/">
//           <HomeIcon />
//         </NavLink>
//         <NavLink to="/">
//           <WarningIcon width="70px" />
//         </NavLink>
//         <NavLink to="/">
//           <StoreFrontIcon />
//         </NavLink>
//         <NavLink to="/">
//           <ProfileIcon />
//         </NavLink>
//       </nav>
//     </>
//   );
// };

// export default NavBarGeneral;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "../../assets/HomeIcon";
import WarningIcon from "../../assets/WarningIcon";
import StoreFrontIcon from "../../assets/StoreFrontIcon";
import ProfileIcon from "../../assets/ProfileIcon";
import "./NavBarGeneral.scss";

const NavBarGeneral = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="navigation">
      <ul>
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
        <li className={`list ${activeIndex === 2 ? 'active' : ''}`} onClick={() => handleItemClick(2)}>
          <span className="icon">
            <NavLink to="/">
              <StoreFrontIcon isActive={activeIndex === 2} />
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
