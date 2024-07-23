import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
const Home = () => {
  return (
    <div className="home">
        <div className="left">
             <h2>Your Health,
             Our Responsibility </h2>
            
             <p>"Welcome to Health-APP, where your well-being is our top priority. Easily book appointments with top doctors at your convenience. Our platform ensures seamless scheduling and timely notifications, connecting you with expert care effortlessly. Trust Health-APP for a healthier, happier you."</p>
        </div>
        <div className="right">
           <img src={assets.h1} alt="" />
        </div>  
    </div>
  )
}

export default Home