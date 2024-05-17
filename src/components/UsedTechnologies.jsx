import React from 'react'

import './serviceList.css'



function UsedTechnologies(props) {
    const { tech } = props
  return (
    <div className='container'>
    <div className=" tch-container container  d-flex justify-content-around flex-wrap cls_relative ">
      
    {tech.map(tech => (
        
        <div className=" icon-container" key={tech.name}>
            <div className='d-flex justify-content-center'>
                
                <img className='w-100 text-center' src={tech.image} alt="" />
            </div>
            <h4 className='text-center'>{tech.name}</h4>
        </div>
    ))}
        
      
    
    </div>
    <br></br>


    </div>
    
  )
}

export default UsedTechnologies
