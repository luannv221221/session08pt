const initialQuantity = 10;

export const quantity = (state = initialQuantity, action) => {

    switch (action.type) {
        case "increase":
            return state + action.payload;

        case "decrease":
            return state - action.payload;
        default:
            return state;
    }

}