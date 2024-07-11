export const increaseQuantity = (value) => {
    return {
        type: "increase",
        payload: value
    }
}

export const decreaseQuantity = (value) => {
    return {
        type: "decrease",
        payload: value
    }
}
