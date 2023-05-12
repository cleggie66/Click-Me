
export const click = (newClicks) => {
    return {
        type: "/clicks",
        newClicks
    }
}

const clicksReducer = (state = 0, action) => {
    switch (action.type) {
        case "/clicks":
            return {clicks: action.newClicks}
        default:
            return state
    }

}

export default clicksReducer