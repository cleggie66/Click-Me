import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import colorsObject from "../resources/colors"

const Phase1 = () => {
    const clickState = useSelector(state => state.clicks);
    const dispatch = useDispatch()

    const [clickCount, setClickCount] = useState(clickState)
    const [textColorNum, setTextColorNum] = useState(0)
    const [bgColorNum, setBgColorNum] = useState(10)

    const colors = Object.keys(colorsObject)
    
    function handleClick() {
        setClickCount(clickCount + 1);
        setTextColorNum(Math.floor(Math.random() * colors.length));
        setBgColorNum(Math.floor(Math.random() * colors.length));
        dispatch(clickCount)
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
                <h1>click me</h1>
            </div>
            <h2>Click Count: {clickCount}</h2>
        </div>
    )
}

export default Phase1