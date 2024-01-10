import Login from "../Login/Login";
import "./Nav";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Nav = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <nav>
            <ul>
                <NavLink to="/" exact="true" onClick={() => window.scrollTo(0, 0)}>
                    Home
                </NavLink>
                <NavLink to="/" exact="true" onClick={() => loginWithRedirect()}>
                    Inicia sesión
                </NavLink>
                {/* <Login/> */}
                <NavLink to="/profile" exact="true">
                    Perfil
                </NavLink>
            </ul>
        </nav>
    )
};

export default Nav;