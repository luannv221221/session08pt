import React from 'react'
import { useSelector } from 'react-redux';

function Quantity() {
    const quantity = useSelector((state) => {
        return state.quantity;
    })
    return (
        <div>{quantity}</div>
    )
}

export default Quantity