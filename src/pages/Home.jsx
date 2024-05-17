import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

// import { EmblaCarousel } from '../components/emblaComponent'
import { EmblaCarousel } from '../components/emblaComponent'

import ServiceListComponent from '../components/ServiceListComponent'

import HeaderComponent from '../components/headerComponent'
import FeaturedProjects from '../components/FeaturedProjects'
import UsedTechnologies from '../components/UsedTechnologies'
// import IndustriesComponent from '../components/IndustriesComponent'
import EmblaCarouselSlider from '../components/EmblaCarousel'
import OurTeamComponent from '../components/OurTeamComponent'
import CanvasComponent from '../components/CanvasComponent'
import FooterComponent from '../components/FooterComponent'
// import service from '../components/serviceList'
import image1 from '../components/assets/travel.jpeg'
import image2 from '../components/assets/hospilatity.jpeg'
import image3 from '../components/assets/healthcare.jpeg'
import image4 from '../components/assets/edutech.jpeg'
import tech from '../components/serviceList'
// import { ParticleComponent } from '../components/particle'
import '../App.css'
import HeadingComponent from '../components/HeadingComponent'

function Home() {
    const OPTIONS = { loop: true }
    const images =[{"img":image1,'id':1},{"img":image2,'id':2},{"img":image3,'id':3},{"imge":image4,'id':4}]
  
   
    const techs = tech

    function offset(){
      if( window.innerWidth < 1000){
        let width = 0.4
        let height = 7
        return {width,height}
      }else{
        let width = 0.1
        let height = 5.2
        return {width, height}
      }
    }
    let {width, height} = offset()
    console.log('widow width', width)
    return (
      
      <div className='App'>
        <Parallax pages={height} style={{ top: '0', left: '0' }} className='parallax-container'>
          
  
          <ParallaxLayer offset={0} speed={0}>
            <div className='animation_layer parallax' id='anim-img1'> </div>
          </ParallaxLayer>
  
  
          <ParallaxLayer offset={0} speed={.5}>
            <div className='animation_layer parallax' id='anim-img2'> </div>
          </ParallaxLayer>
  
          <ParallaxLayer offset={0} speed={1}>
            <div className='animation_layer parallax-img' id='anim-img4'></div>
          </ParallaxLayer>
  
          <ParallaxLayer offset={0} speed={-.15}>
            <div className='animation_layer parallax' id='anim-img3'> </div>
          </ParallaxLayer>
  
          <ParallaxLayer offset={0.4} speed={0.1}>
            <div className='animation_layer parallax' id='anim-img5'> </div>
          </ParallaxLayer>
  
          
         
  
          
          <ParallaxLayer offset={0} speed={2.5}>
            
            <HeaderComponent /> 
          </ParallaxLayer>
  
          <ParallaxLayer offset={width} speed={0}>
            <EmblaCarousel/>
          </ParallaxLayer>
  
                 
          <ParallaxLayer offset={1.4} speed={1}>
          
            <HeadingComponent heading={"Services "}/>
            <ServiceListComponent/>

            <HeadingComponent heading={"why Us "}/>
            <FeaturedProjects/>

            <HeadingComponent heading={"technologies we use "}/>
            <UsedTechnologies tech={techs}/>

            <HeadingComponent heading={"Our Domains "}/>
            <EmblaCarouselSlider images={images} options={OPTIONS} />

            <HeadingComponent heading={"We are here "}/>
            <OurTeamComponent/>
  
            <CanvasComponent/>
  
            <FooterComponent/>
  
         </ParallaxLayer>
         
  
  
        </Parallax>
  
          
   
        
      </div>
      
    )
}

export default Home
