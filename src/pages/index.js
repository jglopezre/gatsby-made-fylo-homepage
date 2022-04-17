import * as React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main-style.scss'

import SectionOne from '../components/SectionOne/Component';
import SectionTwo from '../components/SectionTwo/Component';
import Layout from '../components/Layout/Componen';


// markup
const IndexPage = () => {
  
  return (
    <>
      <Layout>

      <SectionOne />
      <SectionTwo />
      
      </Layout>
    </>
  )
}

export default IndexPage
