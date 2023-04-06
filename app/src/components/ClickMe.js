import { useState } from "react"
import COLORS from "../resources/colors"

const ClickMe = () => {
    const [textColorNum, setTextColorNum] = useState(0)
    const [bgColorNum, setBgColorNum] = useState(10)


    const colors = Object.keys(COLORS)

    function randomValues() {
        setTextColorNum(Math.floor(Math.random() * colors.length));
        setBgColorNum(Math.floor(Math.random() * colors.length));
    }

    return (
        <div
            className="background"
            style={{ backgroundColor: colors[bgColorNum] }}
        >
            <div
                onClick={() => randomValues()}
            >
                <h1
                    style={{ color: colors[textColorNum] }}
                >Click Me</h1>
            </div>
        </div>
    )
}

export default ClickMe