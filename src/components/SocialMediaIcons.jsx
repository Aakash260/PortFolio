import React from 'react'

const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
        <a className='hover:opacity-50 transition duration-500' href="https://www.linkedin.com/in/aakash-nirwan-208865167/" target='_blank' rel='noreferrer'>
            <img src="../assets/linkedin.png" alt="linked-link" />
        </a>
        <a className='hover:opacity-50 transition duration-500' href="https://github.com/Aakash260" target='_blank' rel='noreferrer'>
            <img className='w-8' src="https://bitemycoin.com/wp-content/uploads/2018/06/GitHub-Logo.png" alt="linked-link" />
        </a>
        <a className='hover:opacity-50 transition duration-500' href="https://www.instagram.com/akash_nirwan26/" target='_blank' rel='noreferrer'>
            <img src="../assets/instagram.png" alt="linked-link" />
        </a>
        <a className='hover:opacity-50 transition duration-500' href="https://www.facebook.com/aakash.nirwan.52" target='_blank' rel='noreferrer'>
            <img src="../assets/facebook.png" alt="linked-link" />
        </a>
        
    </div>
  )
}

export default SocialMediaIcons