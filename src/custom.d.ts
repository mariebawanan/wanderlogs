declare module '*.svg' {
    const content:
        | React.FunctionComponent<React.SVGAttributes<SVGElement>>
        | FunctionComponent<SVGAttributes<SVGElement>>;
    export default content;
}
