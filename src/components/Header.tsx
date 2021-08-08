import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavMenuItemLink } from '~components';
import {
    HeaderContainer,
    NavMenu,
    NavMenuItem,
    HeaderLogo,
    LayoutInnerContainer,
} from '~styles/components';
import { Logo } from '~assets/icons';

const Header = () => (
    <HeaderContainer>
        <LayoutInnerContainer>
            <NavLink to="/">
                <HeaderLogo src={Logo} />
            </NavLink>
            <NavMenu>
                <NavMenuItem>
                    <NavMenuItemLink icon="write" text="Write" path="/write" />
                </NavMenuItem>
                <NavMenuItem>
                    <NavMenuItemLink icon="list" text="Feed" path="/feed" />
                </NavMenuItem>
            </NavMenu>
        </LayoutInnerContainer>
    </HeaderContainer>
);

export default Header;
