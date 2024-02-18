import { React, useState } from 'react'
import "./Card.css"

const Card = ({ name, emoji }) => {
    
    const [ out, setOut ] = useState(false)

    return (
        <div className={ out ? "discard" : "card" } onClick={() => setOut(!out)}>
            <p>{ out ? emoji : name }</p>
        </div>
    )
}

export default Card