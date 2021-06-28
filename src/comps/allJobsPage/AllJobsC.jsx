import {Checkbox, Divider} from 'antd';
import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, FormGroup,} from 'reactstrap'
import '../../styles/AllJobs.scss'
import AllJobsCards from './AllJobsCards';

//chekbox 
const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];
///checkbox

const AllJobsC = () => {

    //checkbox
    const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = React.useState(true);
    const [checkAll, setCheckAll] = React.useState(false);

    const onChange = list => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };

    const onCheckAllChange = e => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };
    //checkbox

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [dropdownOpen3, setDropdownOpen3] = useState(false);

    const toggle = () =>{
        setDropdownOpen(!dropdownOpen)
    }
    const toggle2 = () =>{
        setDropdownOpen2(!dropdownOpen2)
    }
    const toggle3 = () =>{
        setDropdownOpen3(!dropdownOpen3)
    }
    
    return (
        <div className='allJobs'>
            <div className="allJobs-header">
                <h1>Barcha kasblar</h1>
            </div>
            <div className="allJobs-content">
                <div className="container">
                    <div className="jobs-input-area">
                        <Form className='row'>
                            <FormGroup className='form-group col-md-6 col-sm-12 col-lg-6'>
                                <Dropdown  isOpen={dropdownOpen2} toggle={toggle2}>
                                    <DropdownToggle className='jobs-dropdown' caret>
                                        Soyiha bo'yicha tanlash
                                    </DropdownToggle>
                                    <DropdownMenu left className='w-100 dropdown-menu1'>
                                        <DropdownItem className='dropdown-item1'>
                                            <div className='d-header d-flex align-items-center justify-content-between'>
                                                <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                                                    Check all
                                                </Checkbox>
                                                <p>Selected 0</p>
                                            </div>
                                            <Divider />
                                            <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
                                        </DropdownItem>
                                        <DropdownItem divider></DropdownItem>
                                        
                                    </DropdownMenu>
                                </Dropdown>
                            </FormGroup>
                            <FormGroup className='select col-md-3 col-sm-12 col-lg-3'>
                                <Dropdown  isOpen={dropdownOpen} toggle={toggle}>
                                    <DropdownToggle className='jobs-dropdown' caret>
                                        Butun O'zbekiston
                                    </DropdownToggle>
                                    <DropdownMenu left className='w-100 dropdown-menuu'>
                                        <DropdownItem className='dropdown-itemm'>Toshkent</DropdownItem>
                                        <DropdownItem className='dropdown-itemm'>Sirdaryo</DropdownItem>
                                        <DropdownItem className='dropdown-itemm'>Jizzax</DropdownItem>
                                        <DropdownItem className='dropdown-itemm'>Samarqand</DropdownItem>
                                        <DropdownItem className='dropdown-itemm'>Buxoro</DropdownItem>
                                        <DropdownItem className='dropdown-itemm'>Surxandaryo</DropdownItem>
                                        <DropdownItem className='dropdown-itemm'>Qashqadaryo</DropdownItem>
                                        <DropdownItem className='dropdown-itemm'>Xorazm</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </FormGroup>
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
                        </Form>
                    </div>
                </div>
            </div>
            <AllJobsCards />
        </div>
    )
}

export default AllJobsC
