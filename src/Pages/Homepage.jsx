
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Content from '../components/Content'
import BrandLogo from '../components/BrandLogo'

import Slide from"../components/Slide"
import Feature from '../components/Feature'
import BookOnSale from '../components/BookOnSale'

const Homepage=()=>{
 return(
    <>
    <Navbar/>
    <Content/>
    <BrandLogo/>
    <Slide/>
    <Feature/>
    <BookOnSale/>
    <Footer/>
    </>
 )
}
export default Homepage;