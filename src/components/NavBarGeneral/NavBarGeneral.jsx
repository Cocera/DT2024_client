import { NavLink } from "react-router-dom";
import NavBarIcons from "./NavBarIcons/NavBarIcons";
import "./NavBarGeneral.scss";
import { useState } from "react";

const NavBarGeneral = () => {
	const [activeIndex, setActiveIndex] = useState(2);

	const handleItemClick = (index) => {
		setActiveIndex(index);
	};

  return (
    <div className="navigation">
      <ul style={{ '--active-index': activeIndex }}>
        {['/incidencia/busqueda', '/incidencia/busqueda', '/incidencia/busqueda', '/incidencia/busqueda'].map((route, index) => (
          <li
            key={index}
            className={`list ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleItemClick(index)}
          >
            <NavLink to={route}>
              <span className="icon">
                {index === 0 && <NavBarIcons icon="home" isActive={activeIndex === 0} />}
                {index === 1 && <NavBarIcons icon="warning" isActive={activeIndex === 1} />}
                {index === 2 && <NavBarIcons icon="storefront" isActive={activeIndex === 2} />}
                {index === 3 && <NavBarIcons icon="person" isActive={activeIndex === 3} />}
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
