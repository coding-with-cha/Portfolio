import React from 'react'
import target from '../images/target.png'
import {Link} from 'react-router-dom'

const References = () => {
  return (
    <div className='References'>
      <h1>/WORK.</h1>  
      <h3>Selected work I've taken on in the past.</h3>    
      <div className='work'>
        <div className='haut'> 
        <img src={target}/> <h3>GARAGE</h3>
        </div>
        <div className='bas'>
          <h3>GARAGE</h3>
          <Link to='https://github.com/coding-with-cha/Garage-React-NodeJS'>Garage.com</Link>
        </div>
      </div>
    </div>
  )
}

export default References