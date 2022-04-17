import React from 'react'
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { navBar, navLink } from './style.module.scss';


const NavBarComponent = () => {
    const logoPath = '../../images/logo.svg'
    
    return (
        <div className={ navBar } >
            <Navbar>
                <NavbarBrand>
                    <Link to='/'>
                        <StaticImage width={ 150 } src={ logoPath } alt='Brand main Logo' />
                    </Link>
                </NavbarBrand>
                <Nav>
                    <NavItem>
                        <NavLink href='#' className={navLink}>Features</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#' className={navLink}>Team</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#' className={navLink}>Sign-in</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBarComponent;