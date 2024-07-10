import React from 'react'
import './Profile.css' 
import { assets } from '../../assets/assets'


const Profile = () => {
    return (
        <div className="profile-container">
          <div className="profile">
            <h2>Profile</h2>
            <div className="image">
              <img src={assets.logo2} alt="Profile" />
            </div>
            <div className="inputs">
              <input type='text' placeholder='First Name' />
              <input type='text' placeholder='Last Name' />
            </div>
            <div className="inputs">
              <input type='email' placeholder='Enter Email' />
              <input type='text' placeholder='Enter Gender' />
            </div>
            <div className="inputs">
              <input type='text' placeholder='Enter your age' />
              <input type='text' placeholder='Enter your mobile number' />
            </div>
            <textarea placeholder='Enter your address' id='address'></textarea>
            <div className="inputs">
              <input type='password' placeholder='Enter your password' />
              <input type='password' placeholder='Confirm your password' />
            </div>
            <button className='button'>Update</button>
          </div>
        </div>
      )
}

export default Profile