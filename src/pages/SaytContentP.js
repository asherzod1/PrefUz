import React from 'react';
import LayOut from "../comps/LayOut";
import SaytContent from '../comps/smallComps/SaytContent'
import '../styles/SaytContent.scss'
function SaytContentP(props) {
    return (
        <div>
            <LayOut>
                <SaytContent/>
            </LayOut>
        </div>
    );
}

export default SaytContentP;