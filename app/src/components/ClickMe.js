import { useState } from "react"
import colorsObject from "../resources/colors"
import { fonts, textTransforms, fontWeights } from "../resources/fonts"

const ClickMe = () => {
    const [clickCount, setClickCount] = useState(0)
    const [textColorNum, setTextColorNum] = useState(0)
    // const [textTransformNum, setTextTransformNum] = useState(0)
    // const [fontFamilyNum, setFontFamilyNum] = useState(0)
    const [fontWeightNum, setFontWeightNum] = useState(0)
    const [textHeightPosition, setTextHeightPosition ] = useState(0)
    const [textWidthPosition, setTextWidthPosition] = useState(0)
    const [bgColorNum, setBgColorNum] = useState(10)


    const colors = Object.keys(colorsObject)

    let phase1 = {
        fontWeight: fontWeights[fontWeightNum],
        color: colors[textColorNum],
        // fontFamily: fonts[fontFamilyNum],
        // textTransform: textTransforms[textTransformNum],
    };

    let phase2 = {
        fontWeight: fontWeights[fontWeightNum],
        color: "white",
        // fontFamily: fonts[fontFamilyNum],
        // textTransform: textTransforms[textTransformNum],
        position: "fixed",
        bottom: `${textHeightPosition}vh`,
        right: `${textWidthPosition}vw`,
    };

    let phase3 = {
        fontWeight: fontWeights[fontWeightNum],
        color: colors[textColorNum],
        // fontFamily: fonts[fontFamilyNum],
        // textTransform: textTransforms[textTransformNum],
        position: "fixed",
        bottom: `${textHeightPosition}vh`,
        right: `${textWidthPosition}vw`,
    };


    function handleClick() {
        setClickCount(clickCount + 1);
        setTextColorNum(Math.floor(Math.random() * colors.length));
        setBgColorNum(Math.floor(Math.random() * colors.length));
        // setFontFamilyNum(Math.floor(Math.random() * fonts.length));
        setFontWeightNum(Math.floor(Math.random() * fontWeights.length))
        // setTextTransformNum(Math.floor(Math.random() * textTransforms.length))
        setTextHeightPosition(Math.floor(Math.random() * 95))
        setTextWidthPosition(Math.floor(Math.random() * 95))
    }

    return (
        <div
            className="background"
            style={{ backgroundColor: colors[bgColorNum] }}
        >
            <div
                className="text-box"
                onClick={handleClick}
            >
                {clickCount < 10 && (<h1 style={phase1}>click me</h1>)}
                {clickCount === 10 && (<h1 style={phase2}>click me</h1>)}
                {clickCount > 10 && (<h1 style={phase3}>click me</h1>)}
            </div>
            <h2>Click Count: {clickCount}</h2>
        </div>
    )
}

export default ClickMe