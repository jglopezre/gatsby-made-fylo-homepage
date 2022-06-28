import React, { useState } from 'react';
import { Form, FormGroup, Row, Col, Button, Label, Input } from 'reactstrap';
import { actButton, inputBox, warningText, warningTextField, warningOn } from './style.module.scss';

const EmailForm = () => {
  const [ inputValue, setInputValue ] = useState('');
  
  const [{ warningTextState, inputStyle }, setWarningState] = useState({
    warningTextState: true,
    inputStyle: ''
  });
  
  const onInputChange = ({ target }) => {
    setInputValue( target.value );
  };
  
  const submitData = ( dataToSubmit ) => {
    const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (regex.test(dataToSubmit)) {
      console.log( inputValue );
      setWarningState({
        warningTextState: true,
        inputStyle: ''
      });
    } else {
      setWarningState({
        warningTextState: false,
        inputStyle: warningOn
      });
      console.warn('No es un email valido')
    };
  };

  return (
    <Form>
      <Row className={ inputBox } >
        <Col  md={{ size: 7 }}>
          <FormGroup>
            <Label for='contactEmail' hidden>Email</Label>
            <Input id='contactEmail' value={ inputValue } onChange={ onInputChange } className={ inputStyle } placeholder='Enter your Email' />
            <div className={ warningTextField }>
              <span hidden={ warningTextState } className={ warningText } >Please check your mail</span>
            </div>
          </FormGroup>
        </Col>
        <Col  md={{ size: 5 }} >
          <Button className={ actButton } onClick={ () => submitData(inputValue) } >Get Started</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default EmailForm