import { css } from 'styled-components';

const mixins = {
    flexCenter: css`
        display: flex;
        width: 100%;
        justify-content: center;
    `,

    flexVertical: css`
        display: flex;
        flex-direction: column;
        width: 100%;
    `,
};

export default mixins;
