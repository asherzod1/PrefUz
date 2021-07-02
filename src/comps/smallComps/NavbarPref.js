import React,{useState} from 'react';
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

} from 'reactstrap';
import Link from "react-router-dom/Link";
import {NavLink} from 'react-router-dom'
import '../../styles/style.scss'
function NavbarPref(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>

            <Navbar  light expand="lg">
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
                            <DropdownToggle nav caret>
                                Uzb
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Uzb
                                </DropdownItem>
                                <DropdownItem>
                                    Rus
                                </DropdownItem>
                                <DropdownItem  />

                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                    <div className="box">

                        <UncontrolledDropdown nav inNavbar>
                            <div className="navbar-end">
                                <img src="/image/user.png" alt=""/>
                            </div>
                            <DropdownToggle nav caret>
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
                                <DropdownItem divider />
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
                    <NavbarToggler style={{border:"none"}} onClick={toggle} >
                        {
                            isOpen?
                                <img  src="/image/menu-3.png" alt=""/>:
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
                                    Uzb
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Uzb
                                    </DropdownItem>
                                    <DropdownItem>
                                        Rus
                                    </DropdownItem>
                                    <DropdownItem  />

                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <div className="navbar-end">
                                    <img src="/image/user.png" alt=""/>
                                </div>
                                <DropdownToggle  nav caret>
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
                                    <DropdownItem divider />
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

        </div>
    );
}

export default NavbarPref;