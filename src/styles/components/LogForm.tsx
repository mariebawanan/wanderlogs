import styled from 'styled-components';
import { media } from '~styles';

const LogFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
`;

const LogFormInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    max-width: 90%;
    margin: auto;

    ${media.sm} {
        max-width: 1200px;
    }
`;

export { LogFormContainer, LogFormInnerContainer };
