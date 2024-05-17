import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function HeaderComponent() {
    const [toggler, setToggler] = useState(true)

    // function togglerInitializer(){
    // if (window.innerWidth>1000){
    //     setToggler(true)
    // }
    // }
    // togglerInitializer()

    function togglerHandler(){
        if(toggler){

            setToggler(false)
            console.log(toggler)

        }else{
            setToggler(true)
            console.log(toggler)
        }

    }
  return (
    <>
            
        <nav className="navbar navbar-expand-lg d-flex justify-content-spacebetween p-3">
            <div>
                { !toggler  ? (<button className="navbar-toggler text-white" type="button">
                    <i className="fas fa-bars" onClick={togglerHandler}></i>
                </button>):(<button className="navbar-toggler text-white" type="button">
                    <i className="fas " onClick={togglerHandler}>x</i>
                </button>)}
                


                <a className="mb-1 m-5 mt-lg-0" href="#">
                     <img
                    src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                    height="15"
                    alt="MDB Logo"
                    loading="lazy"
                    /> 
                </a>

            </div>

            <div className="container navbar-container ">
                <div className="d-flex align-items-center">
                    {toggler?(
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                        <a className="nav-link text-white " href={'/x-app/'}>Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white " href={'/x-app/about'}>About Us</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white " href={'/x-app/service'}>Services</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white " href={'/x-app/contact'}>Contact Us</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white " href="#">Careers</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white " href="#">Internship</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white" href="#">Projects</a>
                        </li>
                    </ul>
                    ):(<h1></h1>)}
                </div>    
            </div>
            

            
        </nav>
        
    </>
  )
}

export default HeaderComponent
