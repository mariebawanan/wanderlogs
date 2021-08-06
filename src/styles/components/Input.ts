import styled from 'styled-components';
import { fontSizes, colors } from '~styles/theme';

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
`;

const Input = styled.input`
    padding: 10px;
    max-width: 50%;
    font-size: ${fontSizes.medium};
    color: ${colors.gray};

    &:active,
    &:focus {
        outline: none;
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
    padding: 10px;
`;

export { InputGroup, Input, EditorWrapper, InputLabel };
