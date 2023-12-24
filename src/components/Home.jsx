import React from 'react';
import mee from "./../assets/mee.jpg";
import {MdOutlineKeyboardArrowRight} from  "react-icons/md"

const Home = () => {
  return (
    <div id="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800 ">
      <div className='text-white max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4   md:flex-row '>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            I'm a full stack Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            I have 1 years of experience building website.
            Currently,I live to work on web application usin technologies like 
            React , tailwind , NextJs.
          </p>
          <div>
            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              <a href="#portfolio">Portfolio</a>
             <span className='group-hover:rotate-90 duration-300 '>
             <MdOutlineKeyboardArrowRight size={25} className='ml-1'/></span> 
            </button>
          </div>
         
        </div> 
        <div className='flex flex-col justify-center '>
            <img src={mee} alt="myProfile" className='rounded-2xl mx-auto w-2/5 h-2/4  md:w-full' />
          </div>
      </div>
   
    </div>
  )
}

export default Home;