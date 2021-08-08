import styled from 'styled-components';
import { fontSizes, colors } from '~styles';

const FooterContainer = styled.div`
    padding: 20px 0;
    display: flex;
    justify-content: center;
`;

const FooterText = styled.span`
    font-size: ${fontSizes.tiny};
`;

const FooterLink = styled.a`
    font-size: ${fontSizes.tiny};
    color: ${colors.sunray};
`;

export { FooterContainer, FooterText, FooterLink };
