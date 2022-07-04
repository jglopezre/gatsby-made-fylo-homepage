import React from 'react'
import { graphql, Link, useStaticQuery } from "gatsby";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import { navBar, navLink } from './style.module.scss';
import useWindowResize from '../../customHooks/useWindowResize';


const NavBarComponent = () => {

    const data = useStaticQuery(graphql`
        query {
            navbarLogo: file(relativePath: {eq: "fylo-logo.svg"}) {
                name
                publicURL
            }
        }
    `);

    const { windowWidth } = useWindowResize();

    const logoWidth = ( width ) => {
        const breakPoint = 564;
        const logoMaxWidth = 110;
        const logoNormalWidth = 150;

        if( width <= breakPoint ) {
            return (width * logoMaxWidth) / breakPoint
        }
        if ( width > 564 ) {
            return logoNormalWidth
        }
    };
    
    return (
        <div>
            <Container>
                <Navbar className={ navBar }>
                    <NavbarBrand>
                        <Link to='/'>
                            <img src={ data.navbarLogo.publicURL } width={ logoWidth( windowWidth ) } alt= { data.navbarLogo.name } />
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