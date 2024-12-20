import React, {useState} from 'react'
import {Link, useLocation} from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import logo from '../assets/logo.png';
import image from '../assets/Group9.png';

function HeaderThree() {

  const [searchTerm, setSearchTerm] = useState('');
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();
  const currentPath = location.pathname;
  

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = (link) => {
    setActiveLink(link)
   }
  return (
    <div className='bg-black'>
    <section className='flex md:px-5 justify-between items-center border-b' >

      <img src={logo} alt="Logo" className='w-[15rem]'/>

       <div className='relative group text-white' >
        <Link to='/'  
          onClick={() => handleClick("destination")}
          className={`${currentPath === '/' ? 'underline' : ''} underline-offset-4 hover:underline decoration-blue-500 decoration-4 px-4 py-2 font-semibold`}
          >
          Destination
        </Link>

        <Link to='/sport'    
          onClick={() => handleClick("sport")}
          className={`${currentPath === '/sport' ? 'underline' : ''} underline-offset-4 hover:underline decoration-blue-500 decoration-4 px-4 py-2 font-semibold`}
          >
          Sport
        </Link>

        <Link to='/food'    
          onClick={() => handleClick("food")}
          className={`${currentPath === '/food' ? 'underline' : ''} underline-offset-4 hover:underline decoration-blue-500 decoration-4 px-4 py-2 font-semibold`}
          >
         Food
        </Link>
      </div> 

      <div className='flex gap-2 mx-6 invisible lg:visible'>
        <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        className="border rounded py-2 px-8 my-4" />
        <FaSearch className='text-black my-7 relative right-10'/>
        </div>
    </section>
    </div>

  )
}

export default HeaderThree;