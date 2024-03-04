export const ColorfulMessage = (props) => {
    const { color, children } = props;
    const contentStyle = {
        color,
        fontSize: "20px",
        margin: 50
    };

    return (
        <h2 style={contentStyle}>{children}</h2>
    )
}
