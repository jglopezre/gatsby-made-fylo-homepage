import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Container, Row, Col } from "reactstrap";
import SocialBox from '../SocialBox/Component';
import { ulFormat, linkFormat, footerWrapper, contactTable, mainContainer } from './style.module.scss';

const FooterComponent = () => {
    const data = useStaticQuery(graphql `
        query {
            logoWhite: file(relativePath: {eq: "logo-white.svg"}) {
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
                    <Col>
                        <img width={'150'} src={data.logoWhite.publicURL} />
                    </Col>
                </Row>
                <Row>
                    <Col lg={{size: 3}}>
                        <table className={contactTable}>
                            <tr>
                                <td><img width={'16'} src={ data.iconEmail.publicURL }/></td>
                                <td>Phone: +-543-123-4567</td>
                            </tr>
                            <tr>
                                <td><img width={'16'} src={ data.iconPhone.publicURL } /></td>
                                <td>example@fylo.com</td>
                            </tr>
                        </table>
                    </Col>

                    <Col lg={{size: 3}}>
                        <ul className={ ulFormat }>
                            <li><span><Link className={ linkFormat }to='/'>About Us</Link></span></li>
                            <li><span><Link className={ linkFormat }to='/'>Jobs</Link></span></li>
                            <li><span><Link className={ linkFormat }to='/'>Press</Link></span></li>
                            <li><span><Link className={ linkFormat }to='/'>Blog</Link></span></li>
                        </ul>
                    </Col>
                    
                    <Col lg={{size: 3}}>
                        <ul className={ ulFormat }>
                            <li><span><Link className={ linkFormat } to='/'>Contact Us</Link></span></li>
                            <li><span><Link className={ linkFormat } to='/'>Term</Link></span></li>
                            <li><span><Link className={ linkFormat } to='/'>Privacy</Link></span></li>
                        </ul>
                    </Col>
                    
                    <Col lg={{size: 3}}>
                        <SocialBox socialIcons={{ twitter: true, instagram: true, facebook: true }}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FooterComponent;