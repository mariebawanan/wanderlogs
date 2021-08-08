import styled from 'styled-components';
import { media } from '~styles';

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const LayoutInnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 90%;
    margin: auto;

    ${media.md} {
        max-width: 1200px;
    }
`;

export { LayoutContainer, LayoutInnerContainer };
