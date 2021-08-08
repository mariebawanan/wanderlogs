import styled from 'styled-components';

const HeaderContainer = styled.header`
    position: fixed;
    width: 100%;
    padding: 10px 0;
    background-color: white;
    height: 60px;
    z-index: 2;
`;

const HeaderLogo = styled.img`
    width: 75px;
`;

export { HeaderContainer, HeaderLogo };
