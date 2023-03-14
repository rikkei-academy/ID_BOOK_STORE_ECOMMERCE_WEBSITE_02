
import React from 'react'
import Navbar from '../components/component-hompage/Navbar'
import Footer from '../components/component-hompage/Footer'
import Content from '../components/component-hompage/Content'
import BrandLogo from '../components/component-hompage/BrandLogo'

import Slide from"../components/component-hompage/Slide"
import Feature from '../components/component-hompage/Feature'
import BookOnSale from '../components/component-hompage/BookOnSale'
import StoreNumber from '../components/component-hompage/StoreNumber'
import FeatureProduct from '../components/component-hompage/FeatureProduct'

const Homepage=()=>{
 return(
    <>
    <Navbar/>
    <Content/>
    <BrandLogo/>
    <Slide/>
    <Feature/>
    <BookOnSale/>
    <FeatureProduct/>
    <StoreNumber/>
    <Footer/>
    </>
 )
}
export default Homepage;