import React from 'react';
import { useHistory } from 'react-router';
import {
    PageMessageContainer,
    PageMessageImage,
    PageMessageText,
    PageMessageButton,
} from '~styles/components';

type PageMessageType = {
    icon: string;
    buttonUrl: string;
    buttonText: string;
    message: string;
};

const PageMessage = ({ icon, buttonUrl, buttonText, message }: PageMessageType) => {
    const history = useHistory();
    return (
        <PageMessageContainer>
            <PageMessageImage src={icon} />
            <PageMessageText>{message}</PageMessageText>
            <PageMessageButton onClick={() => history.push(buttonUrl)}>
                {buttonText}
            </PageMessageButton>
        </PageMessageContainer>
    );
};
export default PageMessage;
