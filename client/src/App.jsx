import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Footer from "./pages/Footer/Footer"
import FooterTail from "./pages/FooterTail/FooterTail"
import Home from "./pages/Home/Home"
import Navbar from "./pages/Navbar/Navbar"
import Doctor from "./pages/Doctor/Doctor"
import {Routes,Route} from 'react-router-dom'
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Profile from "./pages/Profile/Profile"

function App() {
   

  return (
   <div>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about-us' element={<About/>}/>
      <Route path='/contact-us' element={<Contact/>}/>
      <Route path='/doctor' element={<Doctor/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/profile' element={<Profile/>}/>
     </Routes>
     <Footer/>
     <FooterTail/>
   </div>
  )
}

export default App
