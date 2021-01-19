import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import {ReactComponent as Logo} from "../../logo.svg";
import { Link } from 'react-router-dom';

// const navLinkList = [
//   {
//     to: '/',
//     page: 'Home',
//     main: () => <NavLink tag={Link} href='/'>
//       Home
//     </NavLink>
//   },
//   {
//     to: '/products',
//     page: 'Products',
//     main: () => <NavLink tag={Link} to={this.to}>
//       {this.page}
//     </NavLink>
//   },
//   {
//     to: '/contact',
//     page: 'Contact',
//     main: () => <NavLink tag={Link} to={this.to}>
//       {this.page}
//     </NavLink>
//   },
// ]

// const getLinks = () => {
//   const links = navLinkList.map((link, index) => {
//     return <NavItem 
//       key ={index}
//     >
//       {link.main}
//     </NavItem>
//   })
//   console.log(links);
//   return links
// } 

function Navabar () {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <div>
      <Navbar color="light" light expand="md">
        <div className='container'> 
          <NavbarBrand tag={Link} to="/">
            <Logo />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {/* {getLinks()} */}
              <NavItem>
                <NavLink tag={Link} to="/">Movies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/products">Products</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/contact">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/example">Example</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Navabar;