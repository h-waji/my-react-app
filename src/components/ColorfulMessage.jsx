export const ColorfulMessage = ({ color, children }) => {
    console.log('----- ColorfulMessage -----');
    const contentStyle = {
        color,
        fontSize: "20px",
        margin: 50
    };

    return (
        <h2 style={contentStyle}>{children}</h2>
    )
}
