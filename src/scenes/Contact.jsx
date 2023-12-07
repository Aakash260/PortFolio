import React from 'react'
 import {motion} from 'framer-motion'
 import { CiFaceSmile} from 'react-icons/ci'
import LineGradient from '../components/LineGradient'
const Contact = () => {
  return (
    <motion.div 
    className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full mt-20 '
    id="contact"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    variants={{
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 },
    }}
    
    >
<div>
    <div>
    <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-white'>Contact</p>
    <p className='py-6 text-white text-2xl flex items-center'>I'm just one message away <CiFaceSmile className='ml-4'/></p>
    </div>
    <div className='flex justify-center items-center'>
    <form action="https://getform.io/f/9ad47b75-5e8c-4800-ab9a-37cf267d7120" method='POST' className='flex flex-col w-full md:w-1/2'>
    <input type="text" name='name' placeholder='Enter Your Name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
    <input type="text" name='email' placeholder='Enter Your Email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
    <textarea name="message" rows="10" placeholder="Enter your message" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
    <button className='text-white bg-gradient-to-b from-red to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-200'>Let's Talk</button>
    </form>
    </div>
    </div>

        </motion.div>
  )
}

export default Contact