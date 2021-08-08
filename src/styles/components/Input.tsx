import styled from 'styled-components';
import { fontSizes, colors, media } from '~styles';

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
`;

const Input = styled.input<{ onChange?: any }>`
    padding: 10px;
    max-width: 100%;
    font-size: ${fontSizes.medium};
    color: ${colors.gray};

    &:active,
    &:focus {
        outline: none;
    }

    ${media.sm} {
        max-width: 50%;
    }
`;

const InputLabel = styled.span`
    font-size: ${fontSizes.medium};
    display: block;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin: 10px 0;
`;

const EditorWrapper = styled.div`
    background: white;
    min-height: 400px;
    height: auto;
    padding: 10px;
`;

const InputError = styled.span`
    color: ${colors.brickred};
    font-size: ${fontSizes.small};
    margin: 10px 0;
`;

export { InputGroup, Input, EditorWrapper, InputLabel, InputError };
