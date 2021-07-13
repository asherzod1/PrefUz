import React,{useEffect,useState} from 'react';
import axios from "axios";

function DoctorPageSection2(props) {
    useEffect(()=> {
        axios.get('http://195.158.24.249:2030/api/auth/trainings')
            .then(res=>{
                console.log(res)
            })
    },[])
    return (
        <div>
             <div className="container">
                 <div className="doc-section">
                        <div className="doc-title">
                            Shifokor turlari
                        </div>
                            <div className="row ">
                                <div className="col-md-4 col-lg-2  col-sm-6 col-12 ">
                                    <div className="doc-card">
                                        <div className="card-img">
                                            <img src="/image/stamat.png" alt=""/>
                                        </div>
                                        <div className="card-title">
                                            Stamatalog
                                        </div>
                                        <div className="card-text">
                                            Lorem ipsum dolor sit.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-lg-2 col-12">
                                    <div className="doc-card">
                                        <div className="card-img">
                                            <img src="/image/xirurg.png" alt=""/>
                                        </div>
                                        <div className="card-title">
                                            Xirurg
                                        </div>
                                        <div className="card-text">
                                            Lorem ipsum dolor sit.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-2 col-sm-6 col-12">
                                    <div className="doc-card">
                                        <div className="card-img">
                                            <img src="/image/akusher.png" alt=""/>
                                        </div>
                                        <div className="card-title">
                                          Akusher
                                        </div>
                                        <div className="card-text">
                                            Lorem ipsum dolor sit.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-2 col-sm-6">
                                    <div className="doc-card">
                                        <div className="card-img">
                                            <img src="/image/trav.png" alt=""/>
                                        </div>
                                        <div className="card-title">
                                            Travmatalog
                                        </div>
                                        <div className="card-text">
                                            Lorem ipsum dolor sit.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-2 col-sm-6">
                                    <div className="doc-card">
                                        <div className="card-img">
                                            <img className='img-fluid' src="/image/uralog.png" alt=""/>
                                        </div>
                                        <div className="card-title">
                                         Uralog
                                        </div>
                                        <div className="card-text">
                                            Lorem ipsum dolor sit.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4  col-lg-2 col-sm-4">
                                    <div className="doc-card">
                                        <div className="card-img">
                                            <img src="/image/pediatr.png" alt=""/>
                                        </div>
                                        <div className="card-title">
                                            Pediatr
                                        </div>
                                        <div className="card-text">
                                            Lorem ipsum dolor sit.
                                        </div>
                                    </div>
                                </div>

                            </div>

                 </div>
             </div>
        </div>
    );
}

export default DoctorPageSection2;