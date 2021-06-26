import React from 'react'
import Footerr from './smallComps/Footerr'
import NavbarPref from "./smallComps/NavbarPref";


const LayOut = (props) => {
    return (
        <div>
            <NavbarPref/>
                {props.children}
            <Footerr />
        </div>
    )
}

export default LayOut
