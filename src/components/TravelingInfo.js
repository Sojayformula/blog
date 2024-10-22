import React from 'react'
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import image7 from '../assets/image6.png'
import image8 from '../assets/image7.png'

function TravelInfo() {
  return (

    <div className='flex justify-between mx-'>

   
      <div className=''>
      <img src={image1} alt="" className='h-[289px] w-[25rem] mx-20'/>
      </div>

      <div className='relative left-[-350px] space-y-4'>
      <div className=' '>
      <img src={image2} alt="" className='h-[100px] w-[144px]'/> 
      </div>
      

      <div className=' '>
      <img src={image3} alt="" className='h-[100px] w-[144px]'/> 
      </div>

      <div className=' '>
      <img src={image4} alt="" className='h-[100px] w-[
        144px]' /> 
      </div>

      <div className=' '>
      <img src={image5} alt="" className='h-[100px] w-[
        144px]' /> 
      </div>
      </div>

      
    

      <div className='relative left-[-350px] space-y-4'>
      <div className='space-y-4 '>
      <img src={image7} alt="" className='h-[100px] w-[144px]'/> 
      </div>

      <div className=' '>
      <img src={image8} alt="" className='h-[100px] w-[144px]'/> 
      </div>

      <div className=' '>
      <img src={image4} alt="" className='h-[100px] w-[
        144px]'/> 
      </div>
    </div>

    </div>
  )
}

export default TravelInfo