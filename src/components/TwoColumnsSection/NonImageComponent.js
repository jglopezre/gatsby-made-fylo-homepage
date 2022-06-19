import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import { nonImageContainer, textBox, childrenBox } from './style.module.scss'

const NonImageTwoColumnsSection = ({ title, paragraph, children }) => {
  return (
      <Container className={ nonImageContainer }>
          <Row lg='2'>
              <Col className={ textBox }>
                <h1>{ title }</h1>
                <p>{ paragraph }</p>
              </Col>
              <Col className={ childrenBox }>
                { children }
              </Col> 
          </Row>
      </Container>
  )
}

export default NonImageTwoColumnsSection