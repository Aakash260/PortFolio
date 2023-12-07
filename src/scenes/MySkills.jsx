import React from 'react'
import LineGradient from '../components/LineGradient'
import useMediaQuery from '../hooks/useMediaQuery'
import {motion} from 'framer-motion'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
const MySkills = () => {
    const techs=[
        {
    id:1,
    src:html,
    title:'HTML',
    style:'shadow-orange-500'
        },
        {
    id:2,
    src:css,
    title:'CSS',
    style:'shadow-indigo-400'
        },
        {
    id:3,
    src:javascript,
    title:'JAVASCRIPT',
    style:'shadow-amber-500'
        },
        {
    id:4,
    src:reactImage,
    title:'REACT',
    style:'shadow-indigo-400'
        },
        {
    id:5,
    src:nextjs,
    title:'NEXTJS',
    style:'shadow-gray-500'
        },
        {
    id:6,
    src:github,
    title:'GITHUB',
    style:'shadow-gray-800'
        },
        {
    id:7,
    src:tailwind,
    title:'TAILWIND',
    style:'shadow-indigo-300'
        },
     ]
 const isAboveMediumScreens=useMediaQuery("(min-width:1060px)")


 return(
    <section id='skills' className='pt-10 pb-24'>
<div className='md:flex md:justify-between md:gap-16 md:mt-32' >
<motion.div
className='md:w-1/3'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
    <p className='font-playfair font-semibold text-4xl mb-5'></p>
My<span className='text-red text-4xl'>SKILLS</span>
<LineGradient width='w-1/3'/>
<p className='mt-10 mb-7'>
My skill set revolves around the foundation of web development: HTML, CSS, and JavaScript. <br/> I'm well-versed in React, a powerful JavaScript library that enables me to build dynamic and responsive web applications that users love.<br/>In addition I leverage the efficiency and elegance of Tailwind CSS to expedite development without compromising on design quality.
</p>
</motion.div>

<div className="mt-16 md:mt-0">
 {isAboveMediumScreens?(
    <div
    className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 
    before:w-full  md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
  >
    <img
      alt="profile"
      className="z-10"
      src="assets/skills-image.png"
    />
  </div>
 ):
 (
    <img
    alt="profile"
    className="z-10"
    src="assets/skills-image.png"
  />
 )

 }
</div>
</div>
{/* //skills */}
 

<motion.div
className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mt-20 '
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
            {techs.map(({id,src,title,style})=>(

<div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
    <img src={src} alt="" srcSet="" className='w-20 mx-auto' />
   <p className='mt-4'>{title}</p>
    </div>
))}
            </motion.div>
 
    </section>
 )
}

export default MySkills