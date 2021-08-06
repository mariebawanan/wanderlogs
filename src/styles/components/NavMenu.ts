import styled from 'styled-components';

import { colors, fontSizes } from '~styles/theme';

const NavMenu = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    width: 35%;
`;

const NavMenuItem = styled.li`
    text-decoration: none;
`;

const NavMenuItemLinkIcon = styled.img`
    width: 12px;
    margin-right: 10px;
`;

const NavMenuItemLinkText = styled.span`
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: ${fontSizes.small};
    color: ${colors.gray};
    transition: 250ms ease;

    &:hover {
        color: black;
    }
`;

export {
    NavMenu,
    NavMenuItem,
    NavMenuItemLinkIcon,
    NavMenuItemLinkText,
};
