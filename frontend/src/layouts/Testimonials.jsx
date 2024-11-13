import React from 'react'
import Footer from '../components/Footer'
import Reviews from '../components/Reviews'
import Navbar from '../components/Navbar'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Reviews />
        <Footer/>
    </div>
  )
}

export default Home