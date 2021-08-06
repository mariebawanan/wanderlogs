import styled from 'styled-components';
import { fontSizes, colors } from '~styles/theme';
import media from '~styles/media';

const FeedContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
`;

const FeedItem = styled.div`
    max-width: 100%;
    width: 100%;
    margin: 1em 1em 3em;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    transition: ease 500ms;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    }

    ${media.sm} {
        max-width: 45%;
        width: 45%;
        margin-right: 2.5%;
        margin: 1.25em;
        height: 500px;
    }

    ${media.lg} {
        max-width: 30%;
        width: 30%;
        margin: 1.25em;
    }
`;

const FeedItemDetails = styled.div`
    padding: 0 1em 1em;

    span {
        line-height: 12px;
        text-transform: uppercase;
        letter-spacing: 1.3px;
    }

    a {
        color: ${colors.sunray};
    }
`;

const FeedItemTitle = styled.h2`
    font-size: ${fontSizes.medium};
    line-height: 24px;
`;

export { FeedContainer, FeedItem, FeedItemTitle, FeedItemDetails };
