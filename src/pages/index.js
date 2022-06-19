import * as React from 'react';
import { graphql } from 'gatsby';
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
    registerSection } = HomeContent();

  const pageStyles = {
    sectionTwo: {
      backgroundColor: 'hsl(240, 75%, 98%)'
    },

    suscriberSection: {
      backgroundColor: 'hsl(238, 22%, 44%)'
    }
  }

  return (
    <>
      <Layout>
        <TwoColumnsSection { ...sectionOne }>
          <EmailForm />
        </TwoColumnsSection>
        <img src={data.desktopCurve.publicURL} />
        <div style={ pageStyles.sectionTwo } >
          <TwoColumnsSection { ...sectionTwo }>HOLA 2 
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
  }
`;