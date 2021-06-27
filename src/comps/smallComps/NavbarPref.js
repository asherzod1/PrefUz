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
    NavbarText
} from 'reactstrap';
import Link from "react-router-dom/Link";
import {NavLink} from 'react-router-dom'

 function NavbarPref(props) {
     const [isOpen, setIsOpen] = useState(false);
     const toggle = () => setIsOpen(!isOpen);
    return (
        <div>

               <Navbar  light expand="lg">
                 <div className="container">
                     <Link>
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
                     <NavbarToggler onClick={toggle} >
                         {
                             isOpen?
                                 <img src="/image/cancel-vector-icon.jpg" alt=""/>:
                                 <img src="/image/bars.png" alt=""/>

                         }
                     </NavbarToggler>
                     <Collapse isOpen={isOpen} navbar>


                         <Nav className="mr-auto" navbar>

                             <NavItem>
                                         <NavLink to='/'>Kasp tanlash</NavLink>

                             </NavItem>
                             <NavItem>
                                 <NavLink to='/'>Rezume yarat</NavLink>

                             </NavItem>
                             <NavItem>
                                 <NavLink to='/'>Treninglar</NavLink>

                             </NavItem>
                             <NavItem>
                                 <NavLink to='/'>Broshyura</NavLink>

                             </NavItem>
                             <NavItem>
                                 <NavLink to='/'>Biz haqimizda</NavLink>

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
                         </Nav>
                     </Collapse>
                 </div>
               </Navbar>

        </div>
    );
}

export default NavbarPref;