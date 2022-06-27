import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { cardWrapper } from './style.module.scss';

const handleDragStart = (e) => e.preventDefault();


export const TestimonialCarousel = ( carouselContent ) => {

    const data = useStaticQuery (
        graphql`
            query {
                quotes: file(relativePath: {eq: "icon-quotes.svg"}) {
                    publicURL
                }
            }
        `
    );


    const cardBuilder = ( baseData ) => {
        let arr = Object.entries(baseData);
   
        let cardHolder = arr.map(([, element]) => {
            return (
                <div onDragStart={ handleDragStart } className={ cardWrapper } role="presentation">
                    <img src={ data.quotes.publicURL } alt='quote sign' />
                    <p>{ element.paragraph }</p>
                    <div>
                        <h1>PIC</h1>
                        <div>
                            <h2>{ element.fullName }</h2>
                            <p>{ element.position }</p>
                        </div>
                    </div>
                </div>
            ) 
            
        });
        return cardHolder
    };


    return (
        <AliceCarousel mouseTracking items={ cardBuilder( carouselContent ) } />
    );
}

