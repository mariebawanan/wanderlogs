import styled from 'styled-components';
import { media } from '~styles';

const LoaderContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 6em;
`;

const LoaderImage = styled.img`
    width: 50px;

    ${media.sm} {
        width: 75px;
    }
`;

const LoaderText = styled.span`
    text-transform: uppercase;
    letter-spacing: 2px;
`;

export { LoaderContainer, LoaderImage, LoaderText };
