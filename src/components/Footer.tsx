import React from 'react';
import {
    FooterContainer,
    FooterText,
    FooterLink,
    LayoutInnerContainer,
} from '~styles/components';

const Footer = () => (
    <FooterContainer>
        <LayoutInnerContainer>
            <FooterText>
                Designed and developed by{' '}
                <FooterLink href="mailto:marie.bawanan@gmail.com">
                    Marie Bawanan
                </FooterLink>
            </FooterText>
        </LayoutInnerContainer>
    </FooterContainer>
);

export default Footer;
