import styled from 'styled-components';
import { media, fontSizes, colors } from '~styles';

const FeedContainer = styled.div`
    width: 100%;
    margin-top: 5em;
`;

const FeedInnerContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    max-width: 1200px;
    margin: auto;
`;

const FeedMainContainer = styled.div`
    display: flex;
    flex-direction: column;
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
        height: 425px;
    }

    ${media.md} {
        max-width: 30%;
        width: 30%;
        margin: 1.25em;
    }
`;

const FeedItemImageContainer = styled.div`
    width: 100%;
    height: 240px;
    border: none;
    display: flex;
    justify-content: center;
    background-color: ${colors.sunray};
`;

const FeedItemImagePlaceholder = styled.img`
    width: 15%;
    height: 240px;
`;

const FeedItemImage = styled.img`
    width: 100%;
    height: 240px;
    transition: display 0.5s ease-in-out;
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
const FeedSearchContainer = styled.div`
    width: 100%;
    margin: 2em auto;

    input {
        margin-left: 3%;
        width: 70%;
    }

    ${media.md} {
        max-width: 1200px;

        input {
            margin-left: 1.25%;
            width: 300px;
        }
    }
`;

export {
    FeedContainer,
    FeedItem,
    FeedItemTitle,
    FeedItemDetails,
    FeedInnerContainer,
    FeedItemImageContainer,
    FeedItemImagePlaceholder,
    FeedItemImage,
    FeedMainContainer,
    FeedSearchContainer,
};
