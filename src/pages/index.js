import * as React from 'react';
import { graphql } from 'gatsby';
import { TestimonialCarousel } from '../components/TestimonialCarousel/Component';
import useWindowResize from '../customHooks/useWindowResize';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main-style.scss'
import TwoColumnsSection from '../components/TwoColumnsSection/ImageComponent';
import NonImageTwoColumnsSection from '../components/TwoColumnsSection/NonImageComponent';
import Layout from '../components/Layout/Componen';
import EmailForm from '../components/EmailForm/component';
import HomeContent from '../content/homeContent';



// markup
const IndexPage = ({ data }) => {

  const {
    sectionOne,
    sectionTwo,
    registerSection,
    carouselContent } = HomeContent();

  const pageStyles = {
    sectionTwo: {
      backgroundColor: 'hsl(240, 75%, 98%)'
    },

    suscriberSection: {
      backgroundColor: 'hsl(238, 22%, 44%)'
    }
  }

  const { windowWidth } = useWindowResize();

  const urlBackgroundCurveSelection = ( width ) => {
    
    if( width <= 564 ) {
      return data.mobileCurve.publicURL
    }

    if ( width > 564 ){
      return data.desktopCurve.publicURL
    }

  }
  
  return (
    <>
      <Layout>
        <TwoColumnsSection { ...sectionOne }>
          <EmailForm />
        </TwoColumnsSection>
        <img src={ urlBackgroundCurveSelection( windowWidth ) } width={ windowWidth } alt='background curve' />
        <div style={ pageStyles.sectionTwo } >
          <TwoColumnsSection { ...sectionTwo }>
            <TestimonialCarousel { ...carouselContent } />
          </TwoColumnsSection>
        </div>
        <div style={ pageStyles.suscriberSection }>
          <NonImageTwoColumnsSection { ...registerSection } >
            <EmailForm />
          </NonImageTwoColumnsSection>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query {
    desktopCurve: file(relativePath: {eq: "bg-curve-desktop.svg"}) {
      publicURL
    }
    mobileCurve: file(relativePath: {eq: "bg-curve-mobile.svg"}) {
      publicURL
    }
  }
`;