import React from 'react'
import {NavLink} from 'react-router'

import AppRouter from '../routers/AppRouter'
const navbar = () => {
    
  return (
    <div>
        <nav className='flex  justify-between py-3 px-20 bg-amber-500 text-white pointer cursor-pointer  '>
        <NavLink className=" text-white font-bold " to={"/"}>Home</NavLink>
        <NavLink className=" text-white font-bold " to={"/about"}>About</NavLink>
        <NavLink  className=" text-white font-bold " to={"/contact"}>Contact</NavLink> 
        </nav>
        <AppRouter/>
    </div>

  )}

export default navbar