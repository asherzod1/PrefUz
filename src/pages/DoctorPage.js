import React from 'react';
import LayOut from "../comps/LayOut";
import DoctorpageP1 from "../comps/doctorpage/DoctorpageP1";
import DoctorPageSection2 from "../comps/doctorpage/DoctorPageSection2";
import Doctorbody3 from "../comps/doctorpage/Doctorbody3";
import DocSection4 from "../comps/doctorpage/DocSection4";
import KaBiyfaoliyat5 from "../comps/doctorpage/KaBiyfaoliyat5";
import DocProfSection6 from "../comps/doctorpage/DocProfSection6";
import SpetsaliPage7 from '../comps/doctorpage/SpetsaliPage7'
import DoctorCarusel from "../comps/doctorpage/DoctorCarusel";
function DoctorPage(props) {
    return (
        <LayOut>
            <DoctorpageP1/>
            <DoctorPageSection2/>
            <Doctorbody3/>
            <DocSection4/>
            <KaBiyfaoliyat5/>
            <DocProfSection6/>
            <SpetsaliPage7/>
            <DoctorCarusel/>
        </LayOut>
    );
}

export default DoctorPage;