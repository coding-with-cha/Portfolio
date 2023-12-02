import React from 'react'
import {Link} from 'react-router-dom'
import img from '../images/img.jpg'
const Navbar = () => {
  return (
    <div className='Navbar'>
      <img src={img} className='img'/>
      <Link to='/' className='Link'>ABOUT</Link>
      <Link to='/Experience' className='Link'>EXPERIENCE</Link>
      <Link to='/Education' className='Link'>EDUCATION</Link>
      <Link to='/Skills' className='Link'>SKILLS</Link>
      <Link to='/References' className='Link'>REFERENCES</Link>
    </div>
  )
}

export default Navbar