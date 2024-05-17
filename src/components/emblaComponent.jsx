import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './embla.css'
import { useEffect } from 'react'
import { ParticleComponent } from './particle'
import Autoplay from 'embla-carousel-autoplay'



export function EmblaCarousel() {
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  return (
    <>
    <ParticleComponent/>
    <div className="embla" ref={emblaRef} >
      <div className="embla__container cls_relative ">
        <div className="embla__slide p-sm-1 p-md-2 p-lg-5">
            <div className=' carousel-container  ' >
                <div className='flex-fill carousel-heading d-flex flex-column justify-content-center align-item-center'>
                    <div className=' roboto-regular'>
                        <h2 className='roboto-regular heading'>Embrace the Digital Future:</h2>
                        
                        <h4 className='montserrat'>We create digital products that make business processes more <br /> efficient and help businesses grow.</h4>
                        
                    </div>
                    <div className='pt-5 ps-5'>
                        <button type="button" className="btn btn-outline-warning btn-rounded"  data-mdb-ripple-color="dark"> contact us</button>

                    </div>
                    
                </div>
                <div className=' carousel-image'>
                    <div className='d-flex justify-content-center align-items-center h-100 w-25'>
                        {/* <img className='w-50 img-container ' src={image1} alt=" there is a " /> */}
                    </div>
                    
                </div>
            </div>
        </div>

        <div className="embla__slide p-sm-1 p-md-2 p-lg-5">
            <div className=' carousel-container ' >
                <div className='flex-fill carousel-heading  d-flex flex-column justify-content-center align-item-center'>
                    <div className=' roboto-regular'>
                        <h2 className='roboto-regular heading'>Economical, dynamic and managed business solutions</h2>
                        
                        <h4 className='montserrat'>Our solutions are crafted to bring effective change in your
                         business by ensuring <br/>
                          cost-effective and reliable operation methodologies.</h4>
                        
                    </div>
                    <div className='pt-5 ps-5'>
                        <button type="button" className="btn btn-outline-warning btn-rounded"  data-mdb-ripple-color="dark"> contact us</button>

                    </div>
                    
                </div>
                <div className=' carousel-image'>
                    <div className='d-flex justify-content-center align-items-center h-100 w-25'>
                        {/* <img className='w-50 img-container ' src={image1} alt=" there is a " /> */}
                    </div>
                    
                </div>
            </div>
        </div>


        <div className="embla__slide p-sm-1 p-md-2 p-lg-5">
            <div className=' carousel-container ' >
                <div className='flex-fill carousel-heading  d-flex flex-column justify-content-center align-item-center'>
                    <div className=' roboto-regular'>
                        <h2 className='roboto-regular heading'>Unleashing the Power of Our Exceptional Services</h2>
                        
                        <h4 className='montserrat'>With a proven track record of delivering disruptive <br/> 
                        solutions</h4>
                        
                    </div>
                    <div className='pt-5 ps-5'>
                        <button type="button" className="btn btn-outline-warning btn-rounded"  data-mdb-ripple-color="dark"> contact us</button>

                    </div>
                    
                </div>
                <div className=' carousel-image'>
                    <div className='d-flex justify-content-center align-items-center h-100 w-25'>
                        {/* <img className='w-50 img-container ' src={image3} alt=" there is a " /> */}
                    </div>
                    
                </div>
            </div>
        </div>

      </div>
    </div>

    </>
  )
}
