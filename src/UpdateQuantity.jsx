import React from 'react'
import { useSelector } from 'react-redux'

function UpdateQuantity() {
    const quantity = useSelector((state) => {
        return state.quantity;
    })
    return (
        <>
            <button>-</button>
            <input type="text" value={quantity} readOnly />
            <button>+</button>
        </>
    )
}

export default UpdateQuantity