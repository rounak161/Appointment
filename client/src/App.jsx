import Footer from "./pages/Footer/Footer"
import Home from "./pages/Home/Home"
import Navbar from "./pages/Navbar/Navbar"

 import {Routes,Route} from 'react-router-dom'

function App() {
   

  return (
   <div>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes>
     <Footer/>
   </div>
  )
}

export default App
