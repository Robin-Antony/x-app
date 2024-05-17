import React from 'react'
import CoundUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react'

export default function CounterComponent(props) {
    
    const [counterOn, setCounterOn ] = useState(false)
    // const [start, end ] = props
    console.log(props)
  return (
    <div>
        <ScrollTrigger onMouseOver={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
            <h1 className='counter-h1 text-center'>
                {counterOn && 
            <CoundUp start={props.start} end={props.end} duration={3} delay={0}/> }+
            </h1>
        </ScrollTrigger>
    </div>
  )
}
