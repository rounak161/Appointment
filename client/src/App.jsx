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
import Apply from "./pages/Apply/Apply"
import Admin from "./pages/Admin/Admin"
import Book from "./pages/Book/Book"
import Apptments from "./pages/Apptments/Apptments"
import AdminAptments from "./pages/AdminAptments/AdminAptments"
import Verify from "./pages/Verify/Verify"
import Notification from "./pages/Notification/Notification"
import ChatBot from "./pages/Chatbot/ChatBot"
 
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
      <Route path='/apply' element={<Apply/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/appointments' element={<Apptments/>}/>
      <Route path='/book/:id' element={<Book/>}/>
      <Route path='/admin/appointments' element={<AdminAptments/>}/>
      <Route path='/verify' element={<Verify/>}/>
      <Route path='/notification' element={<Notification/>}/>
      <Route path='/bot' element={<ChatBot/>}/>
     </Routes>
     <Footer/>
     <FooterTail/>
   </div>
  )
}

export default App
