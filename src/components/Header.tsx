import React from 'react';
import {
    HeaderContainer,
    NavMenu,
    NavMenuItem,
    HeaderLogo,
} from '~styles/components';
import { NavMenuItemLink } from '~components';
import { Logo } from '~assets/icons';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <HeaderContainer>
        <NavLink to="/">
            <HeaderLogo src={Logo} />
        </NavLink>
        <NavMenu>
            <NavMenuItem>
                <NavMenuItemLink
                    icon="write"
                    text="Write"
                    path="/write"
                />
            </NavMenuItem>
            <NavMenuItem>
                <NavMenuItemLink
                    icon="list"
                    text="Feed"
                    path="/feed"
                />
            </NavMenuItem>
            <NavMenuItem>
                <NavMenuItemLink
                    icon="user"
                    text="Profile"
                    path="/profile"
                />
            </NavMenuItem>
        </NavMenu>

        <NavMenuItemLink icon="logout" text="Log out" path="/" />
    </HeaderContainer>
);

export default Header;
