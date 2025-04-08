import {Route, Routes, useLocation} from "react-router"
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import About from './components/About/About';
import Gallery from './components/gallery/Gallery';
import ContactRoute from './components/Contact/ContactRoute';
import Admin from './components/admin/Admin';
import Login from './components/admin/Login';
import SignUp from './components/admin/SignUp';
import NoMatch from './components/noMatch/NoMatch';
import BlogRoute from './components/BlogRoute/BlogRoute';
import { Toaster } from 'react-hot-toast';
import Donation from './components/donation/Donation';

function App() {

  const location = useLocation();
  return (
    <div className="App">
      <Toaster />
     {location.pathname !=='/' && <Navbar/>} 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='gallery' element={<Gallery/>} />
        <Route path='contact' element={<ContactRoute/>} />
        <Route path='blog' element={<BlogRoute/>}/>
        <Route path='admin' element={<Admin/>}>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<SignUp/>}/>
        </Route>
        <Route path='donation' element={<Donation/>}/>
        <Route path='*' element={<NoMatch/>}/>
      </Routes>
       <Footer />
    </div>
  )
}

export default App
