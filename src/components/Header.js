import React, {useState} from 'react'
import {Link} from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import logo from '../assets/logo.png';
import image7 from '../assets/image7.png';



function Header() {

  const [searchTerm, setSearchTerm] = useState('');
  const [activeLink, setActiveLink] = useState('');


   const handleChange = (event) => {
     setSearchTerm(event.target.value);
   };

   const handleClick = (link) => {
    setActiveLink(link)
   }

   const bgStyle = {
    backgroundImage: `url(${image7})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '30rem',
  };


  return (
    <div className='' style={bgStyle}>
      <section className='flex px-5 justify-between items-center border-b' >
        <img src={logo} alt="Logo" className='w-[15rem]'/>
        
        <div className='relativ group text-white'>
          <Link to='/'
            onClick={() => handleClick("destination")}
            className={`${activeLink === 'destination' ? 'underline' : ''} underline-offset-4 hover:underline decoration-blue-500 decoration-4 px-4 py-2 font-semibold`}
            >
            Destination
         </Link>

         <Link to='/sport' 
           onClick={() => handleClick("sport")}
           className={`${activeLink === 'sport' ? 'underline' : ''} underline-offset-4 hover:underline decoration-blue-500 decoration-4 px-4 py-2 font-semibold`}
           >
           Sport
         </Link>

         <Link to='/food' 
           onClick={() => handleClick("food")}
           className={`${activeLink === 'food' ? 'underline' : ''} underline-offset-4 hover:underline decoration-blue-500 decoration-4 px-4 py-2 font-semibold`}
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
          className="border rounded py-2 px-8 my-4"/>
          <FaSearch className='text-black my-7 relative right-10'/>
        </div>
    </section>
    <div className='text-white mt-[7rem]'>
    <div className='flex justify-center text-4xl'>
      INSPIRATION FOR TRAVEL BY REAL PEOPLE
      </div>
      <div className='flex justify-center mt-2'>
        Book smart travel simpl
        </div>
        <div className='flex justify-center mt-8 '>
        <button className='bg-white text-black font-bold text-sm border-4 border-black -tracking-widest p-2'>Smart planning your trip</button>
        </div>
      
    </div>
    </div>
  )
}

export default Header
