import React from 'react'
import "./Home.css";
// import myImg from '../Images/img/IMG_0565.JPG';
import img from '../Images/img/refImage.png';
import Typewriter from './HomeTextTypeWriter';


function Home() {
   
    return(
      
        <div className= 'homeSection' id="home">
            <div className= 'homeSubsec1'>
                <span className='tag'>Welcome to my Portfolio</span>
                <h1 className='homeHeading1'>
                    Hi, I'm Refton Rebelo
                </h1>
                <div className='divHomePara'>
                    <Typewriter/>
                </div>
            </div>

            <div className ='homeSubsec2'>
                <img src={img} alt='mypicture' className='myImage'></img>
            </div>
        </div>
    )
}

export default Home;