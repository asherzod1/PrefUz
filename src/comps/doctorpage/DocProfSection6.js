import React,{useEffect, useState} from 'react';
import axios from "axios";
function DocProfSection6(props) {
    const [state, usState]=useState([])
    useEffect(()=>{
       axios.get("http://195.158.24.249:2030/api/auth/professions")
           .then((res)=>{
                 console.log(res)
           })

    },[])
    return (
        <div>
            <div className="container">
                <div className="itemProf">
                    <div className="Prof-item">
                        <div className="item-text">
                            Qayerlarda ishlaydi?
                        </div>
                        <div className="item-text-footer">
                            Asosan kasalxonalarda, ammo bundan tashqari tibbiyot sohasining boshqauv qismida masalan
                            vazirlik va boshqarmalarda ham ishlashi mumkin, xususiy va davlat klinikalari va boshqalarda
                            masalan:


                        </div>
                        <div className="cardItem">
                            <div className="row">
                                <div className="col-md-6 col-lg-2 col-sm-6 ">
                                    <div className="itemcard">
                                        <img src="/image/gerb.png" alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-2 col-sm-6 ">
                                    <div className="itemcard">
                                        <img src="/image/city.png" alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-2 col-sm-6">
                                    <div className="itemcard">
                                        <img src="/image/akfa.png" alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-2 col-sm-6">
                                    <div className="itemcard">
                                        <img src="/image/nocommet.png" alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-2 col-sm-6">
                                    <div className="itemcard">
                                        <img src="/image/hayat.png" alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-2 col-sm-6">
                                    <div className="itemcard">
                                        <img src="/image/salus.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item-video">
                            <img className='img-fluid' src="/image/doc.png" alt=""/>
                        </div>
                        <div className="item-videoname">
                            Kasb haqida videolavha
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DocProfSection6;