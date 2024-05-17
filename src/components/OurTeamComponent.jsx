import React from 'react'
import image1 from './assets/ukflag.jpeg'
import image2 from './assets/canada.jpeg'
import image4 from './assets/australia.jpeg'
import image3 from './assets/qatar.jpeg'
import image5 from './assets/liberia.jpeg'

export default function OurTeamComponent() {
  return (
    <div className='container d-flex flex-wrap justify-content-center p-2 '>
      <div className='team-item p-2 '>
        <div>
        <h2>Canada </h2>
        <p>2Hats Logic was founded in 2014 as a web agency headquartered in Kochi, India
            .We offer development teams and services for Web & e-commerce, PWAs (Progressive Web Apps),
            Mobile applications & Shopware using a variety of modern technologies 
            and frameworks including but not limited to Laravel, Magento, Shopware, Shopify, Vuejs, and more.
        </p>
        </div>
        <img className='team-image' src={image2} alt="" />
      </div>

      <div className='team-item p-2'>
        <div>
        <h2>UK </h2>
        <p>2Hats Logic was founded in 2014 as a web agency headquartered in Kochi, India
            .We offer development teams and services for Web & e-commerce, PWAs (Progressive Web Apps),
            Mobile applications & Shopware using a variety of modern technologies 
            and frameworks including but not limited to Laravel, Magento, Shopware, Shopify, Vuejs, and more.
        </p>
        </div>
        <img className='team-image' src={image1} alt="" />
      </div>

      <div className='team-item p-2'>
        <div>
        <h2>Qatar </h2>
        <p>2Hats Logic was founded in 2014 as a web agency headquartered in Kochi, India
            .We offer development teams and services for Web & e-commerce, PWAs (Progressive Web Apps),
            Mobile applications & Shopware using a variety of modern technologies 
            and frameworks including but not limited to Laravel, Magento, Shopware, Shopify, Vuejs, and more.
        </p>
        </div>
        <img className='team-image' src={image3} alt="" />
      </div>

      <div className='team-item p-2'>
        <div>
        <h2>Australia </h2>
        <p>2Hats Logic was founded in 2014 as a web agency headquartered in Kochi, India
            .We offer development teams and services for Web & e-commerce, PWAs (Progressive Web Apps),
            Mobile applications & Shopware using a variety of modern technologies 
            and frameworks including but not limited to Laravel, Magento, Shopware, Shopify, Vuejs, and more.
        </p>
        </div>
        <img className='team-image' src={image4} alt="" />
      </div>

      <div className='team-item p-2'>
        <div>
        <h2>Liberia </h2>
        <p>2Hats Logic was founded in 2014 as a web agency headquartered in Kochi, India
            .We offer development teams and services for Web & e-commerce, PWAs (Progressive Web Apps),
            Mobile applications & Shopware using a variety of modern technologies 
            and frameworks including but not limited to Laravel, Magento, Shopware, Shopify, Vuejs, and more.
        </p>
        </div>
        <img className='team-image' src={image5} alt="" />
      </div>

      
    </div>
  )
}
