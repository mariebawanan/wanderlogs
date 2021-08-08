import styled from 'styled-components';
import { fontSizes, media } from '~styles';
import { ButtonPrimary, ButtonSecondary } from './Button';

const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #fff;
    border: 2px solid #aaa;
    border-radius: 5px;
    z-index: 999;
    max-width: 80%;
    margin: auto;
    position: relative;
    padding: 20px;

    ${media.sm} {
        max-width: 420px;
        padding: 50px 50px 40px;
    }
`;

const ModalOverlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.75);
`;

const ModalContent = styled.div`
    font-size: ${fontSizes.medium};
    text-align: center;
    line-height: 35px;
`;
const ModalButtons = styled.div`
    margin: 20px 0;
`;

const ModalButtonCancel = styled(ButtonSecondary)`
    margin-right: 20px;
`;

const ModalButtonConfirm = styled(ButtonPrimary)``;

export {
    ModalContainer,
    ModalOverlay,
    ModalContent,
    ModalButtons,
    ModalButtonCancel,
    ModalButtonConfirm,
};
