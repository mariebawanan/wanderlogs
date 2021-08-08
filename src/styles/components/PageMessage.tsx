import styled from 'styled-components';
import { ButtonPrimary } from './Button';
import { media } from '~styles';

const PageMessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex: 1;
`;

const PageMessageImage = styled.img`
    width: 100px;
    ${media.sm} {
        width: 200px;
    }
`;

const PageMessageText = styled.h1`
    letter-spacing: 2px;
    text-transform: uppercase;
`;

const PageMessageButton = styled(ButtonPrimary)`
    margin: 30px auto;
`;

export { PageMessageContainer, PageMessageImage, PageMessageText, PageMessageButton };
