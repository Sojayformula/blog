import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png'

const Menu = () => (
  <>
        <Link to= '/' className='text-white'>Destination</Link>
        <Link to= '/food' className='text-white'>Food</Link>
       
        </>
)

function Navbar() {
  return (
    <div>
      <div>
        <img src={Logo} alt="" />
      </div>

      <div>
      <Menu />
      </div>

    </div>
  )
}

export default Navbar