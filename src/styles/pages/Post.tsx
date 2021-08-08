import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media, colors, fontSizes } from '~styles';

const PostContainer = styled.div`
    a {
        color: ${colors.sunray};
    }

    img {
        max-width: 100%;
    }
`;

const PostTitle = styled.h1`
    font-size: ${fontSizes.huge};
    text-align: center;
    width: 100%;
    line-height: 1.2em;

    ${media.md} {
        font-size: ${fontSizes.massive};
        width: 60%;
        line-height: 1.25em;
        margin: 20px auto 10px;
    }
`;

const PostDate = styled.span`
    font-size: ${fontSizes.small};
    letter-spacing: 3px;
    text-transform: uppercase;
    text-align: center;
    display: block;

    ${media.md} {
        font-size: ${fontSizes.medium};
        letter-spacing: 2px;
    }
`;

const PostImageContainer = styled.div`
    width: 100%;
    height: 600px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
`;

const PostContent = styled.div`
    max-width: 980px;
    margin: -300px auto 0;
    background-color: white;
    border-radius: 20px;
    padding: 20px 10px;

    ${media.sm} {
        padding: 50px;
        border-radius: 10px;
    }
`;

const PostLinkContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
    margin: auto;

    ${media.sm} {
        width: 20%;
    }
`;

const PostBody = styled.div`
    margin: 2em 0 3em;
    padding: 10px;

    ${media.sm} {
        margin: 3em 0 0;
        padding: 30px;
    }
`;

const PostTextLink = styled.a<{ onClick?: any }>`
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

const PostLink = styled(Link)`
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

const PostSubtitle = styled.p`
    font-size: ${fontSizes.medium};
    max-width: 100%;
    text-align: center;
    margin: 0 auto 20px;

    ${media.sm} {
        max-width: 70%;
    }
`;

export {
    PostContainer,
    PostTitle,
    PostDate,
    PostImageContainer,
    PostContent,
    PostLinkContainer,
    PostBody,
    PostLink,
    PostTextLink,
    PostSubtitle,
};
