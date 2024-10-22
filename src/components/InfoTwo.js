import React, {useState} from 'react'
import { MdOutlineBarChart } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdFacebook } from "react-icons/md";
import { GrTwitter } from "react-icons/gr";
import { SiPinterest } from "react-icons/si";
import { FaYoutube } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import image from "../assets/facebook.png";
import image2 from "../assets/twitter.png";
import image3 from "../assets/pinterest.png";
import imagebt from '../assets/image30.png';
import imagebtt from '../assets/image29.png';
import imagebtn from '../assets/image31.png';
import { infoTwoText1, infoTwoText10, infoTwoText2, infoTwoText3, infoTwoText4, infoTwoText5, infoTwoText6, infoTwoText7, infoTwoText8, infoTwoText9 } from './HERO_CONTENT';


const Arrdata = [
  {
  id: 1,
  title: "Integer Maeconas Eget.",
  date: "june 21, 2024 -- 2minutes ago",
  text: "All other text here",
  img4: imagebt,
  img5: imagebtt,
  img6: imagebtn,
    review: "Solid performance and great value!",
  },
  {
  id: 2,
  title: "Integer Maeconas Eget.",
  date: "june 21, 2024 -- 2minutes ago",
  text: "All other text here",
  img4: imagebtt,
  img5: imagebt,
  img6: imagebtn,
    review: "Solid performance and great value!",
  },
  {
    id: 3,
    title: "Integer Maeconas Eget.",
    date: "june 21, 2024 -- 2minutes ago",
    text: "All other text here",
    img4: imagebt,
    img5: imagebtt,
    img6: imagebtn,
      review: "Solid performance and great value!",
    },
  ];



function InfoTwo() {

  const [name, setName] = useState("")

  const [email, setEmail] = useState("")
  //const [checkbox, setCheckbox] = useState("")

  const handleOnchage = (e) => {
    setEmail(e.target.value)
  };

  const handleClick = (e) => {
    setName(e.target.value)
  };

  return (
    <>
    <div className='md:mx-20 mt-20 flex flex-col md:flex-row justify-between mx-10 '>
      
    <div className='border border-red-900'>
      
      <div className='mx-0'>
        <a href='#'><MdOutlineBarChart className='mx-2 text-xl invisible md:visible'/></a>
        <p className='invisible md:visible'>views</p> 
        <p className='invisible md:visible'>1.6k</p>
      </div>

      
      <div className='mt-5'>
        <a href='#'><IoShareSocialSharp className='mx-2 text-xl invisible md:visible'/></a>
        <p className='invisible md:visible'>views</p> 
        <p className='invisible md:visible'>1.6k</p>
      </div>


      <div className='mt-5 space-y-2'>
        <a href='#'><MdFacebook className='mx-2 text-xl invisible md:visible'/></a>
        <p className='invisible md:visible'>125</p> 
        <a href='#'><GrTwitter className='mx-2 text-xl invisible md:visible'/></a>
        <a href='#'><SiPinterest className='mx-2 invisible md:visible'/></a>
        <p className='invisible md:visible'>125</p> 
      </div>
     </div>

      <div className='md:mx- md:mr-[18rem] md:w-[50rem] md:w-ful border border-red-900 justify-center text-2xl md:text-lg md:mt-0 mt-[-20rem] font-europa'>
       {infoTwoText1}

        
          <div className='flex md:font-bold'>
            <FaQuoteRight className='md:text-[2rem] my-8'/>
            <div className='my-8 md:mx-4 md:text-[25px]'>
            KNICKER LINING CONCEALED BACK ZIP <br/>
            FASTEN SWING STYLE HIGH WASTED  <br/>
            DOUBLE LAYER FULL PARTTEN LORAN
           </div>
          </div>

          {infoTwoText2}

            <p className='my-8'>
            {infoTwoText3}
            </p>

            <p className='text-[25px] font-bold top-10 relative'>EU RIDICULUS FRINGILLA AENEAN</p>

            <p className='my-20'>
              {infoTwoText4}
            </p>

            <p className='md:mx-20 my-[-20px]'>
              <li>Crist fresh iconic elegant timeless clean perfume</li>
              <li>Neck straight sharp silhouette and dart detail</li>
              <li>Machine wash cold slim fit premium stretch selvedge denim comfortable low waist</li>
            </p>

            <p className='my-20'>
             {infoTwoText5}
            </p>
            

         <div className='flex invisible md:visible mx-20 space-x-20'>

          <div  className=''>
              694 
              <span>Shoes</span>
            </div>

            <div className='flex mx-2'>
            <img src={image} className='w-10 h-10 my-[-10px]'/>
            <span>SHARE</span>
            <span className=''>694</span>
            </div>

            <div  className='flex mx-2'>
            <img src={image2} className='w-10 h-10 my-[-10px]  mx-[rem]'/>
            <span>TWITTER</span>
            </div>

            <div  className='flex mx-2'>
            <img src={image3} className='w-10 h-10 my-[-10px]'/>
            <span>694</span>
            </div>
            </div>

            <div className='flex my-4'>
              <hr className='relative w-[12rem] left-[3rem]'/>
              <hr className='relative w-[12rem] left-[rem]  border-blue-900'/>
              <hr className='relative w-[12rem] left-[rem]  border-blue-500'/>
              <hr className='relative w-[12rem] left-[-rem]  border-red-500'/>
            </div>

            <div className='mt-20 mx-20'>
              <div className='flex bg-black text-white justify-center  py-5'>
                <button>view comments (0)</button>
              </div>

              <div className='mt-20 font-bold'>
                SIGN UP FOR OUR NEWSLETTERS
              </div>
              <div className='text-gray-400'>
                GET NOTIFIED OF THE BEST DEALS ON OUR WORDPRESS THEMES.
              </div>

              <div className='flex gap-4 py-6'>
                <div>
                  <input
                  type='name'
                  placeholder='name'
                  value={name}
                  onChange={handleClick}
                  className='py-2 rounded-lg border text-xl'
                  />
                </div>

               
                <div className=' w-[14rem] py-  '>
                  <input
                  type='name'
                  placeholder='email'
                  value={email}
                  onChange={handleClick}
                  className='py-2 rounded-lg border text-xl'

                  />
                </div>

                <div className='flex mx-4 justify-center bg-black text-white w-[8rem] rounded-lg tracking-widest'>
                  <button>SUBSCRIBE</button>
                </div>

                </div>
              </div>
            

            <div className='flex md:flex-row flex-col mx-20 gap-4 mb-6 mt-20'>
          {Arrdata.map((item, index) => {
          return <div key={index}>
            <div>
            <img src={item.img4}  className='h-[15rem] w-[12rem] my-6'/>
            <p className='font-bold'>{item.title}</p>
            <p className=''>{item.text}</p>
            <small className=''>{item.date}</small>
            </div>

            <div>
            <img src={item.img5}  className='h-[15rem] w-[12rem] my-6'/>
            <p className='font-bold'>{item.title}</p>
            <p className=''>{item.text}</p>
            <small className=''>{item.date}</small>
            </div>
          </div>
        })}
        </div>
          </div>
    
       <div className='conatiner [20rem] w-[20rem] text-2xl md:text-lg md:mx-[rem] mx-[rem] md:my-[-1px] border border-red-900 font-europa'>
        <div  className='font-bold '>
          Follow Us
        </div>
        <div className='flex md:space-x-10 mt-6 text-2xl'>
          <a href='/' className='mx-2'><MdFacebook /></a>
          <a href='#'><GrTwitter /></a>
          <a href='#'><SiPinterest /></a>
          <a href='#'><FaYoutube /></a>
        </div>

        <div className='mt-10'>
          <span className='font-bold'>Subscription</span> Subscribe to our newsletter and receive a selection of cool article evry weeks
        </div>

        <div className='mt-10'>
        <div className=''>
          <input 
          type='text'
          value={email}
          placeholder='Enter your email'
          onChange={handleOnchage}
          className='w-full [15rem] py-4 rounded-sm border-2'
          />
        </div>

        <div className='flex bg-black tracking-widest [2rem] md:w-[15rem] py-4 text-white justify-center mt-4 rounded-sm'>
            SUBSCRIBE
          </div>

          <div className='flex '>
            <div className='mt-10'>
            <input
            type='checkbox'
            //value={checkbox} 
            //onClick={handleCheck}
            className=''
            />
            </div>

            <div className='mx-3 mt-8'>
            {infoTwoText7}
            </div>
          </div>

          <div className='container mt-20 '>
            <div className='font-bold'>
              The Latest
            </div>

            <div className='flex bg-black text-white [15rem] my-4'>
              <div className=' mx-6 my-4 '>
                {infoTwoText6}
          <br/>

              <small className='flex my-8 text-[11px] gap-2'>
                june 21, 2024
                 <small className='my-2'>
                  <FaRegClock className='align-2'/>
                  </small>
                  2 ninutes read
                  </small>
              </div>
            </div>
            </div>

          <div className='flex my-4'>
              <div className=' mx-6 my-4 mb-4s'>
              
              {infoTwoText8}

              <small className='flex my-6 text-[11px] gap-1'>
                june 21, 2024 
                <small className='mx-2 my-2'>
                  <FaRegClock className=''/>
                  </small>
                  2 ninutes read
                  </small>
              </div>
              </div>
            </div>

          <div className='flex my-6 w-  full [15rem]'>
              <div className=' mx-6 my-4 mb-4s'>
             {infoTwoText9}

              <small className='flex my-6 text-[11px] gap-1'>
                june 21, 2024
                <small className='mx-2 my-2'>
                  <FaRegClock className=''/>
                  </small>
                  2 ninutes read
                  </small>
                  </div>
                  </div>

          <div className='flex my-4'>
            <div className=' md:mx-6 my-4 mb-4'>
              {infoTwoText10}
              <small className='flex my-6 text-[11px] gap-1'>
                june 21, 2024
                <small className='mx-2 my-2'>
                  <FaRegClock className=''/>
                  </small>
                  2 ninutes read
                  </small>
              </div>
          </div>

      </div>
     </div>

    <div className='invisible md:visible bg-black h-[10rem] text-white'>
            Footer
          </div>

          </>

  )
}

export default InfoTwo