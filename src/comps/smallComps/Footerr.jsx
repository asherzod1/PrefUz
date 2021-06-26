import React from 'react'
import {NavbarBrand} from "reactstrap";

const Footer = () => {
    return (
        <div>
            <div className="container">
                <div className="footerPref">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer-logo">
                                <div className="brand-nav d-flex  ">
                                    <img src="/image/Prof.png" alt=""/>
                                    <img className='logo' src="/image/logo.png" alt=""/>
                                </div>
                            </div>
                            <div className="footer-title">
                                Xalq Ta’limi Vazirligi <br/> Copyright 2021 (c) Multimedia markazi email: prof@itsm.uz
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-section">
                                Biz haqimizda
                            </div>
                            <div className="footer-section">
                                Yordam
                            </div>
                            <div className="footer-section">
                                Saytlarimiz
                            </div>
                            <div className="footer-section">
                                Bog'lanish
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-section">
                               Ro'yxatdan o'tish
                            </div>
                            <div className="footer-section">
                                Tizimga kirish
                            </div>
                            <div className="footer-section">
                                Kasp tanalash
                            </div>
                            <div className="footer-section">
                                Treninglar
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-section">
                                <a href="">
                                    xtv.uz
                                </a>
                            </div>
                            <div className="footer-section">
                                <a href="">
                                    kitob.uz
                                </a>
                            </div>
                            <div className="footer-section">
                                <a href="">
                                    ziyouz.com
                                </a>
                            </div>
                            <div className="footer-section">
                                <a href="">
                                    ziyonet.com
                                </a>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="network">
                                <div className="network-logo">
                                    <img src="/image/youtube.png" alt=""/>
                                </div>
                                <div className="network-title">
                                    <a href="">/youtube</a>
                                </div>
                            </div>
                            <div className="network">
                                <div className="network-logo">
                                    <img src="/image/facebook.png" alt=""/>
                                </div>
                                <div className="network-title">
                                    <a href="">
                                        /facebook
                                    </a>
                                </div>
                            </div>
                            <div className="network">
                                <div className="network-logo">
                                    <img src="/image/instagram.png" alt=""/>
                                </div>
                                <div className="network-title">
                                    <a href="">
                                        /instagram
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
