import React from 'react'
import { Form, FormGroup, Input } from 'reactstrap'
import {Link} from 'react-router-dom'
import ComponentHeader from '../smallComps/ComponentHeader'
import '../../styles/TrainingElements.scss'
import VideoPlayerr from '../smallComps/VideoPlayerr'
const TrainingElementsC = () => {
    return (
        <div>
            <ComponentHeader>Asosiy / Treninglar / IT mutaxassis bo’lish</ComponentHeader>
            <div className="trainingVideo-content">
                <div className="container">
                    <div className="video">
                        <VideoPlayerr title='IT mutaxassisi bolish haqida' date='19/05/2021' views='2917 views'/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="trainingVideo-content1">
                    <div className="row">
                        <div className=" col-lg-8 col-md-12 col-sm-12 c1-left-col">
                            <div className="c1-left">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.</p>
                                <div className='c1-left-border'>
                                    
                                </div>
                                <Link to='/testresult' className='c1-left-btn'>
                                    Test savollari
                                    <img src="/images/TrainingElement/nextIcon.png" alt="icon" />
                                </Link>
                            </div>
                        </div>
                        <div className="c1-right-col col-lg-4 col-md-4 col-sm-12">
                            <div className="c1-right">
                                <h2>
                                    Kommentariya
                                </h2>
                                <div className="comments">
                                    <div className="comment">
                                        <div className="comment-img">
                                            <img src="/images/TrainingElement/comment1.png" alt="rasm" />
                                        </div>
                                        <div className="comment-content">
                                            <h1>Alex Sardor</h1>
                                            <h4>18:34, 21-may, 2021</h4>
                                            <p>Juda ajoyib dars ekan rahmat! Have you ever finally just gave in  to the temptation and read your bla bla</p>

                                        </div>
                                    </div>
                                    <div className="comment">
                                        <div className="comment-img">
                                            <img src="/images/TrainingElement/comment1.png" alt="rasm" />
                                        </div>
                                        <div className="comment-content">
                                            <h1>Alex Sardor</h1>
                                            <h4>18:34, 21-may, 2021</h4>
                                            <p>Juda ajoyib dars ekan rahmat! Have you ever finally just gave in  to the temptation and read your bla bla</p>
                                            
                                        </div>
                                    </div>
                                    <div className="comment">
                                        <div className="comment-img">
                                            <img src="/images/TrainingElement/comment1.png" alt="rasm" />
                                        </div>
                                        <div className="comment-content">
                                            <h1>Alex Sardor</h1>
                                            <h4>18:34, 21-may, 2021</h4>
                                            <p>Juda ajoyib dars ekan rahmat! Have you ever finally just gave in  to the temptation and read your bla bla</p>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="comments-border">

                                </div>
                                <h5>
                                    Izoh yozish
                                </h5>
                                <Form>
                                    <FormGroup>
                                        <Input className='comment-input' type="textarea" name="text" id="exampleText" />
                                    </FormGroup>
                                </Form>
                                <Link className='comment-btn'>
                                    Yuborish 
                                    <img src="/images/TrainingElement/sendIcon.png" alt="icon" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrainingElementsC
