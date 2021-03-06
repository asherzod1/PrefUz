import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { getLang, getText, Lang } from '../../locales';

function RezumeCreat1(props) {
    return (
        <div>
            <div className="docP-header">
            {console.log(Lang)}
            </div>
          <div className="rezumeCr-header">
              <div className="rezumecr-H">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-6 col-12 col-sm-12">
                              <div className="rezumecr-H-title">
                                  {getText('rezume_create')}
                              </div>
                              <div className="rezumecr-H-text">
                                  Online{Lang} konstruktor orqali rezume yarating. Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                  commodo consequat. Duis aute irure dolor in reprehenderit
                              </div>
                              <Link to='/myresume'>
                                  <div className="rezumecr-H-button">
                                      Rezume yarat
                                  </div>
                              </Link>

                              <div className="rezumecr-H-footer">
                                  <div className="rezumecr-H-footer-sec">
                                      <div className="rezumecr-H-footerimg">
                                          <img src="/image/rezumecheck.png" alt=""/>
                                      </div>
                                      <div className="rezumecr-H-footertext">
                                          <div className="rezumecr-H-footer-title">
                                              Hr tekshiruvidan o'tgan
                                          </div>
                                          <div className="rezumecr-H-footer-text">
                                              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                              tempor incididunt ut labore et dolore aliqua.
                                          </div>
                                      </div>
                                  </div>
                                  <div className="rezumecr-H-footer-sec">
                                      <div className="rezumecr-H-footerimg">
                                          <img src="/image/galery.png" alt=""/>
                                      </div>
                                      <div className="rezumecr-H-footertext">
                                          <div className="rezumecr-H-footer-title">
                                              Hr tekshiruvidan o'tgan
                                          </div>
                                          <div className="rezumecr-H-footer-text">
                                              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                              tempor incididunt ut labore et dolore aliqua.
                                          </div>
                                      </div>
                                  </div>
                                  <div className="rezumecr-H-footer-sec">
                                      <div className="rezumecr-H-footerimg">
                                          <img src="/image/word.png" alt=""/>
                                      </div>
                                      <div className="rezumecr-H-footertext">
                                          <div className="rezumecr-H-footer-title">
                                              Hr tekshiruvidan o'tgan
                                          </div>
                                          <div className="rezumecr-H-footer-text">
                                              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                              tempor incididunt ut labore et dolore aliqua.
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6  col-sm-12 col-12">
                              <div className="resumecr-H-Img">
                                  <img className='img-fluid' src="/image/childirin-rez.png" alt=""/>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    );
}

export default RezumeCreat1;