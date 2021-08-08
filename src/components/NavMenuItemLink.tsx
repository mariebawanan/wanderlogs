import React from 'react';
import { NavMenuItemLinkIcon, NavMenuItemLinkText, NavLink } from '~styles/components';
import { EditIcon, ListIcon, LogoutIcon, UserIcon } from '~assets/icons';

type NavMenuItemLinkProps = {
    icon: string;
    text?: string;
    path: string;
};

const NavMenuItemLink = ({ icon, text, path }: NavMenuItemLinkProps) => {
    const getIcon = () => {
        switch (icon) {
            case 'write':
                return EditIcon;
            case 'list':
                return ListIcon;
            case 'user':
                return UserIcon;
            case 'logout':
                return LogoutIcon;
            default:
                return;
        }
    };

    return (
        <NavLink to={path}>
            <NavMenuItemLinkIcon src={getIcon()} />
            <NavMenuItemLinkText>{text}</NavMenuItemLinkText>
        </NavLink>
    );
};

export default NavMenuItemLink;
