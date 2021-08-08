import React from 'react';
import { LogForm } from '~components';

const Write = () => {
    const initialState = {
        title: '',
        subtitle: '',
        photo: '',
        body: '',
        slug: '',
        date: new Date(),
        id: '',
    };

    return <LogForm editMode={false} initialState={initialState} />;
};

export default Write;
