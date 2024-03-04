import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
    const onClickButton = () => alert();
    return (
        <>
            <h1 style={{ color: "gray" }}>Hello!!</h1>
            <ColorfulMessage color="green">World!!</ColorfulMessage>
            <ColorfulMessage color="blue">世界！</ColorfulMessage>
            <button onClick={onClickButton}>Button</button>
        </>
    )
};
