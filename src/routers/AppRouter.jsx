import {Routes, Route } from 'react-router'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/contact'
const AppRouter = () => {
  return (
  <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/about"  element={<About/>}/>
    <Route path="/contact"  element={<Contact/>}/>
  </Routes>    
  )
}

export default AppRouter