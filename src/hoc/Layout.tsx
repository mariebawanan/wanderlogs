import React from 'react';
import { Header, Footer } from '~components';
import { LayoutContainer, MainContainer } from '~styles/components';
import { GlobalStyle } from '~styles';

const Layout = ({ children }: { children: React.ReactChild }) => (
    <LayoutContainer>
        <GlobalStyle />
        <Header />
        <MainContainer>{children}</MainContainer>
        <Footer />
    </LayoutContainer>
);

export default Layout;
