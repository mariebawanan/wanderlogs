import { createGlobalStyle } from 'styled-components';
import * as fontFamilies from './fonts';
import { colors, fontSizes } from './theme';

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 100;
        font-display: block;
        src: url(${fontFamilies.PoppinsLight}) format('truetype');
    }

    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-display: block;
        src: url(${fontFamilies.PoppinsThin}) format('truetype');
    }

    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-display: block;
        src: url(${fontFamilies.PoppinsRegular}) format('truetype');
    }
    
    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-display: block;
        src: url(${fontFamilies.PoppinsBold}) format('truetype');
    }

    @font-face {
        font-family: 'Poppins';
        font-style: italic;
        font-weight: 400;
        font-display: block;
        src: url(${fontFamilies.PoppinsItalic}) format('truetype');
    }

    html {
        box-sizing: border-box;
        width: 100%;
    }

    body {
        font-family: 'Poppins';
        font-weight: 100;
        font-size: ${fontSizes.small};
        color: ${colors.gray};
        background: ${colors.lightgray};
        margin: 0;
        padding: 0;
        width: 100%;
        min-height: 100vh;
        line-height: 24px;
    }

    a {
        text-decoration: none;
        font-size: ${fontSizes.small};
        transition: 500ms ease;

        &:hover {
            color: black;
        }
    }
`;

export default GlobalStyle;
