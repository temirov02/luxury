import React from 'react'
import Card from '../components/card/Card'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Testimonials from '../components/Testimonials/Testimonials'

const Home = () => {
    return (
        <div>
           <Header/> 
           <Card/>
           <Testimonials/>
           <Footer/>
        </div>
    )
}

export default Home
