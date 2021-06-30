import React, {useState} from 'react';
import '../../styles/training.scss'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";

function TrainingPage(props) {
    const [dropdownOpen3, setDropdownOpen3] = useState(false);
    const toggle3 = () => {
        setDropdownOpen3(!dropdownOpen3)
    }
    return (
        <div>
            <div className="train-He">
                <div className="train-He-title">
                    Treninglar mashqlar
                </div>
            </div>
            <div className="train-Header">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 col-12 col-sm-12">
                            <input type="text" className='form-control' placeholder=' Qidirish'/>
                        </div>
                        <div className="col-md-4 col-12 col-sm-6 ">
                            <div className="train-drop">
                                <Dropdown isOpen={dropdownOpen3} toggle={toggle3}>
                                    <DropdownToggle className='train-filtr form-control' caret>
                                        Filtrlash
                                    </DropdownToggle>
                                    <DropdownMenu left className='w-100 dropdown-menuu'>
                                        <DropdownItem className='dropdown-itemm'>Talab yuqori kasblar</DropdownItem>
                                        <DropdownItem className='dropdown-itemm'>Yuqori maosh</DropdownItem>
                                        <DropdownItem className='dropdown-itemm'>Kam maosh</DropdownItem>
                                        <DropdownItem className='dropdown-itemm'>Alfavit bo'yicha</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="train-Body">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-12 mt-4 ">
                            <div className="train-card">
                                <div className="train-card-img">
                                    <img className='img-fluid' src="/image/train-img.png" alt=""/>
                                    <div className="train-card-hover">
                                        <div className="train-card-hoverP">
                                            <img src="/image/play.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="train-card-title">
                                    Kasb tanlash
                                </div>
                                <div className="train-card-footer">
                                    <div className="train-card-data">
                                        <div className="train-card-data-img">
                                            <img src="/image/calendar.png" alt=""/>

                                        </div>
                                        <div className="train-card-data-number">
                                            19/06/2021
                                        </div>
                                    </div>
                                    <div className="train-card-sec">
                                        <div className="train-card-sec-img">
                                            <img src="/image/koz.png" alt=""/>
                                        </div>
                                        <div className="train-card-sec-number">
                                            2001
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4  col-sm-6 col-12 mt-4">
                            <div className="train-card">
                                <div className="train-card-img">
                                    <img className='img-fluid' src="/image/train-img.png" alt=""/>
                                    <div className="train-card-hover">
                                        <div className="train-card-hoverP">
                                            <img src="/image/play.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="train-card-title">
                                    Kasb tanlash
                                </div>
                                <div className="train-card-footer">
                                    <div className="train-card-data">
                                        <div className="train-card-data-img">
                                            <img src="/image/calendar.png" alt=""/>

                                        </div>
                                        <div className="train-card-data-number">
                                            19/06/2021
                                        </div>
                                    </div>
                                    <div className="train-card-sec">
                                        <div className="train-card-sec-img">
                                            <img src="/image/koz.png" alt=""/>
                                        </div>
                                        <div className="train-card-sec-number">
                                            2001
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4 mt-4 col-sm-6 col-12">
                            <div className="train-card">
                                <div className="train-card-img">
                                    <img className='img-fluid' src="/image/train-img.png" alt=""/>
                                    <div className="train-card-hover">
                                        <div className="train-card-hoverP">
                                            <img src="/image/play.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="train-card-title">
                                    Kasb tanlash
                                </div>
                                <div className="train-card-footer">
                                    <div className="train-card-data">
                                        <div className="train-card-data-img">
                                            <img src="/image/calendar.png" alt=""/>

                                        </div>
                                        <div className="train-card-data-number">
                                            19/06/2021
                                        </div>
                                    </div>
                                    <div className="train-card-sec">
                                        <div className="train-card-sec-img">
                                            <img src="/image/koz.png" alt=""/>
                                        </div>
                                        <div className="train-card-sec-number">
                                            2001
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4 mt-4 col-sm-6 col-12">
                            <div className="train-card">
                                <div className="train-card-img">
                                    <img className='img-fluid' src="/image/train-img.png" alt=""/>
                                    <div className="train-card-hover">
                                        <div className="train-card-hoverP">
                                            <img src="/image/play.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="train-card-title">
                                    Kasb tanlash
                                </div>
                                <div className="train-card-footer">
                                    <div className="train-card-data">
                                        <div className="train-card-data-img">
                                            <img src="/image/calendar.png" alt=""/>

                                        </div>
                                        <div className="train-card-data-number">
                                            19/06/2021
                                        </div>
                                    </div>
                                    <div className="train-card-sec">
                                        <div className="train-card-sec-img">
                                            <img src="/image/koz.png" alt=""/>
                                        </div>
                                        <div className="train-card-sec-number">
                                            2001
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4 mt-4 col-sm-6 col-12">
                            <div className="train-card">
                                <div className="train-card-img">
                                    <img className='img-fluid' src="/image/train-img.png" alt=""/>
                                    <div className="train-card-hover">
                                        <div className="train-card-hoverP">
                                            <img src="/image/play.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="train-card-title">
                                    Kasb tanlash
                                </div>
                                <div className="train-card-footer">
                                    <div className="train-card-data">
                                        <div className="train-card-data-img">
                                            <img src="/image/calendar.png" alt=""/>

                                        </div>
                                        <div className="train-card-data-number">
                                            19/06/2021
                                        </div>
                                    </div>
                                    <div className="train-card-sec">
                                        <div className="train-card-sec-img">
                                            <img src="/image/koz.png" alt=""/>
                                        </div>
                                        <div className="train-card-sec-number">
                                            2001
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4 mt-4 col-sm-6 col-12">
                            <div className="train-card">
                                <div className="train-card-img">
                                    <img className='img-fluid' src="/image/train-img.png" alt=""/>
                                    <div className="train-card-hover">
                                        <div className="train-card-hoverP">
                                            <img src="/image/play.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="train-card-title">
                                    Kasb tanlash
                                </div>
                                <div className="train-card-footer">
                                    <div className="train-card-data">
                                        <div className="train-card-data-img">
                                            <img src="/image/calendar.png" alt=""/>

                                        </div>
                                        <div className="train-card-data-number">
                                            19/06/2021
                                        </div>
                                    </div>
                                    <div className="train-card-sec">
                                        <div className="train-card-sec-img">
                                            <img src="/image/koz.png" alt=""/>
                                        </div>
                                        <div className="train-card-sec-number">
                                            2001
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4 mt-4 col-sm-6 col-12">
                            <div className="train-card">
                                <div className="train-card-img">
                                    <img className='img-fluid' src="/image/train-img.png" alt=""/>
                                    <div className="train-card-hover">
                                        <div className="train-card-hoverP">
                                            <img src="/image/play.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="train-card-title">
                                    Kasb tanlash
                                </div>
                                <div className="train-card-footer">
                                    <div className="train-card-data">
                                        <div className="train-card-data-img">
                                            <img src="/image/calendar.png" alt=""/>

                                        </div>
                                        <div className="train-card-data-number">
                                            19/06/2021
                                        </div>
                                    </div>
                                    <div className="train-card-sec">
                                        <div className="train-card-sec-img">
                                            <img src="/image/koz.png" alt=""/>
                                        </div>
                                        <div className="train-card-sec-number">
                                            2001
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4 mt-4 col-sm-6 col-12">
                            <div className="train-card">
                                <div className="train-card-img">
                                    <img className='img-fluid' src="/image/train-img.png" alt=""/>
                                    <div className="train-card-hover">
                                        <div className="train-card-hoverP">
                                            <img src="/image/play.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="train-card-title">
                                    Kasb tanlash
                                </div>
                                <div className="train-card-footer">
                                    <div className="train-card-data">
                                        <div className="train-card-data-img">
                                            <img src="/image/calendar.png" alt=""/>

                                        </div>
                                        <div className="train-card-data-number">
                                            19/06/2021
                                        </div>
                                    </div>
                                    <div className="train-card-sec">
                                        <div className="train-card-sec-img">
                                            <img src="/image/koz.png" alt=""/>
                                        </div>
                                        <div className="train-card-sec-number">
                                            2001
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4 mt-4 col-sm-6 col-12">
                            <div className="train-card">
                                <div className="train-card-img">
                                    <img className='img-fluid' src="/image/train-img.png" alt=""/>
                                    <div className="train-card-hover">
                                        <div className="train-card-hoverP">
                                            <img src="/image/play.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="train-card-title">
                                    Kasb tanlash
                                </div>
                                <div className="train-card-footer">
                                    <div className="train-card-data">
                                        <div className="train-card-data-img">
                                            <img src="/image/calendar.png" alt=""/>

                                        </div>
                                        <div className="train-card-data-number">
                                            19/06/2021
                                        </div>
                                    </div>
                                    <div className="train-card-sec">
                                        <div className="train-card-sec-img">
                                            <img src="/image/koz.png" alt=""/>
                                        </div>
                                        <div className="train-card-sec-number">
                                            2001
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrainingPage;