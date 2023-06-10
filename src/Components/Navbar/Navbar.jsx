import React from 'react'
import style from './Navbar.module.css'

const Navbar = () => {
  return (
   <>
   <header className='header'>

    <a href="#" className={style.t}>Irfan.</a>
    
    <nav className='nav'>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Experience</a>
      <a href="#">Projects</a>
      <a href="#">Contact</a>
    </nav>
   

   </header>
   
   </>
    )
}

export default Navbar