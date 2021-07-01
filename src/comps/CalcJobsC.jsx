import {Checkbox} from 'antd'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormGroup } from 'reactstrap'
import '../styles/AllJobs.scss'
import '../styles/CalcJobs.scss'
import AllJobsCards from './allJobsPage/AllJobsCards'
const CalcJobsC = () => {
    
    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
        
        
      }
      const [dropdownOpen3, setDropdownOpen3] = useState(false);
      const toggle3 = () =>{
        setDropdownOpen3(!dropdownOpen3)
    }
    return (
        <div>
            <div className="calcJobs">
                <div className="calcJobs-header">
                    <h1>Barcha kasblar</h1>
                </div>
                <div className="calcJobs-c1">
                    <div className="container">
                        <h5>
                            O’zingizga maqul 3 ta fanni belgilang va munosib kaspni aniqlaymiz
                        </h5>
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <Checkbox className='jobs-checkbox' >Checkbox</Checkbox>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <Checkbox className='jobs-checkbox' >Checkbox</Checkbox>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <Checkbox className='jobs-checkbox' >Checkbox</Checkbox>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <Checkbox className='jobs-checkbox' >Checkbox</Checkbox>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <Checkbox className='jobs-checkbox' >Checkbox</Checkbox>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <Checkbox className='jobs-checkbox' >Checkbox</Checkbox>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <Checkbox className='jobs-checkbox' >Checkbox</Checkbox>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <Checkbox className='jobs-checkbox' >Checkbox</Checkbox>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <Checkbox className='jobs-checkbox' >Checkbox</Checkbox>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <Checkbox className='jobs-checkbox' >Checkbox</Checkbox>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <Checkbox className='jobs-checkbox' >Checkbox</Checkbox>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <Checkbox className='jobs-checkbox' >Checkbox</Checkbox>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <Checkbox className='jobs-checkbox' >Checkbox</Checkbox>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <Checkbox className='jobs-checkbox' >Checkbox</Checkbox>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <Checkbox className='jobs-checkbox' >Checkbox</Checkbox>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <Checkbox className='jobs-checkbox' >Checkbox</Checkbox>
                            </div>
                        </div>
                    </div>
                    <Link className="c1-before">
                        <img src="/images/calcJobs/downIcon.png" alt="" />
                    </Link>
                </div>
                <div className="calcJobs-c2">
                    <div className="container">
                        <h6>Sizga munosib kasplar</h6>
                        <div className='d-flex justify-content-center'>
                            <FormGroup className='select col-md-3 col-sm-12 col-lg-3'>
                                <Dropdown  isOpen={dropdownOpen3} toggle={toggle3}>
                                    <DropdownToggle className='jobs-dropdown' caret>
                                        Maosh bo'yicha
                                    </DropdownToggle>
                                    <DropdownMenu left className='w-100 dropdown-menuu'>
                                        <DropdownItem className='dropdown-itemm'>Talab yuqori kasblar</DropdownItem>
                                        <DropdownItem className='dropdown-itemm'>Yuqori maosh</DropdownItem>
                                        <DropdownItem className='dropdown-itemm'>Kam maosh</DropdownItem>
                                        <DropdownItem className='dropdown-itemm'>Alfavit bo'yicha</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </FormGroup>
                        </div>
                    </div>
                    <AllJobsCards />
                </div>
            </div>
        </div>
    )
}

export default CalcJobsC
