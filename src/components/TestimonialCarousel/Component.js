import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { cardWrapper, cardBottom, cardInfo, avatarPicture } from './style.module.scss';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

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
        let arr = Object.entries( baseData );
        let cardHolder = arr.map(([ , element ]) => {
            return (
                <div onDragStart={ handleDragStart } className={ cardWrapper } role="presentation">
                    <img src={ data.quotes.publicURL } alt='quote sign' />
                    <p>{ element.paragraph }</p>
                    <div className={ cardBottom }>
                        <GatsbyImage image={ getImage( element.picture ) } className={ avatarPicture } alt='A person face' />
                        <div className={ cardInfo }>
                            <span>{ element.fullName }</span>
                            <br />
                            <span>{ element.position }</span>
                        </div>
                    </div>
                </div>
            ) 
        });
        return cardHolder
    };

    
    const carouselConfiguration = {
        disableDotsControls: true,
        disableButtonsControls: true,
        items: cardBuilder( carouselContent ),
        mouseTracking: true,
        infinite: true,
        autoPlay: true,
        autoPlayInterval: 3000,
        autoWidth: false,
    };

    return (
        <div style={{ minWidth: '320px', maxWidth: '80%' }}>
            <AliceCarousel { ...carouselConfiguration }  />
        </div>
    );
}

