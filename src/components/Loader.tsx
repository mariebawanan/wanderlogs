import React from 'react';
import { LoaderIcon } from '~assets/icons';

const Loader = (text: string) => (
    <div
        style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <p>fetching your feed...</p>
    </div>
);

export default Loader;
