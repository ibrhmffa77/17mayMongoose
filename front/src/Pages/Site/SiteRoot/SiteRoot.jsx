import React from 'react'
import Header from '../../../Layout/Site/Header/Header'
import {Outlet} from 'react-router-dom'
import Footer from '../../../Layout/Site/Footer/Footer'

const SiteRoot = () => {
  return (
    <React.Fragment>
        <Header/>
        <Outlet/>
        <Footer/>
    </React.Fragment>
  )
}

export default SiteRoot