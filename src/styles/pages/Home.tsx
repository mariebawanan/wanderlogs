import styled from 'styled-components';

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HomeLogo = styled.img`
    width: 200px;
`;

const HomeDescription = styled.p`
    max-width: 50%;
    text-align: center;

    span {
        font-weight: 500;
    }
`;

const HomeLinkContainer = styled.div`
    margin-top: 80px;
`;

export { HomeContainer, HomeLogo, HomeDescription, HomeLinkContainer };
