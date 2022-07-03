import React from 'react'
import { graphql, Link, useStaticQuery } from "gatsby";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import { navBar, navLink } from './style.module.scss';
import useWindowResize from '../../customHooks/useWindowResize';


const NavBarComponent = () => {

    const data = useStaticQuery(graphql`
        query {
            navbarLogo: file(relativePath: {eq: "fylo-logo.svg"}) {
                publicURL
              }
        }
    `);

    const logoAlt = 'Fylo Logo';

    const { windowWidth } = useWindowResize();

    const logoWidth = ( width ) => {
        if( width <= 564 ) {
            return (width * 110) / 564
        }
        if ( width > 564 ) {
            return 150
        }
    };
    
    return (
        <div>
            <Container>
                <Navbar className={ navBar }>
                    <NavbarBrand>
                        <Link to='/'>
                            <img src={ data.navbarLogo.publicURL } width={ logoWidth( windowWidth ) } alt= { logoAlt } />
                        </Link>
                    </NavbarBrand>
                    <Nav>
                        <NavItem>
                            <NavLink href='#' className={ navLink }>Features</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='#' className={ navLink }>Team</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='#' className={ navLink }>Sign-in</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </Container>
        </div>
    )
}

export default NavBarComponent;