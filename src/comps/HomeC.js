import React from 'react'
import '../styles/HomeC.scss'
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
            </div>
        </div>
    )
}

export default HomeC
