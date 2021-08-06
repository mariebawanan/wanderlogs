const generateMedia = (minWidth: number) =>
    `@media (min-width: ${minWidth}px)`;

const media = {
    xs: generateMedia(480),
    sm: generateMedia(768),
    md: generateMedia(992),
    lg: generateMedia(1200),
    xl: generateMedia(1400),
};

export default media;
