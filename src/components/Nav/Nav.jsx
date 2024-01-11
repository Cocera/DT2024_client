import "./Nav";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button
} from '@chakra-ui/react'

const Nav = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <Menu>
            <MenuButton as={Button} m={2} onClick={() => window.scrollTo(0, 0)}>
                Home
            </MenuButton>
            <MenuButton as={Button} m={2} onClick={() => loginWithRedirect()}>
                Iniciar sesión
            </MenuButton>
            <MenuButton as={Button} m={2}>
                Perfil
            </MenuButton>
            <MenuButton as={Button} m={2}>
                Incidencias
            </MenuButton>
        </Menu>
    )
};

export default Nav;