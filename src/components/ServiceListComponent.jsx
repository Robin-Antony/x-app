import React from 'react'
import './serviceList.css'
import ReadMore from './ReadMore'

import image1 from './assets/animImg1.png'

function ServiceListComponent() {
    const content1 = " Our mobile apps prioritize user experience. We create intuitive interfaces,smooth navigation,an e-commerce app, a fitness tracker, or a social platform, users love our designs."
    const content2 = "Our team brings years of experience in e-commerce development. We've successfully built and optimized numerous online stores, understanding the intricacies of user behavior, conversion funnels, and performance optimization."
    const content3 = "With 15 years of experience and over 1000 satisfied customers, we've consistently delivered results. Our strategies are data-driven and tailored to each client's unique needs1."
    const content4 = ""
    const content5 = "Leverage our expertise in web application design, development, integration, and management."
    return (
    
    <div className='top-container container p-1'>
        

        <div className='w-50 p-3 container-itemone '>
       
            
            <div className=' p-1 mb-4 d-flex justify-content-spacearound shadow-custom round'>
                <div className='width-custom-img m-auto'>
                    <img src={image1} alt="" className='w-100' />
                </div>
                <div className='p-3 service-content'>
                    <h3>Mobile Application</h3>
                    <div className='montserrat p-h' id='service-p1'>
                     <ReadMore content={content1}/>
                    </div>
                    <button type="button" className="btn btn-outline-warning "  data-mdb-ripple-color="dark">Know more</button>


                </div>
            </div>

            <div className=' p-1 mb-4 d-flex justify-content-spacearound shadow-custom round '>
                <div className='width-custom-img m-auto'>
                    <img src={image1} alt="" className='w-100' />
                </div>
                <div className='p-3'>
                    <h3>E-commerce Solutions</h3>
                    <div className='montserrat'>
                    <ReadMore content={content2}/>
                    </div>
                    <button type="button" className="btn btn-outline-warning "  data-mdb-ripple-color="dark">Know more</button>


                </div>
            </div>

            <div className=' p-1 mb-4 d-flex justify-content-spacearound shadow-custom round'>
                <div className='width-custom-img m-auto'>
                    <img src={image1} alt="" className='w-100' />
                </div>
                <div className='p-3'>
                    <h3>Digital Marketing</h3>
                    <div className='montserrat'>
                    <ReadMore content={content3}/>
                    </div>
                    <button type="button" className="btn btn-outline-warning "  data-mdb-ripple-color="dark">Know more</button>


                </div>
            </div>

         

            
        </div>


        <div className='w-50 p-3 m-5 container-itemtwo'>
            <h2>End-to-end customized digital solutions for varied business needs.</h2>
            <p>With over a decade of experience in completing over 200 projects for clients world wide, we at
                SayOne design and develop technology solutions to help our clients streamline their business processes and grow their revenue. 
                Custom software applications for our clients are tailored to meet specific use cases, budgets, and timelines
            </p>

            <div className=' p-1 mt-5 d-flex justify-content-spacearound shadow-custom round'>
                <div className='width-custom-img m-auto'>
                    <img src={image1} alt="" className='w-100' />
                </div>
                <div className='p-3'>
                    <h3>Web Application</h3>
                    <div className='montserrat'>
                    <ReadMore content={content5}/>
                    </div>
                    <button type="button" className="btn btn-outline-warning "  data-mdb-ripple-color="dark">Know more</button>


                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceListComponent
