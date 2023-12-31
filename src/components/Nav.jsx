import React, { useState } from 'react';
import {FaBars,FaTimes} from 'react-icons/fa'
const NavBar = () => {
    const [nav, setNav]= useState(false);

  const Links =[
   {
    id:1,
    link:"home",
    path:"",
  },
  {
    id:2,
    link:"About",
    path:"about",
  },
  {
    id:3,
    link:"Portfolio",
    path: "portfolio",
  },
  {
    id:4,
    link:"Experience",
    path:"experience",
  },
  {
    id:5,
    link:"Contact",
    path: "contact",
  },
];
  return (
    <div className='flex justify-between items-center w-full h-20 px-5 py-8 text-white bg-black fixed '>
        <div>
            <h1 className="text-4xl font-signature ml-2">Mohamad</h1>
        </div>
        <ul className='hidden   md:flex '>
          {
           Links.map(({id, link,path})=>(         
            <li key={id}  className='px-6 cursor-pointer capitalize font-medium text-gray-500 hover:scale-500 duration-200 '>    <a href={"#"+""+path}>{link}</a></li>
          

           ))}
           </ul>
           <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {
              nav ? <FaTimes size={30}/> : <FaBars size={30} />
            }
           </div>
           {nav &&(
               <ul className=' flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen  bg-gradient-to-b from-black to-gray-800 text-gray-500'>
               {
           Links.map(({id, link})=>(         
            <li key={id} className='px-4  cursor-pointer capitalize py-6 text-3xl'>{link}</li>


           ))}

          </ul>
        
           )



           }
       
    </div>
    
    
  );
};

export default NavBar;