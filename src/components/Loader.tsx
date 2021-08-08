import React from 'react';
import { LoaderContainer, LoaderImage, LoaderText } from '~styles/components';
import { LoaderIcon } from '~assets/icons';

const Loader = ({ text }: { text: string }) => (
    <LoaderContainer>
        <LoaderImage src={LoaderIcon} />
        <LoaderText>{text}</LoaderText>
    </LoaderContainer>
);

export default Loader;
