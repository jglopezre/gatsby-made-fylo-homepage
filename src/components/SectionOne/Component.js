import React from 'react'
import {StaticImage } from 'gatsby-plugin-image';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';

const SectionOne = () => {
  const picture = '../../images/illustration-1.svg'
  const title = 'All your files in one secure location, accesible anywhere'
  const paragraph = 'Fylo stores your most important file in one secure location. Acces them wherever you need, share and collaborate with friends, family, and co-workers.'
  return (
    <Container>
      <Row>
        <Col lg={{ size: 6 }} >
          <h1> { title } </h1>
          <p>{ paragraph }</p>

        </Col>
        <Col lg={{ size: 6 }}>
          <StaticImage src={ picture } />         
        </Col>
      </Row>
    </Container>
  )
}


export default SectionOne;