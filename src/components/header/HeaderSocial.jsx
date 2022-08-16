import React from 'react'
import { BsLinkedin }from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

export const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" ><BsLinkedin/></a>
        <a href="https://github.com" ><FaGithub/></a>
    </div>
  )
}

export default HeaderSocial
