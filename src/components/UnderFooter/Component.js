import React from 'react'
import { Container } from 'reactstrap';
import { wrapper } from './style.module.scss';

const UnderFooter = () => {

    const date = new Date();
  
    return (
        <Container className={ wrapper }>
            <div>
                Challenge by <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>Frontend Mentor</a>
                {' '}
                Coded by <a href="javierlo.site" target='_blank'>Javier Lopez.</a>
            </div>
        </Container>
    )
}

export default UnderFooter;