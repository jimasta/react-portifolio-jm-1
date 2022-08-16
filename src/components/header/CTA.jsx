import React from 'react'
import CV from '../../assets/CV.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn btn-primary'>Download a CV</a>
        <a href="#contact" className='btn'>Lets'a talk</a>
    </div>
  )
}

export default CTA