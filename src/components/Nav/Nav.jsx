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
} from '@chakra-ui/react'

const Nav = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        // <nav>
        //     <ul>
        //         <NavLink to="/" exact="true" onClick={() => window.scrollTo(0, 0)}>
        //             Home
        //         </NavLink>
        //         <NavLink to="/" exact="true" onClick={() => loginWithRedirect()}>
        //             Inicia sesión
        //         </NavLink>
        //         {/* <Login/> */}
        //         <NavLink to="/profile" exact="true">
        //             Perfil
        //         </NavLink>
        //     </ul>
        // </nav>
        <Menu>
            <MenuButton as={Button} colorScheme='pink'>
                Profile
            </MenuButton>
            <MenuList>
                <MenuGroup title='Profile'>
                    <MenuItem>My Account</MenuItem>
                    <MenuItem>Payments </MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title='Help'>
                    <MenuItem>Docs</MenuItem>
                    <MenuItem>FAQ</MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
    )



};

export default Nav;