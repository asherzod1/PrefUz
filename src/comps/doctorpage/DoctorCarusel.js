import React from 'react';
import Slider from "react-slick";
function DoctorCarusel(props) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [

            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };
    return (
        <div>
            <div className="carusel">

                <div className="container">
                  <div className="carusel-title">
                      O’xshash kasplar
                  </div>
                    <div className="carusel-slick">
                        <Slider {...settings}>
                            <div>
                                <div className="slickcard d-flex ">
                                 <div className="slickimg">
                                     <img src="/image/doccar.png" alt=""/>
                                 </div>
                                    <div className="slicktext">
                                        <div className="slick-title">
                                            Shifokor
                                        </div>
                                        <div className="slick-text">
                                            Ish joyi: Maktab, Universitet, Kollej va <br/>
                                            boshqa o’quv markazlari <br/>
                                            Maoshi*: 1 500 000 - 3 000 000 sum
                                        </div>
                                        <div className="slick-button">
                                            Batafsil
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="slickcard d-flex ">
                                    <div className="slickimg">
                                        <img src="/image/teacher.png" alt=""/>
                                    </div>
                                    <div className="slicktext">
                                        <div className="slick-title">
                                            Teacher
                                        </div>
                                        <div className="slick-text">
                                            Ish joyi: Maktab, Universitet, Kollej va <br/>
                                            boshqa o’quv markazlari <br/>
                                            Maoshi*: 1 500 000 - 3 000 000 sum
                                        </div>
                                        <div className="slick-button">
                                            Batafsil
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="slickcard d-flex ">
                                    <div className="slickimg">
                                        <img src="/image/arxi.png" alt=""/>
                                    </div>
                                    <div className="slicktext">
                                        <div className="slick-title">
                                            Arxitektor
                                        </div>
                                        <div className="slick-text">
                                            Ish joyi: Maktab, Universitet, Kollej va <br/>
                                            boshqa o’quv markazlari <br/>
                                            Maoshi*: 1 500 000 - 3 000 000 sum
                                        </div>
                                        <div className="slick-button">
                                            Batafsil
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="slickcard d-flex ">
                                    <div className="slickimg">
                                        <img src="/image/teacher.png" alt=""/>
                                    </div>
                                    <div className="slicktext">
                                        <div className="slick-title">
                                            Teacher
                                        </div>
                                        <div className="slick-text">
                                            Ish joyi: Maktab, Universitet, Kollej va <br/>
                                            boshqa o’quv markazlari <br/>
                                            Maoshi*: 1 500 000 - 3 000 000 sum
                                        </div>
                                        <div className="slick-button">
                                            Batafsil
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="slickcard d-flex ">
                                    <div className="slickimg">
                                        <img src="/image/arxi.png" alt=""/>
                                    </div>
                                    <div className="slicktext">
                                        <div className="slick-title">
                                            Arxitektor
                                        </div>
                                        <div className="slick-text">
                                            Ish joyi: Maktab, Universitet, Kollej va <br/>
                                            boshqa o’quv markazlari <br/>
                                            Maoshi*: 1 500 000 - 3 000 000 sum
                                        </div>
                                        <div className="slick-button">
                                            Batafsil
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="slickcard d-flex ">
                                    <div className="slickimg">
                                        <img src="/image/teacher.png" alt=""/>
                                    </div>
                                    <div className="slicktext">
                                        <div className="slick-title">
                                            Teacher
                                        </div>
                                        <div className="slick-text">
                                            Ish joyi: Maktab, Universitet, Kollej va <br/>
                                            boshqa o’quv markazlari <br/>
                                            Maoshi*: 1 500 000 - 3 000 000 sum
                                        </div>
                                        <div className="slick-button">
                                            Batafsil
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="caruselbutton">
                        Barcha kasblar
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoctorCarusel;