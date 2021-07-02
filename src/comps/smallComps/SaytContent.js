import React from 'react';

function SaytContent(props) {
    return (
        <div>
            <div className="sayt-about-F">
                Bog'lanish
            </div>
            <div className="container">
                <div className="sayt-content">
                    <div className="row">
                        <div className="col-md-3 col-sm-4 col-12 col-lg-4">
                            <div className="sayt-content-card">
                                <div className="sayt-content-card-img">
                                    <img src="/image/tel.png" alt=""/>
                                </div>
                                <div className="sayt-content-card-text">
                                    +998 97 1234567
                                    +998 97 1234567
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4 col-12 col-lg-4">
                            <div className="sayt-content-card">
                                <div className="sayt-content-card-img">
                                    <img src="/image/sms.png" alt=""/>
                                </div>
                                <div className="sayt-content-card-text">

                                    info@xtv.uz
                                    info@websie.com
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4 col-12 col-lg-4">
                            <div className="sayt-content-card">
                                <div className="sayt-content-card-img">
                                    <img src="/image/map.png" alt=""/>
                                </div>
                                <div className="sayt-content-card-text">
                                    Tashkent, A Qodiriy ko’chasi, 123 bino,
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sayt-content-time">
                    Ish vaqtimiz: Dushanba - Juma, 9:00 - 18:00
                </div>
                <div className="sayt-content-map">

                </div>
            </div>

        </div>
    );
}

export default SaytContent;