
import React,{useState} from 'react'
import { Collapse, CardBody, Card } from 'reactstrap';

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const toggle1 = () => setIsOpen1(!isOpen1);
    const toggle2 = () => setIsOpen2(!isOpen2);
    const toggle3 = () => setIsOpen3(!isOpen3);

    return (
        <div>
            <div className="container">
                <div className="footerPref">
                    <div className="row">
                        <div className="col-md-12 col-lg-4 col-sm-12">

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
                        <div className=" col-sm-12 col-md-3 col-lg-2">
                            <div className="collapse-footer">
                                <button className='button-coll' onClick={toggle}>Biz haqimizda
                                    {
                                        isOpen?
                                            <img src="/image/misus.png" alt=""/>:
                                            <img src="/image/plus.png" alt=""/>
                                    }
                                </button>

                                <Collapse isOpen={isOpen}>
                                    <Card>
                                        <CardBody>
                                            <div className="footer-section1">
                                                Biz haqimizda
                                            </div>
                                            <div className="footer-section1">
                                                Yordam
                                            </div>
                                            <div className="footer-section1">
                                                Saytlarimiz
                                            </div>
                                            <div className="footer-section1">
                                                Bog'lanish
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Collapse>
                            </div>
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
                        <div className="col-sm-12 col-md-3 col-lg-2">
                            <div className="collapse-footer">
                                <button className='button-coll' onClick={toggle1}>Ro'yxatdan o'tish
                                    {
                                        isOpen1?
                                            <img src="/image/misus.png" alt=""/>:
                                            <img src="/image/plus.png" alt=""/>
                                    }
                                </button>

                                <Collapse isOpen={isOpen1}>
                                    <Card>
                                        <CardBody>
                                            <div className="footer-section1">
                                                Ro'yxatdan o'tish
                                            </div>
                                            <div className="footer-section1">
                                                Tizimga kirish
                                            </div>
                                            <div className="footer-section1">
                                                Kasp tanalash
                                            </div>
                                            <div className="footer-section1">
                                                Treninglar
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Collapse>
                            </div>
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
                        <div className="col-sm-12 col-md-3 col-lg-2">
                            <div className="collapse-footer">
                                <button className='button-coll' onClick={toggle2}>Internetdagi saytlarimiz
                                    {
                                        isOpen2?
                                            <img src="/image/misus.png" alt=""/>:
                                            <img src="/image/plus.png" alt=""/>
                                    }
                                </button>

                                <Collapse isOpen={isOpen2}>
                                    <Card>
                                        <CardBody>
                                            <div className="footer-section1">
                                                <a href="https://xtv.uz">
                                                    xtv.uz
                                                </a>
                                            </div>
                                            <div className="footer-section1">
                                                <a href="https://kitob.uz">
                                                    kitob.uz
                                                </a>
                                            </div>
                                            <div className="footer-section1">
                                                <a href="https://ziyouz.com">
                                                    ziyouz.com
                                                </a>
                                            </div>
                                            <div className="footer-section1">
                                                <a href="https://ziyonet.com">
                                                    ziyonet.com
                                                </a>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Collapse>
                            </div>
                            <div className="footer-section">
                                <a href="https://xtv.uz">
                                    xtv.uz
                                </a>
                            </div>
                            <div className="footer-section">
                                <a href="https://kitob.uz">
                                    kitob.uz
                                </a>
                            </div>
                            <div className="footer-section">
                                <a href="https://ziyo.uz">
                                    ziyouz.com
                                </a>
                            </div>
                            <div className="footer-section">
                                <a href="https://ziyonet.com">
                                    ziyonet.com
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-2">
                            <div className="collapse-footer">
                                <button className='button-coll' onClick={toggle3}>Internetdagi saytlarimiz
                                    {
                                        isOpen3?
                                            <img src="/image/misus.png" alt=""/>:
                                            <img src="/image/plus.png" alt=""/>
                                    }
                                </button>

                                <Collapse isOpen={isOpen3}>
                                    <Card>
                                        <CardBody>
                                            <div className="network1">
                                                <div className="network-logo">
                                                    <img src="/image/youtube.png" alt=""/>
                                                </div>
                                                <div className="network-title">
                                                    <a href="https://youtube.com">/youtube</a>
                                                </div>
                                            </div>
                                            <div className="network1">
                                                <div className="network-logo">
                                                    <img src="/image/facebook.png" alt=""/>
                                                </div>
                                                <div className="network-title">
                                                    <a href="https://facebook.com">
                                                        /facebook
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="network1">
                                                <div className="network-logo">
                                                    <img src="/image/instagram.png" alt=""/>
                                                </div>
                                                <div className="network-title">
                                                    <a href="https://instagram.com">
                                                        /instagram
                                                    </a>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Collapse>
                            </div>
                            <div className="network">
                                <div className="network-logo">
                                    <img src="/image/youtube.png" alt=""/>
                                </div>
                                <div className="network-title">
                                    <a href="https://youtube.com">/youtube</a>
                                </div>
                            </div>
                            <div className="network">
                                <div className="network-logo">
                                    <img src="/image/facebook.png" alt=""/>
                                </div>
                                <div className="network-title">
                                    <a href="https://youtube.com">
                                        /facebook
                                    </a>
                                </div>
                            </div>
                            <div className="network">
                                <div className="network-logo">
                                    <img src="/image/instagram.png" alt=""/>
                                </div>
                                <div className="network-title">
                                    <a href="https://instagram.com">
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
