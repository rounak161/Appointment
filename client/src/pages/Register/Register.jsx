import React from 'react'
import './Register.css'
import {Link} from 'react-router-dom'
const Register = () => {
  return (
    <div className="container">
        <h2>Register</h2>
        <form className='form'>
           <input type='text' name='name' placeholder='Name' required/> 
           <input type='email' name='email' placeholder='Email' required/> 
           <input type='text' name='name' placeholder='Name' required/> 
           <button type='submit'>Sign In</button>
        </form>
        <div className="register">
        <p>Already registered ?  <Link to="/login" className="register-link">login</Link></p>
        </div>
     </div>
  )
}

export default Register