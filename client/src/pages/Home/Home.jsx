import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import About from '../About/About'
import Count from '../Count/Count'
import Contact from '../Contact/Contact'
 
const Home = () => {
  return (
    <div>
       <Header/>
       <About/>
       <Count/>
        <Contact/>
    </div>
  )
}

export default Home