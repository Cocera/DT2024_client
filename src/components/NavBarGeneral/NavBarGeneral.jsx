import { NavLink } from "react-router-dom";
import HomeIcon from "../../assets/HomeIcon/HomeIcon";
import WarningIcon from "../../assets/WarningIcon/WarningIcon";
import StoreFrontIcon from "../../assets/StoreFrontIcon/StoreFrontIcon";
import ProfileIcon from "../../assets/ProfileIcon/ProfileIcon";
import "./NavBarGeneral.scss";
import { useState } from "react";

const NavBarGeneral = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const handleItemClick = (index) => {
		setActiveIndex(index);
	};

  return (
    <div className="navigation">
      <ul style={{ '--active-index': activeIndex }}>
        {['/', '/incidencia/busqueda', '/comunidad/busqueda', '/'].map((route, index) => (
          <li
            key={index}
            className={`list ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleItemClick(index)}
          >
            <NavLink to={route}>
              <span className="icon">
                {index === 0 && <HomeIcon icon="home" isActive={activeIndex === 0} />}
                {index === 1 && <HomeIcon icon="warning" isActive={activeIndex === 1} />}
                {index === 2 && <HomeIcon icon="storefront" isActive={activeIndex === 2} />}
                {index === 3 && <HomeIcon icon="person" isActive={activeIndex === 3} />}
              </span>
            </NavLink>
          </li>
        ))}
        <div className="indicator">
          <span></span>
        </div>
      </ul>
    </div>
  );
};

export default NavBarGeneral;
