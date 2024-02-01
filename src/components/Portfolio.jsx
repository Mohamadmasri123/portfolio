import React from 'react'
import travel from "./../assets/prj-travel.png"
import prjRestau from "./../assets/prj-Restau.png"
import ecommercefruit from "./../assets/prj-fruit.png"
import prjblogs from "./../assets/prjblog.png"
import instaclone from"./../assets/insta-home.png"
import shop from "./../assets/prjshop.png"






const Portfolio = () => {
  const portfolios =[
    {
      id:1,
      src:travel,
      path:" https://travels-delta.vercel.app/",
      code:"https://github.com/Mohamadmasri123/travels"
    },
    {
      id:2,
      src:prjRestau,
      path: " https://travels-delta.vercel.app/",
      code:"https://github.com/Mohamadmasri123/Restaurant"
    },
    {
      id:3,
      src:ecommercefruit,
      path: " https://ecommerce-fruits-iota.vercel.app/",
      code:"https://github.com/Mohamadmasri123/ecommerce-fruits"
 
    },
    {
      id:4,
      src:prjblogs,
      path:" https://blog-nine-omega-15.vercel.app/ ",
      code:"https://github.com/Mohamadmasri123/blog"
    },
    {
      id:5,
      src:instaclone,
      path:" https://insta-clone-beta-three.vercel.app/",
      code:"https://github.com/Mohamadmasri123/insta-clone"
    },
    {
      id:6,
      src:shop,
      path:"https://store-one-snowy.vercel.app/",
      code: "https://github.com/Mohamadmasri123/store"
    },

  ]
  
  return (
    <div id="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full h-full text-white md:h-full '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
        <div className='pb-8 '>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6 '>Check out some of my work right here </p>
        </div>
         

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0' > 
            {
            portfolios.map(({id,src,path,code})=>(
              <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt=""  className='rounded-md duration=200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'> <a href={path}>Demo</a> </button>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={code}>Code</a></button>
                </div>
              </div>
              

            ))
            }</div>
          

 
      </div>
    </div>
  )
}

export default Portfolio