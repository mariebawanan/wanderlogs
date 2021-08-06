import React from 'react';
import {
    FooterContainer,
    FooterText,
    FooterLink,
} from '~styles/components';

const Footer = () => (
    <FooterContainer>
        <FooterText>
            Designed and developed by{' '}
            <FooterLink href="mailto:marie.bawanan@gmail.com">
                Marie Bawanan
            </FooterLink>
        </FooterText>
    </FooterContainer>
);

export default Footer;
