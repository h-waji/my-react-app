import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
    console.log("----- App -----");
    const [num, setNum] = useState(0);
    const [isShow, setIsShow] = useState(false);
    const onClickCountUp = () => {
        setNum((prev) => prev + 1);
    };
    const onClickToggle = () => {
        setIsShow(!isShow);
    }

    useEffect(() => {
        if (num > 0) {
            if(num % 3 === 0) {
                isShow || setIsShow(true);
            } else {
                isShow && setIsShow(false);
            }
        }
    }, [num]);

    return (
        <>
            <h1 style={{ color: "gray" }}>Hello!!</h1>
            <ColorfulMessage color="green">World!!</ColorfulMessage>
            <ColorfulMessage color="blue">世界！</ColorfulMessage>
            <button onClick={onClickCountUp}>+1</button>
            <p>{num}</p>
            <button onClick={onClickToggle}>カチカチ</button>
            {isShow && <p>めっちゃ眠い</p>}
        </>
    )
};
