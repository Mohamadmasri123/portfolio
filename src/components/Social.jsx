import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa'
import{HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill}from 'react-icons/bs'



const Social = () => {
  const links=[
   { id:1,
    child:(   <>
      LinkedIn  <FaLinkedin size={100} className='pl-8' />
        </> ),
        href:"https://www.linkedin.com/in/mohamad-bassam-masri-0790b2294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        style:'rounded-tr-md',

    },
    { id:2,
      child:(   <>
        Github <FaGithub size={85} className='pl-11' />
          </> ),
          href:"https://github.com/",
      
  
      },
      { id:3,
        child:(   <>
         MailS <HiOutlineMail size={100} className='pl-12' />
            </> ),
            href:"https://mail.google.com/",
           
    
        },
        { id:4,
          child:(   <>
            Resume <BsFillPersonLinesFill size={80} className='pl-8' />
              </> ),
              href:"/resume.pdf",
              style:'rounded-br-md',
              download:true,
      
          },
          
  ];
  return (
    <div  className='flex flex-col  top-[35%] left-0 fixed'>
        <ul>
          {links.map(({id,child,href,style,download }) =>(
                                    <li key={id}  className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md  duration-300 bg-gray-500 '+' '+style}>
               <a href={href} className='flex justify-betweenn items-center w-full text-white ' download={download} target='_blank' >

              {child}   
                  </a> 
            </li>


          )
          
          )}
           
        </ul>
        </div>
  );
};

export default Social