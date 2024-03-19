import React from 'react'

const About = () => {
  return (
    <div id="about" className='w-[450px] lg:w-screen h-[1500px] bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500' >About</p>
            </div>
            <p className=' text-xl ml-20 leading-10'>
            Mohamad Masri is a dedicated computer programmer based in Tripoli, Der Ammar, Lebanon. With a strong educational background from Jinan University in Zaytoun/Abi-Samra, he holds a Bachelor  in Computer Science . Proficient in a wide array of programming languages and technologies, Mohamad excels in web development, showcasing expertise in HTML, CSS, JavaScript, Python, C#, PHP, Java, and React. Beyond his technical skills, he has embraced the role of a coding educator since May 23, 2022, demonstrating a passion for sharing knowledge and fostering learning within the programming community
            </p>
            <br />
            <p className=' text-xl ml-20'>
            You can reach him at mohamadbassammasri@gmail.com or contact him directly at +96171089546.
    </p>
        </div>


    </div>
  )
}

export default About