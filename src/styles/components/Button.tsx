import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '~styles';

const Button = styled.button<{ onClick?: any }>`
    padding: 15px 30px;
    max-width: 200px;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    border: none;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    transition: 250ms ease;
    color: ${colors.gray};
    &:hover {
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 10px 50px -12px;
    }
`;

const ButtonPrimary = styled(Button)`
    background: ${colors.sunray};
    color: white;
`;

const ButtonSecondary = styled(Button)`
    background: ${colors.lightgray};
`;

const ButtonLink = styled(Link)`
    color: ${colors.sunray};
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

export { Button, ButtonPrimary, ButtonSecondary, ButtonLink };
