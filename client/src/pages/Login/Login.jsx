import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
 
const Login = () => {
  return (
     <div className="container">
        <h2>Sign In</h2>
        <form className='form'>
           <input type='email' name='email' placeholder='Email' required/> 
           <input type='text' name='name' placeholder='Name' required/> 
           <button type='submit'>Sign In</button>
        </form>
        <div className="register">
         <p>Not registered ?  <Link to="/register" className="register-link">Register Now</Link></p>
        </div>
     </div>
  )
}

export default Login