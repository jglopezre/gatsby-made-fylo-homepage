import React from 'react'
import {StaticImage } from 'gatsby-plugin-image';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';

const SectionTwo = () => {
  const picture = '../../images/illustration-2.svg'
  const title = 'Stay productive, wherever you are'
  const paragraph = 'Fylo stores your most important file in one secure location. Acces them wherever you need, share and collaborate with friends, family, and co-workers.'
  return (
    <Container>
      <Row>
        <Col lg={{ size: 6 }} >
            <StaticImage src={ picture } />

        </Col>
        <Col lg={{ size: 6 }}>
            <h1> { title } </h1>
            <p>{ paragraph }</p>
        </Col>
      </Row>
    </Container>
  )
}


export default SectionTwo;