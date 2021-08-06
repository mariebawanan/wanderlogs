import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    EditIcon,
    ListIcon,
    LogoutIcon,
    UserIcon,
} from '~assets/icons';
import {
    NavMenuItemLinkIcon,
    NavMenuItemLinkText,
} from '~styles/components';

interface Props {
    icon: string;
    text: string;
    path: string;
}

const NavMenuItemLink: React.FC<Props> = ({ icon, text, path }) => {
    const getIcon = () => {
        switch (icon) {
            case 'write':
                return <NavMenuItemLinkIcon src={EditIcon} />;
            case 'list':
                return <NavMenuItemLinkIcon src={ListIcon} />;
            case 'user':
                return <NavMenuItemLinkIcon src={UserIcon} />;
            case 'logout':
                return <NavMenuItemLinkIcon src={LogoutIcon} />;
            default:
                return;
        }
    };

    return (
        <NavLink to={path}>
            {getIcon()}
            <NavMenuItemLinkText>{text}</NavMenuItemLinkText>
        </NavLink>
    );
};

export default NavMenuItemLink;
