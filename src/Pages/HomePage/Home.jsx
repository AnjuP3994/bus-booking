import React from 'react'
import './home.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Search from '../../Components/Search/Search'
import Feature from '../../Components/Feature/Feature'
import Services from '../../Components/safetyServices/Services'
import Growing from '../../Components/Growing/Growing'

function Home() {
  return (
    <>
    <Header/>
    <Search/>
    <Feature/>
    <Services/>
    <Growing/>
    <Footer/>
    </>
  )
}

export default Home