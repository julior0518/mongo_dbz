


const reducer = (
    state = {
        initialValue: 21,
        otherThing: ""
    }, action) => {
        switch (action.type) {
            case "increase":
                return {...state, initialValue: state.initialValue + action.payload}
            case "decrease":
                return {...state, initialValue: state.initialValue - action.payload}
            default:
                return state;
    }
}

export default reducer;