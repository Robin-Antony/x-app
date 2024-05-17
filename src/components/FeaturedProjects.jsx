import React from 'react'
import image1 from './assets/experianced.jpeg'
import image2 from './assets/costeffective.jpeg'

function FeaturedProjects() {
  return (
    <div className='container cls_relative'>
      <div className='feature-container'>
        <div className='  feature-item  h-50'>
            <h2>Affordable and Cost-Effective Solutions</h2>
            <p>Our company specializes in creating budget-friendly software solutions that cater to a wide range of clients.
               Whether you're a startup, a small business, or an enterprise, we've got you covered.
               We believe that cutting-edge technology doesn't have to come with a hefty price tag.
              Our development team focuses on cost-effective solutions without compromising quality
            </p>
        </div>
        <div className='parent-position  m-5'>
            <div className=' p-4'>
                
            <img className=' child-position ' src={image1} alt="" />
            </div>
            
        </div>
      </div>


      <div className='feature-container2 '>
        
      <div className='parent-position m-5'>
            <div className=' p-4'>
                
            <img className=' child-position' src={image2} alt="" />
            </div>
            
        </div>

        <div className='  feature-item  h-50'>
            <h2>Our Team</h2>
            <p>
            Our seasoned team of professionals brings a wealth of knowledge to the table.
             Their collective experience ensures that we navigate complexities and deliver top-notch solutions.
             Industry recognition is a testament to our expertise. Awards, certifications, and
              client testimonials reinforce our position as a trusted IT partner.
            </p>
        </div>
      </div>

      
    </div>
  )
}

export default FeaturedProjects
