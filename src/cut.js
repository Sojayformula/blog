import React, {useEffect, useState} from 'react'
import axios from 'axios'
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";

import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";

import Group3 from "../assets/Group3.png";
import Group4 from "../assets/Group4.png";
import Group1 from "../assets/Group1.png";
import Group5 from "../assets/Group5.png";

import greenOcean from "../assets/greenOcean.png"
import { format } from 'date-fns';
import { CiShare2 } from "react-icons/ci";

const data = [
{
id: 1,
title: "Integer Maeconas Eget",
name: "Sojay Lee",
text: "All other text here",
img: image1,
img2: image4,
img3: image7,
img7: image7,
  review: "Solid performance and great value!",
},
{
id: 2,
title: "Integer Maeconas Eget",
name: "Sojay Lee",
text: "All other text here",
img: image2,
img2: image5,
img3: image8,
img7: image7,
  review: "Solid performance and great value!",
},
{
id: 3,
title: "Integer Maeconas Eget",
name: "Sojay Lee",
text: "All other text here",
img: image3,
img2: image6,
img3: image9,
img7: image7,
  review: "Solid performance and great value!",
}
];

function Info() {

const today = new Date();
const formattedDate = format(today, 'do MMMM yyyy');

const [input, setInput] = useState('');
const [APIData, setAPIData] = useState([]);


useEffect(() => {
  const fetchData = async () => {
    try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    setAPIData(response.data);
    }catch (error){
    console.error('Error fetching the weather data', error);
    }
  };
  fetchData();
}, []);


const handleChange = (e) => {
  setInput(e.target.value)
}



return (
<div>
{APIData.map((items, index) => {
return <div className='flex flex-col lg:flex-row md:mx-20 mx-0'>
<div key={index} className="items-center mb-4 mx-[5rem] my-8">
  <img src={items.img} alt={`Image ${items.id}`} className="w-[20rem] md:h-[13.7rem] mr-4 " />
  <p className='font-bold mb-0 text-2xl my-4'>{items.title}</p>

  <span className='flex space-y-9'>
  <img src={items.img7} alt={`Image ${items.id}`} className="w-8 h-8 rounded-full mr-4 my-8 mb-1" />
  <p className='mx-[-10px] text-gray-500'>{items.name} {formattedDate}<button className='text-2xl mx-2 align-[-6px]'><CiShare2 /></button></p>
  <small className='text-gray-500'>1k share</small>
  </span>
  

  <p className='mb-6 mt-4 text-gray-500'>{items.text}</p>
  <p>
  <button className='font-black text-sm/[20px] underline decoration-gray-500 underline-offset-8 '>View post</button>
  </p>
</div>

<div key={items.id} className="items-center mb-4 mx-20 my-8">
  <img src={items.img2} alt={`Image ${items.id}`} className="w-[20rem] md:h-[13.7rem] mr-4 " />
  <p className='font-bold mb-0 text-2xl my-4'>{items.title}</p>

  <span className='flex space-y-9'>
  <img src={items.img7} alt={`Image ${items.id}`} className="w-8 h-8 rounded-full mr-4 my-8 mb-1" />
  <p className='mx-[-10px] text-gray-500'>{items.name} {formattedDate}<button className='text-2xl mx-2 align-[-6px]'><CiShare2 /></button></p>
  <small className='text-gray-500'>1k share</small>
  </span>

  <p className='mb-6 mt-4 text-gray-500'>{items.text}</p>
  <p>
  <button className='font-black underline decoration-gray-500 underline-offset-8'>View post</button>
    </p>
</div>


<div key={items.id} className="items-center mb-4 mx-20 my-8">
  <img src={items.img3} alt={`Image ${items.id}`} className="w-[20rem] md:h-[13.7rem] mr-4"/>
  <p className='font-bold mb-0 text-2xl my-4'>{items.title}</p>

  <span className='flex space-y-9'>
  <img src={items.img7} alt={`Image ${items.id}`} className="w-8 h-8 rounded-full mr-4 my-8 mb-1" />
  <p className='mx-[-10px] text-gray-400'>{items.name} {formattedDate}<button className='text-2xl mx-2 align-[-6px]'><CiShare2 /></button></p>
  <small className='text-gray-500'>1k share</small>
  </span>

  <p className='mb-6 mt-4 text-gray-400'>{items.text}</p>
  <p>
  <button className='font-black underline decoration-gray-400 underline-offset-8'>View post</button>
    </p>
</div>
</div>
})}

<div className='flex items-center justify-center'>
<button className='border-t-4 border-r-4 border-l-4 text-sm py-2 px-10 my-10'>Button</button>
</div>

<div className='mx-[10rem]'>
<img src={greenOcean} className=''/>

<div className='md:font-semibold relative top-[-6.5rem] md:top-[-19rem] text-white'>
<p className='flex justify-center'>Country</p>

<p className='flex justify-center'>
The trip will come off as schedule so please take note
</p>

<p  className='flex justify-center'>
  Wonderful sites
</p>

<div className='flex justify-center items-center top-[40px] relative'>
  <input
  type="text"
  placeholder="Enter text"
  value={input}
  onChange={handleChange} 
  />
</div>
</div>
</div>

<div className='md:mx-[10rem] mx-10 w-[19rem]'>
<p className='font-black'>You are welcome</p>
<p>We offer trips to all countries, please contact us now for your safe trips. Thank you</p>
</div>

<div className='flex md:flex-row flex-col w-[19rem] gap-10 md:mx-[10rem] mx-10 my-6'>
  <img src={Group3} />
  <img src={Group4} />
  <img src={Group1} />
  <img src={Group5} />
</div>



</div>
)
}

export default Info