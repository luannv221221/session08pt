import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, increaseQuantity } from './redux/actions/quantity';

function UpdateQuantity() {
    const quantity = useSelector((state) => {
        return state.quantity;
    });

    const dispath = useDispatch();
    const increaseQty = () => {
        dispath(increaseQuantity(1));
    }
    const decreaseQty = () => {
        dispath(decreaseQuantity(1))
    }
    return (
        <>
            <button onClick={decreaseQty}>-</button>
            <input type="text" value={quantity} readOnly />
            <button onClick={increaseQty}>+</button>
        </>
    )
}

export default UpdateQuantity