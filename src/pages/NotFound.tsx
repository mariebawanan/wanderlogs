import React from 'react';
import { LostIcon } from '~assets/icons';
import { PageMessage } from '~components';

const NotFound = () => (
    <PageMessage
        icon={LostIcon}
        buttonUrl="/"
        buttonText="Go to home"
        message="Page not found"
    />
);

export default NotFound;
