import styled from 'styled-components';

import { colors } from '~styles/theme';
const Button = styled.button`
    padding: 20px;
    max-width: 250px;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: white;
    border: none;
    background: ${colors.sunray};
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    transition: 250ms ease;
    margin: 2em 0 0;

    &:hover {
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    }
`;

export { Button };
