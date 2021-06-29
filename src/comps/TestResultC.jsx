import React from 'react'
import Link from 'react-router-dom/Link'
import { Progress } from 'reactstrap'
import '../styles/HomeC.scss'
import '../styles/TestResult.scss'
const TestResultC = () => {
    return (
        <div>
            <div className="testResult">
                <div className="testRes-header">
                    <div className="container">
                        <div className="testRes-header-content">
                            <p>
                                Asosiy / Kasplar / Test natijasi
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="testRes-content">
                        <div className="testRes-c1">
                            <div className="row">
                                <div className="col-lg-7 col-md-7 col-sm-12">
                                    <h1>
                                        Test natijasi
                                    </h1>
                                    <p>
                                        Salom, Sardor!, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-12">
                                    <div className='d-flex justify-content-end'>
                                        <Link className='testRes-c1-buttons'>
                                            PDF Saqla
                                            <img src='/images/TestResult/pdfIcon.png' alt='Icon'></img>
                                        </Link>
                                        <Link className='testRes-c1-buttons'>
                                            Share
                                            <img style={{marginLeft:'33px'}} src='/images/TestResult/shareIcon.png' alt='Icon'></img>
                                        </Link>
                                    </div>
                                </div>
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
                                                    <Progress className='c2-progress' color='danger' value={77}/>
                                                </div>
                                                <div className="col-2 ">
                                                    <p className='rating'>8.7</p>
                                                </div>
                                            </div>
                                            <div className="row rating-row">
                                                    <p>Rasm chizish</p>
                                                <div className="col-10 align-items-center justify-content-center">
                                                    <Progress className='c2-progress' color='danger' value={77}/>
                                                </div>
                                                <div className="col-2 ">
                                                    <p className='rating'>8.7</p>
                                                </div>
                                            </div>
                                            <div className="row rating-row">
                                                    <p>Musiqa va san'at</p>
                                                <div className="col-10 align-items-center justify-content-center">
                                                    <Progress className='c2-progress' color='danger' value={77}/>
                                                </div>
                                                <div className="col-2 ">
                                                    <p className='rating'>8.7</p>
                                                </div>
                                            </div>
                                            <div className="row rating-row">
                                                    <p>Insonlar bilan muloqot</p>
                                                <div className="col-10 align-items-center justify-content-center">
                                                    <Progress className='c2-progress' color='danger' value={77}/>
                                                </div>
                                                <div className="col-2 ">
                                                    <p className='rating'>8.7</p>
                                                </div>
                                            </div>
                                            <div className="row rating-row">
                                                    <p>Texnika va texnologiya</p>
                                                <div className="col-10 align-items-center justify-content-center">
                                                    <Progress className='c2-progress' color='danger' value={77}/>
                                                </div>
                                                <div className="col-2 ">
                                                    <p className='rating'>8.7</p>
                                                </div>
                                            </div>
                                            <div className="row rating-row">
                                                    <p>Texnika va texnologiya</p>
                                                <div className="col-10 align-items-center justify-content-center">
                                                    <Progress className='c2-progress' color='danger' value={77}/>
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
                            <div className="testRes-c3">
                                <h1>Sizga mos kasblar</h1>
                                <div className="testRes-cards">
                                    <div className="row">
                                        <div className="col-lg-8 col-md-12 col-sm-12">
                                            <div className="row">
                                                <div className="col-sm-12 col-md-6 col-lg-6">
                                                    <div className="allJobs-card">
                                                        <div className="row ">
                                                            <div className="col-4">
                                                                <div className="card-imgg">
                                                                    <img src="/images/AllJobs/card1.png" alt="rasm" />
                                                                </div>
                                                            </div>
                                                            <div className="col-8">
                                                                <div className="card-textt">
                                                                    <h3>Shifokor</h3>
                                                                    <p>Ish joyi: Maktab, Universitet, Kollej va boshqa o’quv markazlari</p>
                                                                    <h4>Maoshi*: 1 500 000 - 3 000 000 sum</h4>
                                                                    <Link className='allJobs-card-button'>Batafsil</Link>
                                                                </div>
                                                            </div>
                                                        </div>  
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-6 col-lg-6">
                                                    <div className="allJobs-card">
                                                        <div className="row">
                                                            <div className="col-4">
                                                                <div className="card-imgg">
                                                                    <img src="/images/AllJobs/card1.png" alt="rasm" />
                                                                </div>
                                                            </div>
                                                            <div className="col-8">
                                                                <div className="card-textt">
                                                                    <h3>Shifokor</h3>
                                                                    <p>Ish joyi: Maktab, Universitet, Kollej va boshqa o’quv markazlari</p>
                                                                    <h4>Maoshi*: 1 500 000 - 3 000 000 sum</h4>
                                                                    <Link className='allJobs-card-button'>Batafsil</Link>
                                                                </div>
                                                            </div>
                                                        </div>  
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-6 col-lg-6">
                                                    <div className="allJobs-card">
                                                        <div className="row">
                                                            <div className="col-4">
                                                                <div className="card-imgg">
                                                                    <img src="/images/AllJobs/card1.png" alt="rasm" />
                                                                </div>
                                                            </div>
                                                            <div className="col-8">
                                                                <div className="card-textt">
                                                                    <h3>Shifokor</h3>
                                                                    <p>Ish joyi: Maktab, Universitet, Kollej va boshqa o’quv markazlari</p>
                                                                    <h4>Maoshi*: 1 500 000 - 3 000 000 sum</h4>
                                                                    <Link className='allJobs-card-button'>Batafsil</Link>
                                                                </div>
                                                            </div>
                                                        </div>  
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-6 col-lg-6">
                                                    <div className="allJobs-card">
                                                        <div className="row">
                                                            <div className="col-4">
                                                                <div className="card-imgg">
                                                                    <img src="/images/AllJobs/card1.png" alt="rasm" />
                                                                </div>
                                                            </div>
                                                            <div className="col-8">
                                                                <div className="card-textt">
                                                                    <h3>Shifokor</h3>
                                                                    <p>Ish joyi: Maktab, Universitet, Kollej va boshqa o’quv markazlari</p>
                                                                    <h4>Maoshi*: 1 500 000 - 3 000 000 sum</h4>
                                                                    <Link className='allJobs-card-button'>Batafsil</Link>
                                                                </div>
                                                            </div>
                                                        </div>  
                                                    </div>
                                                </div>
                                                
                                                <div className="col-12 testRes-c3-Button-div">
                                                    <Link className='testRes-c3-Button'>Kasplar katalogi</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-0">
                                            <img className='w-100' src="/images/TestResult/c3-image.png" alt="rasm" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                    </div>
                </div>           
            </div>         
        </div>
    )
}

export default TestResultC
