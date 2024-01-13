import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Nav = () => {
	const { loginWithRedirect } = useAuth0();
	return (
		<>
			<nav>
				<NavLink onClick={() => window.scrollTo(0, 0)}>Home</NavLink>
				<NavLink onClick={() => loginWithRedirect()}>Iniciar sesión</NavLink>
				<NavLink>Perfil</NavLink>
			</nav>
		</>
	);
};

export default Nav;
