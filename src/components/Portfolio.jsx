import React from 'react'
import prjPlat from "./../assets/prj-plat.png"
import prjProfile from "./../assets/prj-profile.png"
import prjRealestate from "./../assets/prj-RealEstate.jpeg"
import prjRestau from "./../assets/prj-Restau.png"
import prjShop from "./../assets/prj-shop.png"
import prjSustainble from "./../assets/prj-sustainble.png"







const Portfolio = () => {
  const portfolios =[
    {
      id:1,
      src:prjPlat
    },
    {
      id:2,
      src:prjProfile
    },
    {
      id:3,
      src:prjRealestate,
 
    },
    {
      id:4,
      src:prjRestau
    },
    {
      id:5,
      src:prjShop
    },
    {
      id:6,
      src:prjSustainble
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
            portfolios.map(({id,src})=>(
              <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt=""  className='rounded-md duration=200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
              </div>
              

            ))
            }</div>
          

 
      </div>
    </div>
  )
}

export default Portfolio