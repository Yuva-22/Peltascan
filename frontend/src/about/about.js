import React from 'react';
import './about.css';
import image1 from '../images/deer.png';
import image2 from "../images/deer-thermal.png";
import image3 from "../images/animal.png";
import image4 from "../images/animal-thermal.png";
import image5 from "../images/injury.png";
import image6 from "../images/injury-thermal.png";

function about() {
  return (
    <div className='about'>

        <div className='about-navbar'>
            <a href="/" className='about-navlogo'>PeltaScan</a>
            <div className='links'>
                <a href="/about" className='about-nav-links'>About Us</a>
                <a href="/login" className='about-nav-links'>Login</a>
            </div>
        </div>
    <div className='about-container'>
      <h1  className='about-heading'>"PeltaScan - Where Innovation Protects Wildlife 
        and Preserves Biodiversity, Redefining Wildlife Monitoring."</h1>
      <h1>What We Do?</h1>


      <div className='first-des'>
        <div className='des-text'>
          <h2>INJURY IDENTIFICATION</h2>
          <p>we aim to seamlessly integrate it into wild animal 
            injury identification and monitoring systems. This innovative 
            approach allows for efficient tracking of animals 
            in their natural habitats. Moreover, utilizing 
            thermal cameras not only enhances visibility but 
            also opens avenues for identifying infections 
            based on temperature variations in the images. </p>
        </div>
        <div className='image'>
          <img alt="img" src={image5} />
          <img alt="img" src={image6} />
        </div>
      </div>

      <div className='first-des-reverse'>
        <div className='des-text'>
          <h2>SAFEGUARDING WILDLIFE</h2>
          <p>Empowering Conservation Efforts Through Innovative 
            Wildlife Monitoring. Our technology revolutionizes wildlife 
            surveillance, ensuring round-the-clock protection of 
            endangered species and their habitats. With PeltaScan, 
            we're redefining conservation practices, providing real-time 
            data to aid in the preservation of biodiversity. </p>
        </div>
        <div className='image'>
          <img alt="img" src={image3} />
          <img alt="img" src={image4} />
        </div>
      </div>

      <div className='first-des'>
        <div className='des-text'>
          <h2>DISCOVER A NEW ERA OF WILDLIFE MONITORING</h2>
          <p>Empowering Conservation Efforts Through Innovative 
            Wildlife Monitoring. Our technology revolutionizes wildlife 
            surveillance, ensuring round-the-clock protection of 
            endangered species and their habitats. With PeltaScan, 
            we're redefining conservation practices, providing real-time 
            data to aid in the preservation of biodiversity. </p>
        </div>
        <div className='image'>
          <img alt="img" src={image1} />
          <img alt="img" src={image2} />
        </div>
      </div>

      
      
      <div></div>
    </div>
    </div>
  )
}

export default about