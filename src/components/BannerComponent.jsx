import React from 'react'

function BannerComponent({heading, content}) {

  return (
    <div className="about-background bg-1">
        <div className="about-d1">
          <div className="d-flex h-100 w-75 m-auto justify-content-center align-item-center flex-column">
            <h2 className="p-2">{heading}</h2>
            <p className="p-2">
              {content}
            </p>
          </div>
        </div>
        <div className=" about-d1 d-flex justify-content-center align-item-center flex-column">
          <div className=" m-auto about-background2 bg-2" >
            
          </div>
        </div>
    </div>
  )
}

export default BannerComponent
