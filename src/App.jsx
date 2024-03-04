import { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
    const [num, setNum] = useState(0);
    const onClickCountUp = () => {
        setNum((prev) => {
            return prev + 11;
        });
        setNum((prev) => {
            return prev + 9;
        });
    };
    return (
        <>
            <h1 style={{ color: "gray" }}>Hello!!</h1>
            <ColorfulMessage color="green">World!!</ColorfulMessage>
            <ColorfulMessage color="blue">世界！</ColorfulMessage>
            <button onClick={onClickCountUp}>+1</button>
            <p>{num}</p>
        </>
    )
};
