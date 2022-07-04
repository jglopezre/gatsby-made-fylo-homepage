import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Container, Row, Col } from "reactstrap";
import SocialBox from '../SocialBox/Component';
import { 
    ulFormat,
    linkFormat,
    footerWrapper,
    contactTable,
    mainContainer,
    elementContainer,
    logoContainer,
    socialBoxContainer } from './style.module.scss';
import useRandomKeyGenerator from '../../customHooks/useRandomKeyGenerator';

const FooterComponent = () => {
    const data = useStaticQuery(graphql `
        query {
            logoWhite: file(relativePath: {eq: "logo-white.svg"}) {
                name
                publicURL
            }
            iconEmail: file(relativePath: {eq: "icon-email.svg"}) {
                publicURL
            }
            iconPhone: file(relativePath: {eq: "icon-phone.svg"}) {
                publicURL
            }
        }
    `);
    

    return (
        <div className={ mainContainer }>
            <Container className={ footerWrapper }>
                <Row>
                    <Col className={ logoContainer }>
                        <img width={'150'} src={ data.logoWhite.publicURL } alt={ data.logoWhite.name } />
                    </Col>
                </Row>
                <Row>
                    <Col className={ elementContainer } lg={{size: 3}}>
                        <table className={ contactTable }>
                            <tbody>
                                <tr>
                                    <td><img width={'16'} src={ data.iconEmail.publicURL } alt='' /></td>
                                    <td>Phone: +1-543-123-4567</td>
                                </tr>
                                <tr>
                                    <td><img width={'16'} src={ data.iconPhone.publicURL } alt='' /></td>
                                    <td>example@fylo.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>

                    <Col className={ elementContainer } lg={{size: 3}}>
                        <ul className={ ulFormat }>
                            <li key={ useRandomKeyGenerator( 1000 ) }><span><Link className={ linkFormat }to='/'>About Us</Link></span></li>
                            <li key={ useRandomKeyGenerator( 1000 ) }><span><Link className={ linkFormat }to='/'>Jobs</Link></span></li>
                            <li key={ useRandomKeyGenerator( 1000 ) }><span><Link className={ linkFormat }to='/'>Press</Link></span></li>
                            <li key={ useRandomKeyGenerator( 1000 ) }><span><Link className={ linkFormat }to='/'>Blog</Link></span></li>
                        </ul>
                    </Col>
                    
                    <Col className={ elementContainer } lg={{size: 3}}>
                        <ul className={ ulFormat }>
                            <li key={ useRandomKeyGenerator( 1000 ) }><span><Link className={ linkFormat } to='/'>Contact Us</Link></span></li>
                            <li key={ useRandomKeyGenerator( 1000 ) }><span><Link className={ linkFormat } to='/'>Term</Link></span></li>
                            <li key={ useRandomKeyGenerator( 1000 ) }><span><Link className={ linkFormat } to='/'>Privacy</Link></span></li>
                        </ul>
                    </Col>
                    
                    <Col lg={{size: 3}} className={ socialBoxContainer } >
                        <SocialBox socialIcons={{ 
                            twitter: 'https://twitter.com/', 
                            instagram: 'https://www.instagram.com/',
                            facebook: 'https://www.facebook.com/' }}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FooterComponent;