import React from 'react'


function Counter({ value, handleIncrement, handleDecrement }) {
    return (
        <div>
            <h3>{value}</h3>
            <button onClick={handleIncrement} >add</button>
            <button onClick={handleDecrement} >sub</button>
        </div>
    )
}

export default Counter