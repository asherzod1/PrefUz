import React from 'react'
import LayOut from '../comps/LayOut'
import HomeC from "../comps/HomeC";
import DoctorCarusel from "../comps/doctorpage/DoctorCarusel";

const Home = () => {
    return (
        <div>
             <LayOut>
                <HomeC />
                <DoctorCarusel/>
             </LayOut>
        </div>
    )
}

export default Home
