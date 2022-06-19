import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { textBox, container, pictureStyle } from './style.module.scss';

const TwoColumnsSection = ({inverted, title, paragraph, picture, pictureAlt, children}) => {
    
    let first = 1;
    let second = 2;

    if (!inverted) {
        first = 1;
        second = 2;
    } else {
        first = 2;
        second = 1;
    }


    return (
        <Container className={ container }>
            <Row lg='2' >
                <Col lg={{ order: first }} >
                    <img className={ pictureStyle } src={ picture } alt={ pictureAlt } />
                </Col>
                <Col className={ textBox } lg={{ order: second }}>
                    <h1> { title } </h1>
                    <p>{ paragraph }</p>
                    { children }
                </Col>
            </Row>
        </Container>
    )
}


export default TwoColumnsSection;