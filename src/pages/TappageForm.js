import React from 'react';
import LayOut from "../comps/LayOut";
import ResumeTabCreatForm from "../comps/TabFormResume/ResumeTabCreatForm";
import '../styles/Tabresume.scss'
function TappageForm(props) {
    return (
        <div>
            <LayOut>
               <ResumeTabCreatForm/>
            </LayOut>
        </div>
    );
}

export default TappageForm;