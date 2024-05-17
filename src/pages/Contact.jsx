import React from 'react'
import BannerComponent from '../components/BannerComponent'
import ContactFormComponent from '../components/ContactFormComponent'

function Contact() {
    const bannerHeader = 'Our Services'
    const bannerContent = ' People at Orestes are innovative and creative in their approach, meticulous in their research, and follow processes to achieve consistent quality.'
  
  return (
    <div>
        <BannerComponent  heading={bannerHeader} content={bannerContent}/>
        <ContactFormComponent/>
      
    </div>
  )
}

export default Contact
