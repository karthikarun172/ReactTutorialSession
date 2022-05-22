import React from 'react'
import "../Cssfiles/Card.css"

function Card({ hotel_Name, rating, cusinie, distance }) {
    return (
        <div className='CardContainer' >
            <div>
                <h4>{hotel_Name}</h4>
                <h4>{cusinie}</h4>
            </div>
            <div>
                <h5>{rating}</h5>
                <p>{distance}</p>
            </div>
        </div>
    )
}

export default Card