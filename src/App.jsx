import React from 'react'
import DotGroup from './scenes/DotGroup'
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from './scenes/Navbar'; 
import Landing from './scenes/Landing'
import { useState,useEffect } from 'react';
import SocialLinks from './scenes/SocialLinks';
import LineGradient from "./components/LineGradient";
import MySkills from './scenes/MySkills'
import Projects from './scenes/Projects';
import Contact from './scenes/Contact';
const App = () => {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens=useMediaQuery("(min-width:1060px)");
 const [isTopOfPage, setIsTopOfPage] = useState(true)

 useEffect(() => {
   const handleScroll=()=>{
    if(window.scrollY===0) setIsTopOfPage(true);
    if(window.scrollY!==0) setIsTopOfPage(false);
   }
   window.addEventListener('scroll',handleScroll);
   return ()=> window.removeEventListener('scroll',handleScroll);
 }, [])
 
 
  return (
    
    <div className='app bg-deep-blue'>
      
      <Navbar
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
     isTopOfPage={isTopOfPage}
     />
     <div className='w-5/6 mx-auto md:h-full '>

      {

        isAboveMediumScreens && (
          <DotGroup
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          
          />
          
        )
      }
      <Landing setSelectedPage={setSelectedPage}/>
     </div>
     <LineGradient/>
      <div className="w-5/6 mx-auto md:h-full">
<MySkills/>
<div className="w-5/6 mx-auto">
  <Projects/>
</div>
<div className="w-5/6 mx-auto md:h-full">
<Contact/>

</div>
      </div>
    </div>
  )
}

export default App