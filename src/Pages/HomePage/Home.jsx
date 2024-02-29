import React from 'react'
import './home.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Search from '../../Components/Search/Search'
import Feature from '../../Components/Feature/Feature'

function Home() {
  return (
    <>
    <Header/>
    <Search/>
    <Feature/>
    <Footer/>
    </>
  )
}

export default Home