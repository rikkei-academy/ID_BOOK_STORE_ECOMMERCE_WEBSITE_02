
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Content from '../components/Content'
import BrandLogo from '../components/BrandLogo'

import Slide from"../components/Slide"

const Homepage=()=>{
 return(
    <>
    <Navbar/>
    <Content/>
    <BrandLogo/>
    <Slide/>
    <Footer/>
    </>
 )
}
export default Homepage;