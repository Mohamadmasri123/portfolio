import React from 'react'

import html from "./../assets/html.png"
import css  from "./../assets/css.png"
import react  from "./../assets/react.png"
import py from "./../assets/py.png"
import java from "./../assets/java.png"
import tailwindcss from "./../assets/tailwindCss.png"
import git from "./../assets/github.png"
import js from "./../assets/js.png"
import c from "./../assets/c++.png"


const Experience = () => {
  const techs=[
    {
    id:1,
    src:html,
    title:'html',
    style:"shadow-orange-500"
  },  
  {
    id:2,
    src:css,
    title:'css',
    style:"shadow-blue-500"
  },
    {
    id:3,
    src:js,
    title:'JS',
    style:"shadow-yellow-300"
  },  
  {
    id:4,
    src:react,
    title:'react',
    style:"shadow-blue-300"
  }, 
   {
    id:5,
    src:tailwindcss,
    title:'tailwindCss',
    style:"shadow-sky-500"
  }, 
   {
    id:6,
    src:py,
    title:'py',
    style:"shadow-yellow-600"
  }, 
   {
    id:7,
    src:java,
    title:'java',
    style:"shadow-orange-300"
  },  {
    id:8,
    src:git,
    title:'gitHub',
    style:"shadow-black-500"
  },  {
    id:9,
    src:c,
    title:'c++',
    style:"shadow-blue-300"
  },


]
    
  



  return (
    <div id="experience" className='bg-gradient-to-b from-black to-black w-[450px] lg:w-screen h-full  md:h-full  pb-8 pt-10'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center text-white w-full h-full '>
        <div >
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>Experience</p>
        <p className='py-6'>These are the technologies I have worked with</p>
        </div>
        

      

        <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
{
          techs.map(({id,src,title,style})=>(

          <div key={id} className={'shadow-md shadow-gray-600 rounded-lg'+" "+style} >
          <img src={src} alt=""  className='w-20 mx-auto'/>
          <p className='flex items-center justify-center '>{title}</p>
        </div>
           ))
        } </div>
      </div>

    </div>
  )
}

export default Experience