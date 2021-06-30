import React from 'react';
import RezumeCreat1 from "../comps/RezumeCreatPage/RezumeCreat1";
import "../styles/rezumecreat.scss"
import LayOut from "../comps/LayOut";
import RezumCrbody from "../comps/RezumeCreatPage/RezumCrbody";
import RezumeCreatFooter from "../comps/RezumeCreatPage/RezumeCreatFooter";
function RezumeCreatPage(props) {
    return (
        <div>
            <LayOut>
                <RezumeCreat1/>
                <RezumCrbody/>
                <RezumeCreatFooter/>
            </LayOut>
        </div>
    );
}

export default RezumeCreatPage;