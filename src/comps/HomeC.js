import React from 'react'

import { Link } from 'react-router-dom';
const HomeC = () => {
    return (
        <div className='HomeC'>
            <div className="container">
                <div className="HomeC-c1">
                    <div className="home-banner">
                            <div className="row">
                                <div className="col-md-8 col-lg-7 col-sm-12">
                                    <div className="home-banner-left">
                                        <h3>
                                            Kelajakda o’zingizga munosib kasbni aniqlang
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                        <div className="home-banner-buttons">
                                            <Link className='home-banner-btn1'>Test topshir</Link>
                                            <Link className='home-banner-btn2'>Kalkulyator</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-5 col-sm-0 home-banner-r">
                                    <div className="home-banner-right">
                                        <img src="/images/Home/image.png" alt="" />
                                        <img src="/images/Home/word.png" alt="" />
                                        <img src="/images/Home/word4.png" alt="" />
                                        <img src="/images/Home/word3.png" alt="" />
                                        <img src="/images/Home/word2.png" alt="" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="HomeC-c2">
                        <div className="row">
                            <div className="col-md-5 col-lg-5 col-sm-12 home-c2-left">
                                <img src="/images/Home/c2,1.png" alt="rasm" />
                                <img src="/images/Home/c2.png" alt="rasm" />
                                <img src="/images/Home/c2,2.png" alt="rasm" />
                            </div>
                            <div className="col-md-7 col-lg-7 col-sm-12 home-c2-right">
                                <span className='loyiha-haqida'>Loyiha haqida</span>
                                <h1>Qobiliyat va imkoniyatlaringiz darajasini aniqlang</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
                                <div>
                                    <span>
                                        <span>
                                            <img src="/images/Home/people-icon.png" alt="" />
                                        </span>
                                        <h3>Ota onalarga</h3>
                                    </span>
                                    <span>
                                        <span>
                                            <img src="/images/Home/people-icon.png" alt="" />
                                        </span>
                                        <h3>Bitiruvchilarga</h3>
                                    </span>
                                    <span>
                                        <span>
                                            <img src="/images/Home/people-icon.png" alt="" />
                                        </span>
                                        <h3>Ustozlarga</h3>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default HomeC
