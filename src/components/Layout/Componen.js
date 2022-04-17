import React from 'react'
import FooterComponent from '../Footer/Component'
import NavBarComponent from '../NavBar/Component'
import UnderFooter from '../UnderFooter/Component'

const Layout = ({ children }) => {
  return (
    <>
        <NavBarComponent />

        { children }
        
        <FooterComponent />
        <UnderFooter />
    </>
  )
}

export default Layout