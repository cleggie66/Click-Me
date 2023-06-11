import { useState } from "react"
import { useSelector } from "react-redux"
import colorsObject from "../resources/colors"
import Phase1 from "./phase1"

const ClickMe = () => {
    const clickState = useSelector(state => state.clicks);
    // const [textColorNum, setTextColorNum] = useState(0)
    // const [textHeightPosition, setTextHeightPosition] = useState(0)
    // const [textWidthPosition, setTextWidthPosition] = useState(0)
    // const [bgColorNum, setBgColorNum] = useState(10)


    const colors = Object.keys(colorsObject)

    // let phase1 = {
    //     color: colors[textColorNum],
    // };

    // let phase2 = {
    //     color: "white",
    //     position: "fixed",
    //     bottom: `${textHeightPosition}vh`,
    //     right: `${textWidthPosition}vw`,
    // };

    // let phase3 = {
    //     color: colors[textColorNum],
    //     position: "fixed",
    //     bottom: `${textHeightPosition}vh`,
    //     right: `${textWidthPosition}vw`,
    // };


    // function handleClick() {
    //     setClickCount(clickCount + 1);
    //     setTextColorNum(Math.floor(Math.random() * colors.length));
    //     setBgColorNum(Math.floor(Math.random() * colors.length));
    //     setTextHeightPosition(Math.floor(Math.random() * 95))
    //     setTextWidthPosition(Math.floor(Math.random() * 95))
    // }

    return (
        <>
        <h1>{clickState}</h1>
            {clickState < 10 && Phase1()}
        </>
    )
}

export default ClickMe