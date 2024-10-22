      import React, {useState} from 'react'
      import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
      import 'typeface-roboto';
      import { MdOutlineFacebook } from "react-icons/md";
      import { FaTwitter } from "react-icons/fa6";
      import { GrInstagram } from "react-icons/gr";
      import { IoLogoYoutube } from "react-icons/io";

      import image1 from "../assets/image5.png";
      import image2 from "../assets/image2.png";
      import image6 from "../assets/image6.png";
      import Group4 from "../assets/Group4.png";
      import Group3 from "../assets/Group3.png";
      import Group8 from "../assets/Group8.png";
      import image5 from "../assets/image5.png";
      import image4 from "../assets/image4.png";

      import image7 from "../assets/image7.png";
      // import image8 from "../assets/image8.png";
      // import image9 from "../assets/image9.png";




 const tabs = [
  {
  id: 1,
  title: "Integer Maeconas Eget",
  name: "Sojay Lee",
  text: "All other text here",
  img: image1,
  img2: image2,
  img3: Group4,
  img4: Group3,
  img5: image5,
  img6: image6,
  img7: image7,
  img8: Group8,
  img9: image4,
    review: "Solid performance and great value!",
  }, 
  ]




function ReactTabs() {

  
  return (

    <div className='font-Europa-Bold'>
      <Tabs className='mx-[10rem] invisible md:visible'>
  <TabList>
    <Tab>Category name</Tab>
    <Tab>Category name</Tab>
    <Tab>Category name</Tab>
    <Tab>Category name</Tab>
    <Tab>Category name</Tab>
  </TabList>
  
  <div className='container flex justify-between'>
    <div className='border mt-10 h-[34.4rem] w-[50rem]'>
        {tabs.map((item, index) => (
        <TabPanels key={index} className='flex space-x-20 divide-x'>

          
        <TabPanel  className='flex divide-x'>
       <Tabs>
      <div className='flex divide-x h-[33rem]'>
      { tabs.map((item, index) => (
  <TabPanels key={index} className='mt-0'>
  <TabPanel>
        <div>
          <img src={item.img} className='h-[15rem]'/>
          <small className='mt-6'>1 month Ago</small>
          <p className='mt-4 font-bold'>{item.title}</p>
          <p>{item.text}</p>
          <button className='font-bold underline mt-6'>View Post</button>
          </div>
      </TabPanel>

      <TabPanel>
          <div>
          <img src={item.img2} className='h-[15rem]'/>
          <small className='mt-6'>1 month Ago</small>
          <p className='mt-4 font-bold'>{item.title}</p>
          <p>{item.text}</p>
          <button className='font-bold underline mt-6'>View Post</button>
          </div>
      </TabPanel>

      <TabPanel>
          <div>
          <img src={item.img7} className='h-[15rem]'/>
          <small className='mt-6'>1 month Ago</small>
          <p className='mt-4 font-bold'>{item.title}</p>
          <p>{item.text}</p>
          <button className='font-bold underline mt-6'>View Post</button>
          </div>
      </TabPanel>
      </TabPanels>
      ))}
      


        <div>
    <TabList className='border mt-1 w-[25rem]'>
    <ul>
      <li>
    <Tab>
        <img src={item.img} className='w-[9rem] h-[8rem]'/>
        <div className='flex flex-col mt-[-4rem] mx-1'>
        <span className='font-bold'>{item.title}:</span>
        <p>{item.text}</p>
        <small className='mb-2'>1 month ago</small>
        </div>
      </Tab>
    </li>
    <li>
    <Tab>
       <img src={item.img2} className='w-[9rem] h-[8rem]'/>
        <div className='flex flex-col mt-[-4rem] mx-1'>
        <span className='font-bold'>{item.title}:</span>
        <p>{item.text}</p>
        <small className=' mb-2'>1 month ago</small>
        </div>
      </Tab>
    </li>
    <li>
        <Tab>
            <img src={item.img7} className='w-[9rem] h-[8rem]'/>
            <div className='flex flex-col mt-[-6rem] mx-1'>
            <span className='mt-8 font-bold'>{item.title}:</span>
            <p>{item.text}</p>
            <small className='mb-2'>1 month ago</small>
            </div>
          </Tab>
        </li>
      </ul>
    </TabList>
    </div>
      </div>
      </Tabs>
    </TabPanel>

   

     

     <TabPanel className='flex divide-x'>
     <Tabs>
      <div className='flex divide-x h-[33rem]'>
      <>
  { tabs.map((item, index) => (
  <TabPanels key={index} className='mt-0'>
  <TabPanel>
         <div>
          <img src={item.img9} className=' h-[16rem]'/>
          <small className='mt-6'>1 month Ago</small>
          <p className='mt-4 font-bold'>{item.title}</p>
          <p>{item.text}</p>
          <button className='font-bold underline mt-6'>View Post</button>
          </div>
      </TabPanel>

      <TabPanel>
          <div>
          <img src={item.img3} className='h-[16rem]'/>
          <small className='mt-6'>1 month Ago</small>
          <p className='mt-4 font-bold'>{item.title}</p>
          <p>{item.text}</p>
          <button className='font-bold underline mt-6'>View Post</button>
          </div>
      </TabPanel>

      <TabPanel>
          <div>
          <img src={item.img6} className='h-[15rem]'/>
          <small className='mt-6'>1 month Ago</small>
          <p className='mt-4 font-bold'>{item.title}</p>
          <p>{item.text}</p>
          <button className='font-bold underline mt-6'>View Post</button>
          </div>
      </TabPanel>
      </TabPanels>
      ))}
      </>


        <div>
    <TabList className='border mt-1 w-[25rem]'>
    <ul>
      <li>
    <Tab>
        <img src={item.img9} className='w-[9rem] h-[8rem]'/>
        <div className='flex flex-col mt-[-4rem] mx-1'>
        <p className='font-bold'>{item.title}:</p>
        <p>{item.text}</p>
        <small className=' mb-2'>1 month ago</small>
        </div>
      </Tab>
    </li>
    <li>
    <Tab>
       <img src={item.img3} className='w-[9rem] h-[8rem]'/>
        <div className='flex flex-col mt-[-4rem] mx-1'>
        <p className='font-bold'>{item.title}:</p>
        <p>{item.text}</p>
        <small className='mb-2'>1 month ago</small>
        </div>
      </Tab>
    </li>
    <li>
    <Tab>
        <img src={item.img6} className='w-[9rem] h-[8rem]'/>
        <div className='flex flex-col mt-[-6rem] mx-1'>
        <p className='mt-8 font-bold'>{item.title}:</p>
        <p>{item.text}</p>
        <small className='mb-2'>1 month ago</small>
        </div>
      </Tab>
    </li>
    </ul>
  </TabList>
  </div>
      </div>
      </Tabs>
    </TabPanel>

    <TabPanel className='flex divide-x'>
    <Tabs>
      <div className='flex divide-x h-[33rem]'>
      <>
  { tabs.map((item, index) => (
  <TabPanels key={index} className='mt-0'>
  <TabPanel>
      <div>
        <img src={item.img} className='h-[15rem]'/>
        <small className='mt-6'>1 month Ago</small>
        <p className='mt-4 font-bold'>{item.title}</p>
        <p>{item.text}</p>
        <button className='font-bold underline mt-6'>View Post</button>
        </div>
      </TabPanel>

      <TabPanel>
        <div>
        <img src={item.img2} className='h-[15rem]'/>
        <small className='mt-6'>1 month Ago</small>
        <p className='mt-4 font-bold'>{item.title}</p>
        <p>{item.text}</p>
        <button className='font-bold underline mt-6'>View Post</button>
        </div>
      </TabPanel>

      <TabPanel>
        <div>
        <img src={item.img7} className='h-[15rem]'/>
        <small className='mt-6'>1 month Ago</small>
        <p className='mt-4 font-bold'>{item.title}</p>
        <p>{item.text}</p>
        <button className='font-bold underline mt-6'>View Post</button>
        </div>
      </TabPanel>
      </TabPanels>
      ))}
      </>


        <div>
    <TabList className='border mt-1 w-[25rem]'>
    <ul>
      <li>
    <Tab>
        <img src={item.img} className='w-[9rem] h-[8rem]'/>
        <div className='flex flex-col mt-[-4rem] mx-1'>
        <span className='mr-[rem] font-bold'>{item.title}:</span>
        <p>{item.text}</p>
        <small className='mb-2'>1 month ago</small>
        </div>
      </Tab>
    </li>
    <li>
    <Tab>
      <img src={item.img2} className='w-[9rem] h-[8rem]'/>
      <div className='flex flex-col mt-[-4rem] mx-1'>
      <span className='font-bold'>{item.title}:</span>
      <p>{item.text}</p>
      <small className='mb-2'>1 month ago</small>
      </div>
     </Tab>
    </li>
    <li>
    <Tab>
      <img src={item.img7} className='w-[9rem] h-[8rem]'/>
      <div className='flex flex-col mt-[-6rem] mx-1'>
      <p className='mt-8 font-bold'>{item.title}:</p>
      <p>{item.text}</p>
      <small className='mb-2'>1 month ago</small>
      </div>
    </Tab>
    </li>
    </ul>
  </TabList>
  </div>
      </div>
      </Tabs>
    </TabPanel>
    <TabPanel className='flex divide-x'>

    <Tabs>
      <div className='flex divide-x h-[33rem]'>
      <>
  { tabs.map((item, index) => (
  <TabPanels key={index} className='mt-0'>
     <TabPanel>
        <div>
        <img src={item.img9} className='h-[15rem]'/>
        <small className='mt-6'>1 month Ago</small>
        <p className='mt-4 font-bold'>{item.title}</p>
        <p>{item.text}</p>
        <button className='font-bold underline mt-6'>View Post</button>
        </div>
      </TabPanel>

      <TabPanel>
        <div>
        <img src={item.img7} className='h-[15rem]'/>
        <small className='mt-6'>1 month Ago</small>
        <p className='mt-4 font-bold'>{item.title}</p>
        <p>{item.text}</p>
        <button className='font-bold underline mt-6'>View Post</button>
        </div>
      </TabPanel>

      <TabPanel>
        <div>
        <img src={item.img6} className='h-[15rem]'/>
        <small className='mt-6'>1 month Ago</small>
        <p className='mt-4 font-bold'>{item.title}</p>
        <p>{item.text}</p>
        <button className='font-bold underline mt-6'>View Post</button>
        </div>
      </TabPanel>
      </TabPanels>
      ))}
      </>


        <div>
    <TabList className='border mt-1 w-[25rem]'>
    <ul>
      <li>
    <Tab>
      <img src={item.img9} className='w-[9rem] h-[8rem]'/>
      <div className='flex flex-col mt-[-4rem] mx-1'>
      <p className='font-bold'>{item.title}:</p>
      <p >{item.text}</p>
      <small className='mb-2'>1 month ago</small>
      </div>
    </Tab>
    </li>
    <li>
    <Tab>
      <img src={item.img7} className='w-[9rem] h-[8rem]'/>
      <div className='flex flex-col mt-[-4rem] mx-1'>
      <p className='font-bold'>{item.title}:</p>
      <p>{item.text}</p>
      <small className='mb-2'>1 month ago</small>
      </div>
    </Tab>
    </li>
    <li>
    <Tab>
      <img src={item.img6} className='w-[9rem] h-[8rem]'/>
      <div className='flex flex-col mt-[-6rem] mx-1'>
      <p className='mt-8 font-bold'>{item.title}:</p>
      <p>{item.text}</p>
      <small className='mb-2'>1 month ago</small>
      </div>
    </Tab>
    </li>
    </ul>
  </TabList>
  </div>
      </div>
      </Tabs>
    </TabPanel>

    <TabPanel className='flex divide-x'>
    <Tabs>
      <div className='flex divide-x h-[33rem]'>
      <>
  { tabs.map((item, index) => (
  <TabPanels key={index} className='mt-0'>
     <TabPanel>
        <div>
        <img src={item.img7} className='-[30rem] h-[15rem]'/>
        <small className='mt-6'>1 month Ago</small>
        <p className='mt-4 font-bold'>{item.title}</p>
        <p>{item.text}</p>
        <button className='font-bold underline mt-6'>View Post</button>
        </div>
      </TabPanel>

      <TabPanel>
        <div className='container'>
        <img src={item.img} className='h-[15rem]'/>
        <small className='mt-6'>1 month Ago</small>
        <p className='mt-4 font-bold'>{item.title}</p>
        <p>{item.text}</p>
        <button className='font-bold underline mt-6'>View Post</button>
        </div>
      </TabPanel>

      <TabPanel>
        <div>
        <img src={item.img6} className='h-[15rem]'/>
        <small className='mt-6'>1 month Ago</small>
        <p className='mt-4 font-bold'>{item.title}</p>
        <p>{item.text}</p>
        <button className='font-bold underline mt-6'>View Post</button>
        </div>
      </TabPanel>
      </TabPanels>
      ))}
      </>


        <div className='container'>
    <TabList className='border mt-1 w-[25rem]'>
    <ul>
      <li>
    <Tab>
      <img src={item.img7} className='w-[9rem] h-[8rem]'/>
      <div className='flex flex-col mt-[-4rem] mx-1'>
      <span className='mr-[rem] font-bold'>{item.title}:</span>
      <p >{item.text}</p>
      <small className='mb-2'>1 month ago</small>
      </div>
      </Tab>
    </li>
    <li>
    <Tab>
    <img src={item.img} className='w-[9rem] h-[8rem]'/>
      <div className='flex flex-col mt-[-4rem] mx-1'>
      <p className='font-bold'>{item.title}:</p>
      <p>{item.text}</p>
      <small className=' mb-2'>1 month ago</small>
      </div>
      </Tab>
    </li>
    <li>
    <Tab>
    <img src={item.img6} className='w-[9rem] h-[8rem]'/>
      <div className='flex flex-col mt-[-6rem] mx-1'>
      <p className='mt-8 font-bold'>{item.title}:</p>
      <p className=''>{item.text}</p>
      <small className='mb-2'>1 month ago</small>
      </div>
      </Tab>
    </li>
    </ul>
  </TabList>
  </div>
      </div>
      </Tabs>
    </TabPanel>
  </TabPanels>
  ))}
  </div>


  <div className='border mt-10'>
{tabs.map((item, index) => {
 return <div key={index}>

  <div className='space-y-10 mt-8'>
  <div className='flex'>
     <img src={item.img5} className='w-[9rem] h-[8rem]' />
    <p>{item.title}</p>
    </div>

    <div className='flex'>
     <img src={item.img4} className='w-[9rem] h-[8rem]' />
    <p>{item.title}</p>
    </div>

    <div className='flex'>
     <img src={item.img6} className='w-[9rem] h-[8rem]' />
    <p>{item.title}</p>
    </div>
    </div>
    </div>
    })}
  </div>

</div>
</Tabs>

<div className='flex justify-between bg-black md:mt-[10rem] h-[10rem] text-white mt-[-40rem] md:visible invisible '>

  <div className='mx-4 md:mx-20 mt-[4rem] '>
  Designed & Developed by <span className='text-[1.5rem] font-bold'>Sojay Lee </span>
  </div>

  <div  className=''>
    <div className='flex mx-20 space-x-10 mt-[4rem] '>
      <div>
      <a href='#'><MdOutlineFacebook className='text-[1.5rem]'/></a>
      <p>29</p>
      </div>

      <div>
      <a href='#'><FaTwitter className='text-[1.5rem]'/></a>
      <p>70K</p>
      </div>

      <div>
      <a href='#'><GrInstagram className='text-[1.5rem]'/></a>
      <p>40</p>
      </div>

      <div>
      <a href='#'><MdOutlineFacebook className='text-[1.5rem]'/></a>
      <p>13K</p>
      </div>

      <div>
      <a href='#'><IoLogoYoutube className='text-[1.5rem]'/></a>
      <p>168K</p>
      </div>

    </div>
  </div>
  </div>

</div>


  )
}

export default ReactTabs


//font-Europa-Bold invisible md:visible my-20