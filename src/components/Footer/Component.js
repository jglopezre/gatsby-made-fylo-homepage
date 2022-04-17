import React from 'react'
import { Link } from 'gatsby';
import { Container, Row, Col } from "reactstrap";
import SocialButtonBox from '../SocialButtonBox/Component';
import { ulFormat, linkFormat, footerWrapper, contactTable } from './style.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

const FooterComponent = () => {
  return (
    <Container fluid className={ footerWrapper }>
        <Row>
            <Col>
                <StaticImage  width={ 150 } src='../../images/logo-white.svg' />
            </Col>
        </Row>
        <Row>
            <Col lg='3'>
                <table className={contactTable}>
                <tr>
                    <td><StaticImage width={ 16 } src='../../images/icon-phone.svg' /> </td>
                    <td>Phone: +-543-123-4567</td>
                </tr>
                <tr>
                    <td><StaticImage width={ 16 } src='../../images/icon-email.svg' /> </td>
                    <td>example@fylo.com</td>
                </tr>
        </table>
            </Col>

            <Col lg='3'>
                <ul className={ ulFormat }>
                    <li><Link className={ linkFormat }to='/'>About Us</Link></li>
                    <li><Link className={ linkFormat }to='/'>Jobs</Link></li>
                    <li><Link className={ linkFormat }to='/'>Press</Link></li>
                    <li><Link className={ linkFormat }to='/'>Blog</Link></li>
                </ul>
            </Col>
            
            <Col lg='3'>
                <ul className={ ulFormat }>
                    <li><Link className={ linkFormat } to='/'>Contact Us</Link></li>
                    <li><Link className={ linkFormat } to='/'>Term</Link></li>
                    <li><Link className={ linkFormat } to='/'>Privacy</Link></li>
                </ul>
            </Col>
            
            <Col lg='3'>
                <SocialButtonBox />
            </Col>
        </Row>
    </Container>
    
  )
}

export default FooterComponent;