import React from 'react';
import SaytAboutPage from "../comps/smallComps/SaytAboutPage";
import LayOut from "../comps/LayOut";
import '../styles/Satyabout.scss'
function SaytAbout(props) {
    return (
        <div>
            <LayOut>
                <SaytAboutPage/>
            </LayOut>
        </div>
    );
}

export default SaytAbout;