import React, {useState} from 'react';
import Link from "react-router-dom/Link";
import {NavLink} from 'react-router-dom'
import {Button, Input, Form, Select} from 'antd';
import {Option} from 'antd/lib/mentions';
import '../../styles/style.scss'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Modal
} from 'reactstrap';
import { SITE_LANG } from '../../tools/constants';

function NavbarPref(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    //Modal functions
    //1
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);

    //2
    const [modal2, setModal2] = useState(false);
    const toggleModal2 = () => setModal2(!modal2);

    //Modal Form functions
    //1
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    }
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({size}) => {
        setComponentSize(size);
    };
    //2
    const onFinish2 = (values) => {
        console.log('Received values of form: ', values);
    }
    const [componentSize2, setComponentSize2] = useState('default');

    const onFormLayoutChange2 = ({size}) => {
        setComponentSize2(size);
    };


    //My functions
    const changeModal = () => {
        toggleModal();
        toggleModal2();
    }
    const [til, setTil] = useState('Uz')

    const setLang = (lang) => {
        localStorage.setItem(SITE_LANG, lang);
        window.location.reload();
    }
    function addd() {
        setTil("En")
    }
    function add() {
        setTil("Uz")
    }
    function ad() {
        setTil("Ru")
    }
    return (
        <div>

            <Navbar light expand="lg">
                <div className="container">
                    <Link to='/'>
                        <NavbarBrand className='d-flex align-items-center' href="/">
                               <div className="brand-nav d-flex ">
                                <img src="/image/Prof.png" alt=""/>
                            </div>
                            <div className="brand-body mt-1">
                                <img src="/image/logo.png" alt=""/>
                            </div>
                        </NavbarBrand>
                    </Link>
                    <div className="til">
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className="menu-til">
                                {
                                    til
                                }
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
<<<<<<< HEAD
                                    <div onClick={() => {setLang('uz') ; add()}}>
=======
                                    <div onClick={() => setLang('Uz')}>
>>>>>>> 260b5f231fe9d30e0fb00b7d24f278cca74b6140
                                        Uz
                                    </div>

                                </DropdownItem>
                                <DropdownItem className='ru'>
<<<<<<< HEAD
                                    <div onClick={() => { setLang('ru') ; ad()}}>
=======
                                    <div onClick={() => setLang('Ru')}>
>>>>>>> 260b5f231fe9d30e0fb00b7d24f278cca74b6140
                                        Ru
                                    </div>

                                </DropdownItem>
                                <DropdownItem className='ru'>
<<<<<<< HEAD
                                    <div onClick={() =>{ setLang('en') ; addd()}}>
=======
                                    <div onClick={() => setLang('En')}>
>>>>>>> 260b5f231fe9d30e0fb00b7d24f278cca74b6140
                                        En
                                    </div>

                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                    <div className="box">

                        <UncontrolledDropdown nav inNavbar>
                            <div className="navbar-end">
                                <img src="/image/user.png" alt=""/>
                            </div>
                            <DropdownToggle nav caret onClick={toggleModal}>
                                Kirish
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <div className="drop-item1">
                                        Vasya Pushkin
                                    </div>
                                    <div className="drop-item2">
                                        pushkin12@gmail.com
                                    </div>
                                </DropdownItem>
                                <DropdownItem divider/>
                                <DropdownItem>
                                    Natijalar
                                </DropdownItem>
                                <DropdownItem>
                                    Sozlamalar
                                </DropdownItem>
                                <DropdownItem>
                                    Chiqish
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                    <NavbarToggler style={{border: "none"}} onClick={toggle}>
                        {
                            isOpen ?
                                <img src="/image/menu-3.png" alt=""/> :
                                <img src="/image/menu-2.png" alt=""/>
                        }
                    </NavbarToggler>
                    <Collapse isOpen={isOpen} navbar>


                        <Nav className="mr-auto" navbar>

                            <NavItem>
                                <NavLink activeClassName='active-navbar' to='/doc'>Kasp tanlash</NavLink>

                            </NavItem>
                            <NavItem>
                                <NavLink activeClassName='active-navbar' to='/rezume'>

                                    Rezume yarat

                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink activeClassName='active-navbar' to='/training'>Treninglar</NavLink>

                            </NavItem>
                            <NavItem>
                                <NavLink activeClassName='active-navbar' to='/trainingelement'>Broshyura</NavLink>

                            </NavItem>
                            <NavItem>
                                <NavLink activeClassName='active-navbar' to='/saytabout'>Biz haqimizda</NavLink>

                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    {
                                        til
                                    }
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
<<<<<<< HEAD
                                        <div onClick={() => {setLang('uz');add()}}>
=======
                                        <div onClick={() => setLang('Uz')}>
>>>>>>> 260b5f231fe9d30e0fb00b7d24f278cca74b6140
                                            Uz
                                        </div>
                                    </DropdownItem>
                                    <DropdownItem>
<<<<<<< HEAD
                                        <div onClick={() => {setLang('ru'); ad()}}>
=======
                                        <div onClick={() => setLang('Ru')}>
>>>>>>> 260b5f231fe9d30e0fb00b7d24f278cca74b6140
                                            Ru
                                        </div>
                                    </DropdownItem>
                                    <DropdownItem>
<<<<<<< HEAD
                                        <div onClick={() => {setLang('en');addd()}}>
=======
                                        <div onClick={() => setLang('En')}>
>>>>>>> 260b5f231fe9d30e0fb00b7d24f278cca74b6140
                                            En
                                        </div>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <div className="navbar-end">
                                    <img src="/image/user.png" alt=""/>
                                </div>
                                <DropdownToggle nav caret onClick={toggleModal}>
                                    Kirish
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <div className="drop-item1">
                                            Vasya Pushkin
                                        </div>
                                        <div className="drop-item2">
                                            pushkin12@gmail.com
                                        </div>
                                    </DropdownItem>
                                    <DropdownItem>
                                        Natijalar
                                    </DropdownItem>
                                    <DropdownItem>
                                        Sozlamalar
                                    </DropdownItem>
                                    <DropdownItem>
                                        Chiqish
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Modal isOpen={modal} size='sm' toggle={toggleModal} className='ModalClass'>
                <ModalHeader toggle={toggleModal}>Tizimga kirish</ModalHeader>
                <ModalBody>
                    <Form
                        className="Modal-form"
                        labelCol={{
                            span: 24,
                        }}
                        wrapperCol={{
                            span: 24,
                        }}
                        layout="horizontal"
                        initialValues={{
                            size: componentSize,
                        }}
                        onValuesChange={onFormLayoutChange}
                        size={componentSize}
                        name="nest-messages" onFinish={onFinish}
                    >
                        <Form.Item
                            name="email"
                            label="E-mail"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'E-mail xato kiritildi!',
                                },
                                {
                                    required: true,
                                    message: 'Iltimos E-mail manzilingizni kiriting!',
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label="Parol"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Parolni kiriting!',
                                },
                            ]}
                        >
                            <Input.Password/>
                            <Link>Parolni unutdim</Link>
                        </Form.Item>
                        <Button className='kirish-btn'>Kirish</Button>
                    </Form>

                </ModalBody>
                <ModalFooter>
                    <p>Hali a'zo emasmisiz?</p>
                    <Link onClick={changeModal} className='r-otish'>Ro'yhatdan o'tish</Link>
                </ModalFooter>
            </Modal>

            <Modal isOpen={modal2} size='md' toggle={toggleModal2} className='ModalClass'>
                <ModalHeader toggle={toggleModal2}>Ro'yxatdan o'tish</ModalHeader>
                <ModalBody>
                    <Form
                        className="Modal-form"
                        labelCol={{
                            span: 24,
                        }}
                        wrapperCol={{
                            span: 24,
                        }}
                        layout="horizontal"
                        initialValues={{
                            size: componentSize2,
                        }}
                        onValuesChange={onFormLayoutChange2}
                        size={componentSize}
                        name="nest-messages" onFinish={onFinish2}
                    >
                        <div className="row">
                            <div className="col-6">
                                <Form.Item
                                    label="Ismingiz"
                                    name={['user', 'firstName']}
                                >
                                    <Input/>
                                </Form.Item>
                            </div>
                            <div className="col-6">
                                <Form.Item
                                    label="Familiyangiz"
                                    name={['user', 'lastName']}
                                >
                                    <Input/>
                                </Form.Item>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <Form.Item
                                    label="Viloyat"
                                    name={['user', 'viloyat']}
                                >
                                    <Select placeholder="Viloyatni tanlang">
                                        <Option value="Toshkent">Toshkent</Option>
                                        <Option value="Namangan">Namangan</Option>
                                        <Option value="Farg'ona">Farg'ona</Option>
                                        <Option value="Andijon">Andijon</Option>
                                        <Option value="Sirdaryo">Sirdaryo</Option>
                                        <Option value="Jizzax">Jizzax</Option>
                                        <Option value="Qashqadaryo">Qashqadaryo</Option>
                                        <Option value="Surxandaryo">Surxandaryo</Option>
                                        <Option value="Buxoro">Buxoro</Option>
                                    </Select>
                                </Form.Item>
                            </div>
                            <div className="col-6">
                                <Form.Item
                                    label="Tuman"
                                    name={['user', 'tuman']}
                                >
                                    <Input/>
                                </Form.Item>
                            </div>
                        </div>
                        <div className="row" style={{paddingBottom: '15px'}}>
                            <div className="col-4">
                                <Form.Item
                                    label="Maktab #"
                                    name={['user', 'school']}
                                >
                                    <Select placeholder="234-maktab">
                                        <Option value="234">234-maktab</Option>
                                        <Option value="182">182-maktab</Option>
                                        <Option value="1">1-maktab</Option>

                                    </Select>
                                </Form.Item>
                            </div>
                            <div className="col-4">
                                <Form.Item
                                    label="Sinf"
                                    name={['user', 'class']}
                                >
                                    <Select placeholder="Sinfni tanlang">
                                        <Option value="Toshkent">234-maktab</Option>
                                        <Option value="Namangan">182-maktab</Option>
                                        <Option value="Farg'ona">1-maktab</Option>

                                    </Select>
                                </Form.Item>
                            </div>
                            <div className="col-4">
                                <Form.Item
                                    label="Harf A,B ..."
                                    name={['user', 'class']}
                                >
                                    <Select placeholder="Sinfni tanlang">
                                        <Option value="Toshkent">234-maktab</Option>
                                        <Option value="Namangan">182-maktab</Option>
                                        <Option value="Farg'ona">1-maktab</Option>

                                    </Select>
                                </Form.Item>
                            </div>
                        </div>
                        <div className="border div"></div>
                        <div className="row" style={{paddingTop: '10px'}}>
                            <div className="col-12">
                                <Form.Item
                                    name="email"
                                    label="E-maillll"
                                    rules={[
                                        {
                                            type: 'email',
                                            message: 'E-mail xato kiritildi!',
                                        },
                                        {
                                            required: true,
                                            message: 'Iltimos E-mail manzilingizni kiriting!',
                                        },
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <Form.Item
                                    name="password"
                                    label="Parol yarating"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input.Password/>
                                </Form.Item>
                            </div>
                            <div className="col-6">
                                <Form.Item
                                    name="confirm"
                                    label="Parolni takrorlang"
                                    dependencies={['password']}
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please confirm your password!',
                                        },
                                        ({getFieldValue}) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve();
                                                }

                                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password/>
                                </Form.Item>
                            </div>
                        </div>
                        <Button className='kirish-btn'>Kirish</Button>
                    </Form>

                </ModalBody>
                <ModalFooter className='flex-row'>
                    <p>Ro'yxatdan o'tganmisiz?</p>
                    <Link onClick={changeModal} className='r-otish'>Kirish</Link>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default NavbarPref;