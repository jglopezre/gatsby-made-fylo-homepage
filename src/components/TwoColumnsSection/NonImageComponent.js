import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import { nonImageContainer, textBox, rowStyle } from './style.module.scss'

const NonImageTwoColumnsSection = ({ title, paragraph, children }) => {
  return (
      <Container className={ nonImageContainer }>
          <Row className={ rowStyle } lg='2'>
              <Col className={ textBox }>
                <h1>{ title }</h1>
                <p>{ paragraph }</p>
              </Col>
              <Col className={ textBox }>
                <div>{ children }</div>
              </Col> 
          </Row>
      </Container>
  )
}

export default NonImageTwoColumnsSection