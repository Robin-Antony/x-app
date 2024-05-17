import React from 'react'
import ServiceListComponent from '../components/ServiceListComponent'
import BannerComponent from '../components/BannerComponent'

function Service() {

    const bannerHeader = 'Our Services'
    const bannerContent = ' People at Orestes are innovative and creative in their approach, meticulous in their research, and follow processes to achieve consistent quality.'
  return (
    <div>
        <BannerComponent heading={bannerHeader} content={bannerContent}/>
        <ServiceListComponent/>
      
    </div>
  )
}

export default Service
