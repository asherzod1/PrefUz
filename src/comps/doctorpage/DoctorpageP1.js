import React, {useState, useEffect} from 'react';
import axios from "axios";

function DoctorpageP1(props) {
    const [state, usState] = useState([])
    const [lang, setLang] = useState("Ru")
    useEffect(() => {
        axios.get("http://195.158.24.249:203/api/auth/regions")
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                alert('Xatolik')
            })
    }, [])
    useEffect(() => {
        const lang1 = localStorage.getItem("lang")
        if (lang1) {
            setLang(lang1)
        }

        function storageEvent(event) {
            if (event.key === "lang") {
                setLang(event.newValue)
            }
        }

        window.addEventListener("storage", storageEvent)
        return () => {
            window.removeEventListener("storage", storageEvent)
        }
        setLang(localStorage.getItem("lang"))
        console.log(localStorage.getItem("lang"))
    }, [window.addEventListener("storage", () => {
    })])
    return (
        <div>
            <div className="docP-header">
                {console.log(localStorage.getItem("lang"))}

            </div>
            <div className="docP-img">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="docP-img-title">
                                Shifokor kaspi haqida
                                {`${lang}`}
                            </div>
                            <div className="docP-img-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, amet, animi
                                aperiam
                                architecto culpa doloribus excepturi id illum, incidunt ipsam ipsum natus nihil quam
                                saepe sit
                                sunt suscipit veniam vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </div>
                            <div className="docP-search">
                                <div className="docP-img-footer">
                                    <div className="docP-img-footerS">
                                        <img src="/image/search.png" alt=""/>
                                    </div>
                                    <div className="docP-search-title">
                                        <div className="search-title">
                                            Hozirgi talab
                                        </div>
                                        <div className="search-text">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at
                                            corporis dignissimos dolorem eligendi excepturi
                                        </div>
                                    </div>
                                </div>
                                <div className="docP-img-footer">
                                    <div className="docP-img-footerS">
                                        <img src="/image/bino.png" alt=""/>
                                    </div>
                                    <div className="docP-search-title">
                                        <div className="search-title">
                                            Qayerda ishlaydi ?
                                        </div>
                                        <div className="search-text">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at
                                            corporis dignissimos dolorem eligendi excepturi
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="docPimg">
                                <img src="/image/doctor.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoctorpageP1;