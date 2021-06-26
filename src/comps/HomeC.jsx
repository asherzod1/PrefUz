import React from 'react'
import '../styles/HomeC.scss';
import { Link } from 'react-router-dom';
const HomeC = () => {
    return (
        <div className='HomeC'>
            <div className="container">
                <div className="HomeC-c1">
                    <div className="home-banner">
                            <div className="row">
                                <div className="col-md-7 col-lg-7 col-sm-12">
                                    <div className="home-banner-left">
                                        <h3>
                                            Kelajakda o’zingizga munosib kasbni aniqlang
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                        <Link className='home-banner-btn1'>Test topshir</Link>
                                        <Link className='home-banner-btn2'>Kalkulyator</Link>
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
