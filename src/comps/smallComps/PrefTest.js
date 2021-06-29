import React from 'react';
import {Link} from 'react-router-dom'

function PrefTest(props) {
    return (
        <div>
            <div className="docP-header">

            </div>
            <div className="container">

                <div className="test-page">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="test-page">
                                <div className="test-title">
                                    Test 20 ta savoldan iborat
                                </div>
                                <div className="testP-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aspernatur beatae
                                    dicta
                                    dolorum eius exercitationem ipsum natus nostrum quibusdam quos, ratione veniam vero,
                                    voluptatem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt magni
                                    optio similique.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis!
                                </div>
                                <div className="testP-section ">
                                    <div className="testP-header d-flex">
                                        <div className="testP-item ">
                                            <img src="/image/inkor.png" alt=""/>
                                        </div>
                                        <div className="testP-item-title">
                                            Eslatma
                                        </div>
                                    </div>
                                    <div className="test-section-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </div>
                                </div>
                                <Link to='/tests'>
                                    <div className="testp-button">Testni boshlash
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="testP-img">
                                <img className='img-fluid'  src="/image/bola.png" alt=""/>
                                <div className="testP-idea">
                                    <img src="/image/uchbur.png" alt=""/>
                                </div>
                                <div className="testP-idea-1">
                                    <img src="/image/yulduz.png" alt=""/>
                                </div>
                                <div className="testP-idea-2">
                                    <img src="/image/tort.png" alt=""/>
                                </div>
                                <div className="testP-idea-3">
                                    <img src="/image/soroq.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrefTest;