export const testIncreaseAction = (amount) => {
    return (dispatch) => {
        dispatch({
            type:"increase",
            payload: amount,
                
        })
    }
}

export const testDecreaseAction = (amount) => {
    return (dispatch) => {
        dispatch({
            type:"decrease",
            payload: amount
        })
    }
}