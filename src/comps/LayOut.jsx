import React from 'react'
import Footerr from './smallComps/Footerr'
import Navbarr from './smallComps/Navbarr'

const LayOut = (props) => {
    return (
        <div>
            <Navbarr />
                {props.children}
            <Footerr />
        </div>
    )
}

export default LayOut
