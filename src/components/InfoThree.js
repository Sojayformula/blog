import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { GrTwitter } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { SiPinterest } from "react-icons/si";
import { FaYoutube } from "react-icons/fa6";
import { LiaSoundcloud } from "react-icons/lia";
import { FaVimeoV } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import image from '../assets/Group9.png'
import image1 from '../assets/gmail.png'

import { infoThree,
   infoThreeText1,
   infoThreeText2,
   infoThreeText3, 
   infoThreeText4,
   infoThreeText5,
   data,
   infoThree11,} from './HERO_CONTENT';





function InfoThree() {

  return (
    <>
    <div className='container flex mx-20 flex-col md:flex-row gap-[10rem]'>

      {/* top image */}
      <div className=' md:mx- mt-10'>
        <div className=' md:w-[55rem] md:h-[30rem]'>
        <img src={image} />
       </div>
      </div>

       {/* Top right images and text */}
      <div className='mt-10 mx-[-9rem] md:w-ful space-y-2 md:space-y-0 border border-red-900 w-[22rem]'>
          {data.map((item, index) => {
            return<div key={index}>
            <div className='flex flex-col md:flex-row'>
              <img src={item.img} className='w-[10rem] h-[8rem]'/>
             <span className='font-bold mt-[3rem] mx-2'>{item.text}</span>
            </div>
        </div>
})}
      </div>
    </div>

    {/* Left social links */}
    <div className='container flex justify-between mx-20 md:mt-[-25rem] lg:mt-10 gap-4'>
        <div className='space-y-6 '>
          <div className='border-b'>
            <span className='font-bold text-2xl'>966</span>
            <p className='text-gray-400'>Sares</p>
          </div>
          <div className='flex'>
          <a href=''><MdFacebook className='text-blue-800 w-10 h-10'/></a>
          <span className='mt-2'>528</span>
          </div>
          <div  className='flex'>
          <a href=''><GrTwitter className='text-blue-400 w-10 h-10'/></a>
          <span className='mt-2'>528</span>
          </div>
          <div  className='flex'>
          <a href=''><SiPinterest className='text-red-600 w-10 h-10'/></a>
          <span className='mt-2'>528</span>
          </div>
          <div  className='flex'>
          <a href=''><img src={image1} className='h-10 w-10' /></a>
          <div>
          <span className='mt-2'>528</span>
          </div>
          </div>
        </div>

        {/* Main text/images */}
        <div className='w-[42rem] font-europ'>
          <div>
            {infoThreeText1}
          </div>

          <div className='mt-8 font-regular tracking-widest'>
          TABLE OF CONTENTS
        </div>

          <div className=' mt-10 border-b border-gray-400'>
            <div className='mx-20'>
            <div className='flex'>
            <div className='flex justify-center items-center border rounded-full bg-gray-400 w-[25px] h-[25px] mb-2'>1</div>
            <p className='mx-4 text-green-400'>
              Nam condimentum varius justa
            </p>
          </div>

          <div className=' '>
            <div className='flex'>
          <div className='flex justify-center items-center border rounded-full bg-gray-400 w-[25px] h-[25px]'>2</div>
            <p className='mx-4 text-green-400'>
            Faucibus nullam luctus felis pretium donec
            </p>
            </div>
            

            <div className='mt-4 mx-10 text-green-400'>
              <li>
                Tincidunt veni tellusorci arnean consectetuer
              </li>

              <li className='mb-10'>
                Eu ridiculus fringilla
              </li>
            </div>
            </div>

            </div>
            </div>

            <div className='border-b mb-20'>
              <div className='border-b '>
              <div className='text-2xl font-nuova font-bold mt-6'>
                Eu ridiculus fringilla aenean
              </div>

              <div className='mt-10 mb-10 border-gray-400'>
              Eget aenean tellus venenatis. Donec odio tempus. Felis arcu <a href="/" className='text-blue-500 underline'>
              pretium metus</a> nullam quam aenean sociis quis sem
                neque vici libero. Venenatis nullem fringilla pretium magnis aliquam nunc valputate integer auque ultricies cras.
                Eget viverra feugiat cras ut. Sit natoque montes tempus liguala eget vitae pede rhoncus maecenas consectetuer commodo condimentum aenean.
              </div>
              </div>

            
              <div className='mt-10 border- flex'>
                <div className='mt-1 text-2xl text-gray-400'>
              <FaArrowRight />
              </div>
              <div className='mx-10'>
               {infoThreeText5}
              </div>
              </div>
              <div className='text-gray-500 text-[15px] mx-[4rem] mt-2'>Donec Massa Integer</div>
            </div>

            <div>
             {infoThreeText2}
            </div>

            <div className='mx-20 mt-10'>
              <ul
              style={{
                listStyleType: "upper-num"
              }}>
                <li>Molis lorem vitae varrius</li>
                <li>Felis laoreet justo aenean curbitur <spn className='underline'>donec cosequat</spn> sit nascetur tellus dapibus.</li>
                <li>Maecenas imperdiet vitae vidi vel parturient elefend mollis eu libero.</li>
                <li>Dictum libero felis feugiat sed etiam vel sem nullam elit vitae eu.</li>
                <li>Felis nec eget curabitur sapien nisi aligquam pretium donec dapibus feugiat. Faucibus enim venenatis mus semper.</li>
              </ul>
            </div>

            <div className='mt-10'>
             {infoThreeText3}
            </div>

            <div className='font-bold text-2xl mt-10'>
              Faucibu nullam luctus felis pretium donec
            </div>

            <div className='mt-10'>
                {infoThreeText4}
              </div>

              <div className='flex justify-center'>
                {infoThree.map((item, index) => { 
                  return<ul key={index} className='mt-10'>
                    <li className='flex'>
                      <img src={item.img1} className='w-[20rem] h-[20rem]'/>
                      <img src={item.img2} className='w-[20rem] h-[20rem] mx-4'/>
                    </li>

                    <li className='flex'>
                      <img src={item.img3} className='w-[30rem] h-[20rem]'/>
                      <img src={item.img4} className='w-[10rem] h-[20rem] mx-4'/>
                    </li>

                    <li className='flex'>
                      <img src={item.img5} className='w-[10rem] h-[20rem] m'/>
                      <img src={item.img6} className='w-[30rem] h-[20rem] mx-4'/>
                    </li>

                    </ul>
                })}
              </div>

              <div className='mt-10'>
                {infoThree11}

                <div className='font-bold font-nuova mt-10 space-y-4'>
                  <p className='flex'>
                  <FaCheck className='text-green-600 mx-4'/>
                    Ulticies sit semper leo dolor maeceanas.
                  </p>
                  <p className='flex'>
                  <FaCheck className='text-green-600 mx-4'/>
                    Magnis nam penatbus justo nec quis eget amet venenatis integer rutrum eleifend commodo tincidunt.
                  </p>
                  <p className='flex'>
                  <FaCheck className='text-green-600 mx-4'/>
                    Aenean nunc prtium lorem ullamcorper leo.
                  </p>
                  <p className='flex'>
                  <FaCheck className='text-green-600 mx-4'/>
                    Nec arcu ullamcorper lorem mus eu.
                  </p>
                  <p className='flex'>
                  <FaCheck className='text-green-600 mx-4'/>
                    Elit natoque mollis quisque.
                  </p>
                </div>

                <div className='mt-10'>
                {infoThree11}
                  <p className='font-bold text-4xl mt-10'>
                    Tincidunt veni tellus orci aenean consectetuer
                  </p>
                </div>

                <div className='mt-10'>
                  Sociis consequat adipiscing sit curabitur donec sem luctus cras natoque vulputate dolor eget dapibus. Nec vitae eros ullamcorper laoreet dapibus mus ac ante viverra. A aenean sit augue curabitur et parturient nisi sed enim.
                </div>
              
              </div>
          </div>

          {/* Social links on the right */}
        <div className='md:mr-[10rem] lg:mr-6'>
          <div className='tracking-widest'>
            SOCIAL LINKS
          </div>

          <div className='flex lg:space-x-20 space-x-4 '>
          <div>
          <a href="" ><MdFacebook className='text-blue-500 w-10 h-20'/></a>
            <p className='mt font-bold'>Facebook</p>
            <p className='mx-4'>96</p>
            <small className='mx-2'>Likes</small>
          </div>

          <div>
          <a href="" ><GrTwitter className='text-blue-400 w-10 h-20'/></a>
            <p className='font-bold'>Twitter</p>
            <p className='mx-4'>60</p>
            <small className='mx-'>Follows</small>
          </div>

          <div className='mt-6'>
          <a href="" ><FaInstagram className='bg-gradient-to-r from-blue-600 via-red-400 to-yellow-400 w-10 h-10  rounded-full text-white mb-4 ml-2'/></a>
            <p className='font-bold'>Instagram</p>
            <p className='mx-4'>20K</p>
            <small className='ml-[0.8rem]'>Fellows</small>
          </div>
          </div>

          <div className='flex lg:space-x-20 space-x-4 mt-10'>
          <div>
          <a href="" ><SiPinterest className='w-10 h-10 text-red-600  rounded-full'/></a>
            <p className='font-bold'>Pinterest</p>
            <p className='mx-4'>96</p>
            <small className='mx-2'>Likes</small >
          </div>

          <div>
          <a href="" ><FaYoutube className='w-20 h-10 text-red-600 white relative right-2'/></a>
            <p className='font-bold'>Youtube</p>
            <p className='mx-4'>60</p>
            <small  className='mx-'>Follows</small >
          </div>

          <div>
          <a href="" ><LiaSoundcloud className='w-10 h-10 bg-orange-400 text-white rounded-full'/></a>
            <p className='relative left-[-20px] font-bold'>Soundcloud</p>
            <p className='mx-2'>20K</p>
            <small className='relative right-2'>SoundCloud</small >
          </div>
          </div>

          <div className='flex mt-10 lg:space-x-20 space-x-4'>
          <div>
          <a href="" ><SiMedium className='w-[3rem] h-10 bg-black text-white text-[8px] rounded-full' /></a>
            <p className='font-bold'>Medium</p>
            <p className='mx-4'>96</p>
            <small  className='mx-2'>Likes</small >
          </div>

          <div className='relative left-4'>
          <a href="" ><FaVimeoV className='w-10 h-10 bg-blue-400 text-white rounded-full'/></a>
            <p className='font-bold'>Vimeo</p>
            <p className='mx-4'>60</p>
            <small  className='mx-'>Follows</small >
          </div>

          <div>
          <a href="" ><FaTelegramPlane  className='relative left-10 w-10 h-10 bg-blue-400 text-white rounded-full'/></a>
            <p className='relative left-[27px] font-bold'>Telegram</p>
            <p className='ml-[3rem]'>20K</p>
            <small className='ml-[2.6rem]'>Fellows</small >
          </div>
          </div>

          {/* Testimonial */}
          <div className='mt-20'>
            <div className='flex justify-center'>
            <div className=''>
              <span className='ml-4'>AUTHOR</span>
              <p className='mt-4 font-bold'>
                Luci Avetisyan
              </p>
              </div>
            </div>

            <div className='flex justify-center mt-10'>
              <div>
              <img src={image} className='rounded-full w-20 h-20 mx-20'/>
              <p>Luci vitae depibus rhoncus. Eget</p>
              </div>
            </div>
          </div>

      </div>

      </div>

      {/* Footer */}
          <div className='bg-black h-[10rem] text-white mt-20'>
            <div className='relative top-6 mx-20 ]'>
            Designed & Developed by <span className='text-2xl font-bold '>Sojay Lee</span>
            </div>
          </div>
    </>
  )
}

export default InfoThree