import React from 'react'
import BannerComponent from '../components/BannerComponent'
import IntroComponent from '../components/IntroComponent'
import FlexComponent from '../components/FlexComponent'
import MissionComponent from '../components/MissionComponent'
import ListComponent from '../components/ListComponent'
import './aboutPageStyle.css'

function About() {
  const bannerHeader = "About Us"
  const bannerContent = "People at Orestes are innovative and creative in their approach, meticulous in their research, and follow processes to achieve consistent quality."
  return (
    <div>
      <BannerComponent heading={bannerHeader} content={bannerContent}/>
      <IntroComponent/>
      <FlexComponent/>
      <MissionComponent/>
      <ListComponent/>

    </div>
  )
}

export default About
