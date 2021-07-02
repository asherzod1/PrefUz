import React from 'react'

import { Link } from 'react-router-dom';
import { Progress } from 'reactstrap';
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
                                            <Link to='/test' className='home-banner-btn1'>Test topshir</Link>
                                            <Link to='/calcjobs' className='home-banner-btn2'>Kalkulyator</Link>
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
                <div className="HomeC-cards">
                    <div className="row">
                        <div className="col-12 HomeC-cards-top">
                            <h3>Kelajakni hozirdan quring</h3>

                        </div>
                    </div>
                    <div className="row home-cards">
                        <div className="cards-top-cards col-lg-3 col-md-6 col-sm-12">
                            <div className="cards-top-card">
                                <div className="cards-header">
                                    <span>Men katta bo’lsam shifokor bo’laman</span>
                                </div>
                                <div className="card-img">
                                    <img src="/images/Home/card1.png" alt="rasm" />
                                </div>
                            </div>
                        </div>
                        <div className="cards-top-cards col-lg-3 col-md-6 col-sm-12">
                            <div className="cards-top-card">
                                <div className="cards-header">
                                    <span>Men katta bo’lsam sportchi bo’laman</span>
                                </div>
                                <div className="card-img">
                                    <img src="/images/Home/card2.png" alt="rasm" />
                                </div>
                            </div>
                        </div>
                        <div className="cards-top-cards col-lg-3 col-md-6 col-sm-12">
                            <div className="cards-top-card">
                                <div className="cards-header">
                                    <span>Men katta bo’lsam tikuvchi bo’laman</span>
                                </div>
                                <div className="card-img">
                                    <img src="/images/Home/card3.png" alt="rasm" />
                                </div>
                            </div>
                        </div>
                        <div className="cards-top-cards col-lg-3 col-md-6 col-sm-12">
                            <div className="cards-top-card">
                                <div className="cards-header">
                                    <span>Men katta bo’lsam injener bo’laman</span>
                                </div>
                                <div className="card-img">
                                    <img src="/images/Home/card4.png" alt="rasm" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="HomeC-c4">
                    <div className="row">
                        <div className="col-lg-10 col-md-10 col-sm-12 offset-lg-1 offset-md-1 offset-sm-0">
                            <div className="c1 text-center">
                                <div className="c1-text">
                                    <h1 className='text-center'>Qanday qilib aniqlaymiz?</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
                                </div>
                                <div className="c1-img-content d-flex justify-content-between">
                                    <div className="c1-img d-flex flex-column align-items-center">
                                        <div className="c1-img-icon">
                                            <img src="/images/Home/c4-icon1.png" alt="rasm" />
                                        </div>
                                        <div className="c1-img-text">
                                            <p>Testni boshlash tugmasini bosing</p>
                                        </div>
                                    </div>
                                    <div className="c1-img d-flex flex-column align-items-center">
                                        <div className="c1-img-icon">
                                            <img src="/images/Home/c4-icon2.png" alt="rasm" />
                                        </div>
                                        <div className="c1-img-text">
                                            <p>Barcha savollarga javob bering</p>
                                        </div>
                                    </div>
                                    <div className="c1-img d-flex flex-column align-items-center">
                                        <div className="c1-img-icon">
                                            <img src="/images/Home/c4-icon3.png" alt="rasm" />
                                        </div>
                                        <div className="c1-img-text">
                                            <p>Kelajakda o’zingizga mos kasplarni ko’ring</p>
                                        </div>
                                    </div>
                                    <div className='border'></div>
                                </div>
                            </div>
                            <div className="c2">
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-6">
                                        <div className="c2-left">
                                            <h3>Sizdagi qiziqishlar</h3>
                                            <div className="row rating-row">
                                                    <p>Texnika va texnologiya</p>
                                                <div className="col-10 align-items-center justify-content-center">
                                                    <Progress className='c2-progress' color='warning' value={77}/>
                                                </div>
                                                <div className="col-2 ">
                                                    <p className='rating'>8.7</p>
                                                </div>
                                            </div>
                                            <div className="row rating-row">
                                                    <p>Rasm chizish</p>
                                                <div className="col-10 align-items-center justify-content-center">
                                                    <Progress className='c2-progress' color='warning' value={77}/>
                                                </div>
                                                <div className="col-2 ">
                                                    <p className='rating'>8.7</p>
                                                </div>
                                            </div>
                                            <div className="row rating-row">
                                                    <p>Musiqa va san'at</p>
                                                <div className="col-10 align-items-center justify-content-center">
                                                    <Progress className='c2-progress' color='warning' value={77}/>
                                                </div>
                                                <div className="col-2 ">
                                                    <p className='rating'>8.7</p>
                                                </div>
                                            </div>
                                            <div className="row rating-row">
                                                    <p>Insonlar bilan muloqot</p>
                                                <div className="col-10 align-items-center justify-content-center">
                                                    <Progress className='c2-progress' color='warning' value={77}/>
                                                </div>
                                                <div className="col-2 ">
                                                    <p className='rating'>8.7</p>
                                                </div>
                                            </div>
                                            <div className="row rating-row">
                                                    <p>Texnika va texnologiya</p>
                                                <div className="col-10 align-items-center justify-content-center">
                                                    <Progress className='c2-progress' color='warning' value={77}/>
                                                </div>
                                                <div className="col-2 ">
                                                    <p className='rating'>8.7</p>
                                                </div>
                                            </div>
                                            <div className="row rating-row">
                                                    <p>Texnika va texnologiya</p>
                                                <div className="col-10 align-items-center justify-content-center">
                                                    <Progress className='c2-progress' color='warning' value={77}/>
                                                </div>
                                                <div className="col-2 ">
                                                    <p className='rating'>8.7</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-12 col-lg-6">
                                        <div className="c2-right">
                                            <h3>Sizdagi qobilyatlar</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="c3">
                                <h3>Sizga mos kasplarni aniqlaymiz</h3>
                                <div className="c3-footer-img">
                                    <img src="/images/Home/home-footer.png" alt="" />
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
