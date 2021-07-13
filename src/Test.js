import React, {useReducer, useState} from 'react';
import {Checkbox} from "antd";

function Test(props) {
    function reducer(state, action) {
        switch (action.type) {
            case "JB" :
                state = {
                    ...state
                }
                break;
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        testa: [{
            text: '1.remque eum, laborum vel? Asperiores laboriosam omnis quas ratione.',
            id: 0,
            a: "K222MINNJNJNNN",
            b: "KMINNJN",
            c: "KMINNJNJNNN",
            d: "KMINNJNJNNNN",
            img:'knnjnknknkn'

        }, {
            text: '2.loeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebhhh',
            id: 1,
            a: "KMINNJNJNNN",
            b: "2KMINNJN",
            c: "KMINNJNJNNN",
            d: "K2MINNJNJNNNN",

        },
            {
                text: ' 3.1.loeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebj',

                id: 2,
                a: "1KMINNJNJNNN",
                b: "KMINNJN",
                c: "1KMINNJNJNNN",
                d: "KMINNJNJNNNN",

            }
            ,
            {
                text: ' 4.1.loeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebj',

                id: 3,
                a: "1KMINNJNJNNN",
                b: "KMINNJN",
                c: "1KMINNJNJNNN",
                d: "KMINNJNJNNNN",

            }

            ,
            {
                text: ' 5.loeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebj',

                id: 4,
                a: "1KMINNJNJNNN",
                b: "KMINNJN",
                c: "1KMINNJNJNNN",
                d: "KMINNJNJNNNN",

            }

            ,
            {
                text: ' 6.loeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebj',

                id: 5,
                a: "1KMINNJNJNNN",
                b: "KMINNJN",
                c: "1KMINNJNJNNN",
                d: "KMINNJNJNNNN",

            }

            ,
            {
                text: ' 7.loeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebj',

                id: 6,
                a: "1KMINNJNJNNN",
                b: "KMINNJN",
                c: "1KMINNJNJNNN",
                d: "KMINNJNJNNNN",

            }

            ,
            {
                text: ' 8.loeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebj',

                id: 7,
                a: "1KMINNJNJNNN",
                b: "KMINNJN",
                c: "1KMINNJNJNNN",
                d: "KMINNJNJNNNggggggggN",

            }

            ,
            {
                text: ' 9.loeeegggggggggeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebj',

                id: 8,
                a: "1KMINNJNJNNN",
                b: "KMINNJN",
                c: "1KMINNJNJNNN",
                d: "KMINNJNJNNNN",

            }
            ,
            {
                text: ' 10.loeeeeeeeeeeeeeggggggggggggggggeeeeeeeeeeeeeeeeeeeeeeeeeeebj',

                id: 9,
                a: "1KMINNJNJNNN",
                b: "KMINNJN",
                c: "1KMINNJNJNNN",
                d: "KMINNJNJNNNN",

            }


        ],
        testc: []
    })
    const [count, setCount] = useState(0)

    function add() {
        let d = state.testa.filter(item => item.id === count)



       if(d[0].id === 0){
            state.testc.push(d[0])



        }
       else if (d[0].id===9){

            state.testc.push(d[0])
            let bkk=document.querySelector('.button-prev')
            bkk.style.display='none'
            var bk=document.querySelector('.button-next')
            bk.style.display='flex'

        }
        else {
            state.testc.push(d[0])
            let bkk=document.querySelector('.button-prev')
            bkk.style.display='flex'
           
        }
    }

    add()

    function kop(index) {
        state.testc.splice(index, 1)
    }

    function kup(index) {
        state.testc.splice(index, 1)
    }


    return (
        <div>
            <div className="container">
                <div className="tests-title">
                    3 / 10
                </div>
                <div className="test-orange">
                    <div className="test-orange-sec">

                    </div>
                </div>
                <div className="tests">

                    {
                        state.testc.map((item, index) => (
                            <div key={index} className="testP">
                                <div className="test-sec-text">
                                    {item.text}
                                </div>
                                <div className="P-test ">

                                    <form action="">
                                        <div className="row ">
                                            <div className="col-md-3 mt-2 col-sm-6">
                                                <div className="test-input d-flex">
                                                    <Checkbox className='jobs-checkbox'>{item.a}</Checkbox>
                                                </div>
                                            </div>
                                            <div className="col-md-3 mt-2 col-sm-6">
                                                <div className="test-input d-flex">
                                                    <Checkbox className='jobs-checkbox'>{item.b}</Checkbox>
                                                </div>
                                            </div>
                                            <div className="col-md-3 mt-2 col-sm-6">
                                                <div className="test-input d-flex">
                                                    <Checkbox className='jobs-checkbox'>{item.c}</Checkbox>
                                                </div>
                                            </div>
                                            <div className="col-md-3 mt-2 col-sm-6">
                                                <div className="test-input d-flex">
                                                    <Checkbox className='jobs-checkbox'>{item.d}</Checkbox>
                                                </div>
                                            </div>
                                        </div>

                                    </form>


                                </div>
                                <div className="row">

                                    <div className="button-test ">
                                    <div className="col-6 col-md-2 col-lg-3 col-sm-6">

                                            <div onClick={() => {
                                                setCount(count - 1);
                                                kup(index)
                                            }} disabled className="button-next ">
                                                <div className="button-next-img">
                                                    <img src="/image/next.png" alt=""/>
                                                </div>
                                                <div  className="button-text-item">
                                                      Oldingisi
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-6 col-md-2 col-lg-3 col-sm-6">

                                            <div onClick={() => {
                                                setCount(count + 1);
                                                kop(index)
                                            }} className="button-prev">

                                                <div  className="button-text-prev">
                                                    Keyingisi
                                                </div>
                                                <div className="button-prev-img">
                                                    <img src="/image/prev.png" alt=""/>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                    <div className="testP">
                        <div className="test-sec-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur debitis
                            deseruntdoloremque eum, laborum vel? Asperiores laboriosam omnis quas ratione.

                        </div>
                        <div className="P-test ">

                            <form action="">
                                <div className="row ">
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                </div>
                            </form>


                        </div>
                    </div>
                    <div className="testP">
                        <div className="test-sec-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur debitis deserunt
                            doloremque eum, laborum vel? Asperiores laboriosam omnis quas ratione.
                        </div>
                        <div className="P-test ">

                            <form action="">
                                <div className="row ">
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                </div>
                            </form>


                        </div>
                    </div>
                    <div className="testP">
                        <div className="test-sec-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur debitis deserunt
                            doloremque eum, laborum vel? Asperiores laboriosam omnis quas ratione.
                        </div>
                        <div className="P-test ">

                            <form action="">
                                <div className="row p-0">
                                    <div className="col-md-6 col-lg-3 col-6 mt-2 p-0">
                                        <img src="/image/baby-1.png" alt=""/>
                                        <div className="input-chekbox">
                                            <Checkbox className='jobs-checkbox w-0 h-0'>
                                                Salom
                                            </Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6 mt-2 p-0">
                                        <img src="/image/baby-1.png" alt=""/>
                                        <div className="input-chekbox">
                                            <Checkbox className='jobs-checkbox w-0 h-0'>
                                                Salom
                                            </Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6 mt-2 p-0">
                                        <img src="/image/baby-1.png" alt=""/>
                                        <div className="input-chekbox">
                                            <Checkbox className='jobs-checkbox w-0 h-0'>
                                                Salom
                                            </Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6 mt-2 p-0">
                                        <img src="/image/baby-1.png" alt=""/>
                                        <div className="input-chekbox">
                                            <Checkbox className='jobs-checkbox w-0 h-0'>
                                                Salom
                                            </Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6 mt-2 p-0">
                                        <img src="/image/baby-1.png" alt=""/>
                                        <div className="input-chekbox">
                                            <Checkbox className='jobs-checkbox w-0 h-0'>
                                                Salom
                                            </Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6 mt-2 p-0">
                                        <img src="/image/baby-1.png" alt=""/>
                                        <div className="input-chekbox">
                                            <Checkbox className='jobs-checkbox w-0 h-0'>
                                                Salom
                                            </Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6 mt-2 p-0">
                                        <img src="/image/baby-1.png" alt=""/>
                                        <div className="input-chekbox">
                                            <Checkbox className='jobs-checkbox w-0 h-0'>
                                                Salom
                                            </Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6 mt-2 p-0">
                                        <img src="/image/baby-1.png" alt=""/>
                                        <div className="input-chekbox">
                                            <Checkbox className='jobs-checkbox w-0 h-0'>
                                                Salom
                                            </Checkbox>
                                        </div>
                                    </div>
                                </div>
                            </form>


                        </div>
                        <div className="row">
                            <div className="button-test">
                                <div className="col-6 col-md-2 col-lg-3 col-sm-6">

                                    <div onClick={() => {
                                        setCount(count - 1);

                                    }} className="button-next">
                                        <div className="button-next-img">
                                            <img src="/image/next.png" alt=""/>
                                        </div>
                                        <div  className="button-text-item">
                                            Oldingisi
                                        </div>
                                    </div>

                                </div>
                                <div className="col-6 col-md-2 col-lg-3 col-sm-6">

                                    <div onClick={() => {
                                        setCount(count + 1);

                                    }} className="button-prev">

                                        <div  className="button-text-prev">
                                            Keyingisi
                                        </div>
                                        <div className="button-prev-img">
                                            <img src="/image/prev.png" alt=""/>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="testP">
                        <div className="test-sec-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur debitis deserunt
                            doloremque eum, laborum vel? Asperiores laboriosam omnis quas ratione.
                        </div>
                        <div className="P-test ">

                            <form action="">
                                <div className="row p-0">
                                    <div className="col-md-6 col-lg-3 col-6 mt-2 p-0">
                                        <img src="/image/baby-1.png" alt=""/>
                                        <div className="input-chekbox">
                                            <Checkbox className='jobs-checkbox w-0 h-0'>
                                                Salom
                                            </Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6 mt-2 p-0">
                                        <img src="/image/baby-1.png" alt=""/>
                                        <div className="input-chekbox">
                                            <Checkbox className='jobs-checkbox w-0 h-0'>
                                                Salom
                                            </Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6 mt-2 p-0">
                                        <img src="/image/baby-1.png" alt=""/>
                                        <div className="input-chekbox">
                                            <Checkbox className='jobs-checkbox w-0 h-0'>
                                                Salom
                                            </Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6 mt-2 p-0">
                                        <img src="/image/baby-1.png" alt=""/>
                                        <div className="input-chekbox">
                                            <Checkbox className='jobs-checkbox w-0 h-0'>
                                                Salom
                                            </Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6 mt-2 p-0">
                                        <img src="/image/baby-1.png" alt=""/>
                                        <div className="input-chekbox">
                                            <Checkbox className='jobs-checkbox w-0 h-0'>
                                                Salom
                                            </Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6 mt-2 p-0">
                                        <img src="/image/baby-1.png" alt=""/>
                                        <div className="input-chekbox">
                                            <Checkbox className='jobs-checkbox w-0 h-0'>
                                                Salom
                                            </Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6 mt-2 p-0">
                                        <img src="/image/baby-1.png" alt=""/>
                                        <div className="input-chekbox">
                                            <Checkbox className='jobs-checkbox w-0 h-0'>
                                                Salom
                                            </Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6 mt-2 p-0">
                                        <img src="/image/baby-1.png" alt=""/>
                                        <div className="input-chekbox">
                                            <Checkbox className='jobs-checkbox w-0 h-0'>
                                                Salom
                                            </Checkbox>
                                        </div>
                                    </div>
                                </div>
                            </form>


                        </div>
                    </div>
                    <div className="testP">
                        <div className="test-sec-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur debitis deserunt
                            doloremque eum, laborum vel? Asperiores laboriosam omnis quas ratione.
                        </div>
                        <div className="P-test ">

                            <form action="">
                                <div className="row p-0">
                                    <div className="col-md-6 col-lg-3 col-6 mt-2 p-0">
                                        <img src="/image/baby-1.png" alt=""/>
                                        <div className="input-chekbox">
                                            <Checkbox className='jobs-checkbox w-0 h-0'>
                                                Salom
                                            </Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6 mt-2 p-0">
                                        <img src="/image/baby-1.png" alt=""/>
                                        <div className="input-chekbox">
                                            <Checkbox className='jobs-checkbox w-0 h-0'>
                                                Salom
                                            </Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6 mt-2 p-0">
                                        <img src="/image/baby-1.png" alt=""/>
                                        <div className="input-chekbox">
                                            <Checkbox className='jobs-checkbox w-0 h-0'>
                                                Salom
                                            </Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6 mt-2 p-0">
                                        <img src="/image/baby-1.png" alt=""/>
                                        <div className="input-chekbox">
                                            <Checkbox className='jobs-checkbox w-0 h-0'>
                                                Salom
                                            </Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6 mt-2 p-0">
                                        <img src="/image/baby-1.png" alt=""/>
                                        <div className="input-chekbox">
                                            <Checkbox className='jobs-checkbox w-0 h-0'>
                                                Salom
                                            </Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6 mt-2 p-0">
                                        <img src="/image/baby-1.png" alt=""/>
                                        <div className="input-chekbox">
                                            <Checkbox className='jobs-checkbox w-0 h-0'>
                                                Salom
                                            </Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6 mt-2 p-0">
                                        <img src="/image/baby-1.png" alt=""/>
                                        <div className="input-chekbox">
                                            <Checkbox className='jobs-checkbox w-0 h-0'>
                                                Salom
                                            </Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6 mt-2 p-0">
                                        <img src="/image/baby-1.png" alt=""/>
                                        <div className="input-chekbox">
                                            <Checkbox className='jobs-checkbox w-0 h-0'>
                                                Salom
                                            </Checkbox>
                                        </div>
                                    </div>
                                </div>
                            </form>


                        </div>
                    </div>
                    <div className="testP">
                        <div className="test-sec-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur debitis deserunt
                            doloremque eum, laborum vel? Asperiores laboriosam omnis quas ratione.
                        </div>
                        <div className="P-test ">

                            <form action="">
                                <div className="row p-0">
                                    <div className="col-md-6 col-lg-3 col-6 mt-2 p-0">
                                        <img src="/image/baby-1.png" alt=""/>
                                        <div className="input-chekbox">
                                            <Checkbox className='jobs-checkbox w-0 h-0'>
                                                Salom
                                            </Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6 mt-2 p-0">
                                        <img src="/image/baby-1.png" alt=""/>
                                        <div className="input-chekbox">
                                            <Checkbox className='jobs-checkbox w-0 h-0'>
                                                Salom
                                            </Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6 mt-2 p-0">
                                        <img src="/image/baby-1.png" alt=""/>
                                        <div className="input-chekbox">
                                            <Checkbox className='jobs-checkbox w-0 h-0'>
                                                Salom
                                            </Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6 mt-2 p-0">
                                        <img src="/image/baby-1.png" alt=""/>
                                        <div className="input-chekbox">
                                            <Checkbox className='jobs-checkbox w-0 h-0'>
                                                Salom
                                            </Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6 mt-2 p-0">
                                        <img src="/image/baby-1.png" alt=""/>
                                        <div className="input-chekbox">
                                            <Checkbox className='jobs-checkbox w-0 h-0'>
                                                Salom
                                            </Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6 mt-2 p-0">
                                        <img src="/image/baby-1.png" alt=""/>
                                        <div className="input-chekbox">
                                            <Checkbox className='jobs-checkbox w-0 h-0'>
                                                Salom
                                            </Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6 mt-2 p-0">
                                        <img src="/image/baby-1.png" alt=""/>
                                        <div className="input-chekbox">
                                            <Checkbox className='jobs-checkbox w-0 h-0'>
                                                Salom
                                            </Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-6 mt-2 p-0">
                                        <img src="/image/baby-1.png" alt=""/>
                                        <div className="input-chekbox">
                                            <Checkbox className='jobs-checkbox w-0 h-0'>
                                                Salom
                                            </Checkbox>
                                        </div>
                                    </div>
                                </div>
                            </form>


                        </div>
                    </div>
                    <div className="testP">
                        <div className="test-sec-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur debitis deserunt
                            doloremque eum, laborum vel? Asperiores laboriosam omnis quas ratione.
                        </div>
                        <div className="P-test ">

                            <form action="">
                                <div className="row ">
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                </div>
                            </form>


                        </div>
                    </div>
                    <div className="testP">
                        <div className="test-sec-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur debitis deserunt
                            doloremque eum, laborum vel? Asperiores laboriosam omnis quas ratione.
                        </div>
                        <div className="P-test ">

                            <form action="">
                                <div className="row ">
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                </div>
                            </form>


                        </div>
                    </div>
                    <div className="testP">
                        <div className="test-sec-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur debitis deserunt
                            doloremque eum, laborum vel? Asperiores laboriosam omnis quas ratione.
                        </div>
                        <div className="P-test ">

                            <form action="">
                                <div className="row ">
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-2 col-sm-6">
                                        <div className="test-input d-flex">
                                            <Checkbox className='jobs-checkbox'>Checkbox</Checkbox>
                                        </div>
                                    </div>
                                </div>
                            </form>


                        </div>
                    </div>
                    <div className="button-test-center">
                        <div className="button-test-end">
                            Testni tugatish
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Test;