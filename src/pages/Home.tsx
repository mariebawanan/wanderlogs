import React from 'react';
import { Logo } from '~assets/icons';
import { ButtonLink, LayoutInnerContainer } from '~styles/components';
import {
    HomeContainer,
    HomeLogo,
    HomeDescription,
    HomeLinkContainer,
} from '~styles/pages';

const Home = () => {
    return (
        <LayoutInnerContainer>
            <HomeContainer>
                <HomeLogo src={Logo} />
                <HomeDescription>
                    <span>wanderlogs</span> is a basic logging app created for recording
                    wanders
                </HomeDescription>
                <HomeLinkContainer>
                    <ButtonLink to="/feed">Start reading logs</ButtonLink>
                </HomeLinkContainer>
            </HomeContainer>
        </LayoutInnerContainer>
    );
};

export default Home;
