import React, { useState } from 'react'

function NewPage() {
    const [data, setData] = useState([1, 2, 3, 4, 23, 4])

    return (
        <div>
            <p>this is the value of data</p>
        </div>
    )
}

export default NewPage