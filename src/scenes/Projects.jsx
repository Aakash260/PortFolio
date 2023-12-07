import React from 'react'
 import {motion} from 'framer-motion'
import LineGradient from '../components/LineGradient'
 import Ecommerce from '../assets/portfolio/E-commerce.png'
 import Youtube from '../assets/portfolio/youtube.png'
 import Swiggy from '../assets/portfolio/swiggy.png'
 import Blog from '../assets/portfolio/portfolio.png'
 import Showcase from '../assets/portfolio/showcase.png'
 import ChatUp from '../assets/portfolio/ChatUp.png'
const Projects = () => {
  const portfolios =[
    {
id:1,
src: Ecommerce,
Video:"https://www.linkedin.com/feed/update/urn:li:activity:7104298489005694976/?originTrackingId=7Y6a2zuCQ0a2MiC2p6KBDw%3D%3D",
Code:'https://github.com/Aakash260/website',
Live:'https://aakash-ecom.netlify.app/'
},
    {
id:2,
src:Youtube,
Video:"https://www.linkedin.com/feed/update/urn:li:activity:7095046120338317312/?originTrackingId=ZIN7NKQrTUuk4hF4SakYTw%3D%3D",
Code:'https://github.com/Aakash260/cloneyoutube',
Live:'https://react-youtube-nine.vercel.app/'
},
    {
id:3,
src:Swiggy,
Video:"https://www.linkedin.com/feed/update/urn:li:activity:7093560416676515840/?originTrackingId=FFMmT%2FurRZuxQmIFfUWbyQ%3D%3D",
Code:'https://github.com/Aakash260/react-opti',
Live:'https://react-opti.vercel.app/'
},
    {
id:4,
src:Blog,
Video:"https://www.linkedin.com/feed/update/urn:li:activity:7101178243642241025/?originTrackingId=5v5ym3sgTZmlWAlxwnF4wQ%3D%3D",
Code: 'https://github.com/Aakash260/tailwindbasics',
Live:'https://bloggingwwebsite.netlify.app'
},
    {
id:5,
src:Showcase,
Video:"https://www.linkedin.com/feed/update/urn:li:activity:7086944846875099136/?originTrackingId=88xMr%2BN8Q6OsJYZq0ry8yQ%3D%3D",
Code:'https://github.com/Aakash260/javascript',
Live:'https://javascript-mu-seven.vercel.app/'
},
    {
id:6,
src:ChatUp,
Video: "",
Code:'https://github.com/Aakash260/chatapp-basic',
Live:'https://chatdown.netlify.app/'
},
 
]
  return (
            <motion.div 
            className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '
            id="projects"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
            
            >
                <div className='pb-8' >
                    <p className=' font-bold text-white w-fit mt-10 '>My<span className='text-red text-4xl'>Projects</span></p>
                    <p className='text-2xl text-white'>Check out some of my work</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
                {portfolios.map(({id,src,Video,Code,Live})=>(

                    <div key={id} className=' shadow-md shadow-gray-500 rounded-lg '>
                            <img src={src} alt="project-img" className='rounded-md duration-200 hover:scale-105 h-40' />
                            <div className=' flex items-center justify-center gap-2'>
                                <button className=' py-3 border-r-2 pr-1 duration-200 hover:scale-105 text-xl font-bold'><a href={Live} target='_blank'>Live</a></button>
                                <button className=' py-3 border-r-2 pr-1 duration-200 hover:scale-105 text-xl font-bold'><a href={Code} target='_blank'>Code</a></button>
                                <button className=' py-3  duration-200 hover:scale-105 text-sm font-bold text-gray-500/[0.5] '><a href={Video} target='_blank'>{Video?"Presentation-Video":"Not-Available"}</a></button>
                            </div>
                        </div>
                    ))}  
                    </div>
            </motion.div>
  )      
}

export default Projects