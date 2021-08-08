import styled from 'styled-components';
import { colors, media } from '~styles';

const UploaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 3em;
`;

const UploaderLabel = styled.label`
    border: 1px solid #373737;
    margin: 2em 0 0.5em;
    display: inline-block;
    padding: 10px;
    border-radius: 5px;
    transition: 250ms ease;
    place-self: flex-start;

    input[type='file'] {
        display: none;
    }

    &:hover {
        cursor: pointer;
        background: ${colors.sunray};
        border: 1px solid ${colors.sunray};
        color: white;
    }
`;

const UploaderPreview = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 2em 0;
`;

const UploaderPreviewImg = styled.img`
    width: 100%;

    ${media.sm} {
        width: 500px;
    }
`;

const UploaderProgress = styled.progress`
    border: 0;
    margin-right: 10px;
`;

export {
    UploaderContainer,
    UploaderLabel,
    UploaderPreview,
    UploaderPreviewImg,
    UploaderProgress,
};
