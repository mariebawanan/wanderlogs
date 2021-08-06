import React, { FC } from 'react';
import { Header, Footer } from '~components';
import { GlobalStyle } from '~styles';
import { LayoutContainer, MainContainer } from '~styles/components';

const Layout = ({ children }: { children: React.ReactChildren }) => (
    <LayoutContainer>
        <GlobalStyle />
        <Header />
        <MainContainer>{children}</MainContainer>
        <Footer />
    </LayoutContainer>
);

export default Layout;
