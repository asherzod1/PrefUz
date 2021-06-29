import React from 'react'
import './scss/ComponentHeader.scss'
const ComponentHeader = (props) => {
    return (
        <div className='componentHeader'>
            <div className="container">
                <p>{props.children}</p>
            </div>
        </div>
    )
}

export default ComponentHeader
