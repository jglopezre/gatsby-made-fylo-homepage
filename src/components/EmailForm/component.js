import React from 'react';
import { Form, FormGroup, Row, Col, Button, Label, Input } from 'reactstrap';
import { actButton, inputBox } from './style.module.scss';

const submitData = () => {
  console.log('SUBMITTED');
}


const EmailForm = () => {
  return (
    <Form>
      <Row className={inputBox} >
        <Col  md={{ size: 7 }}>
          <FormGroup>
            <Label for='contactEmail' hidden>Email</Label>
            <Input id='contactEmail' name='email' placeholder='Enter your Email' />
          </FormGroup>
        </Col>
        <Col  md={{ size: 5 }} >
          <Button className={actButton} onClick={submitData} >Get Started</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default EmailForm