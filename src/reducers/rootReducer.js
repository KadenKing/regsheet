const initialState = {
    regex: "",
    text: "Sample Text",
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_REGEX':
            return {
                ...state,
                regex: action.payload,
            }
        case 'SET_TEXT':
            return {
                ...state,
                text: action.payload,
            }
        default:
            return state
    }
}

export default rootReducer  