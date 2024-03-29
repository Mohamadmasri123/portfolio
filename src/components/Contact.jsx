import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='w-[450px] lg:w-screen h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white  ' >
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>
            <div className='flex items-center justify-center'>
                <form action="https://getform.io/f/7ba69b4d-0fbb-4272-8013-753731d96bda" method='POST' className='flex flex-col w-full md:w-1/2 '>
                    <input type="text"name='name' placeholder='Enter your Name' className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <input type="text"name='email'placeholder='Enter your Email'className='  my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <textarea name="message" placeholder='Enter you message' id=""  rows="10" className='p-2 bg-transparent border-2 focus:outline-none'></textarea>
                    <button className='text-black bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110  duration-300 '>Submit</button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact