import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, fontSizes, media } from '~styles';

const NavMenu = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
    margin: 0;
`;

const NavMenuItem = styled.li`
    text-decoration: none;
    margin-left: 30px;
`;

const NavMenuItemLinkIcon = styled.img`
    width: 16px;
    ${media.sm} {
        width: 12px;
        margin-right: 10px;
    }
`;

const NavMenuItemLinkText = styled.span`
    display: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: ${fontSizes.small};
    color: ${colors.gray};
    transition: 250ms ease;

    &:hover {
        color: black;
    }

    ${media.sm} {
        display: block;
    }
`;

const NavLink = styled(Link)`
    display: flex;
`;

export { NavMenu, NavMenuItem, NavMenuItemLinkIcon, NavMenuItemLinkText, NavLink };
