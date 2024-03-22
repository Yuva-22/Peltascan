import React from 'react';
import './home.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../images/tiger.jpg';
import image2 from "../images/elephant.jpg";
import image3 from "../images/tigerimage.jpg";
import image4 from "../images/lion.jpg";

function home() {
  return (
    <div>
        <div className='navbar'>
            <a href="/" className='navlogo'>PeltaScan</a>
            <div className='links'>
                <a href="/about" className='nav-links'>About Us</a>
                <a href="/login" className='nav-links'>Login</a>
            </div>
        </div>
        <div className='image-carousel'>
        <AliceCarousel autoPlay autoPlayInterval={800}  animationType="fadeout" 
            animationDuration={1000} infinite
            >
          <div className='sliderimg-container'>
           <img src={image1} className='sliderimg' alt="" />

           <div className='overlay-text'>
            <h1>PeltaScan</h1>
            <h2>"Discover a new era of wildlife monitoring."</h2>
            <p className='overlay-para'>Empowering Conservation Efforts Through Innovative Wildlife 
              Monitoring. Our technology revolutionizes wildlife surveillance, 
              ensuring round-the-clock protection of endangered species and their habitats. 
              With PeltaScan, we're redefining conservation practices, providing real-time 
              data to aid in the preservation of biodiversity. <br /> "Join us in our mission to 
              safeguard wildlife and preserve the natural world for future generations."</p>
              </div>
           </div>

           <div className='sliderimg-container'>
           <img src={image2} className='sliderimg' alt="" />

           <div className='overlay-text'>
            <h1>PeltaScan</h1>
            <h2>"Safeguarding Wildlife"</h2>
            <p className='overlay-para'>Empowering Conservation Efforts Through Innovative Wildlife 
              Monitoring. Our technology revolutionizes wildlife surveillance, 
              ensuring round-the-clock protection of endangered species and their habitats. 
              With PeltaScan, we're redefining conservation practices, providing real-time 
              data to aid in the preservation of biodiversity. <br /> "Join us in our mission to 
              safeguard wildlife and preserve the natural world for future generations."</p>
              </div>
           </div>

           <div className='sliderimg-container'>
           <img src={image3} className='sliderimg' alt="" />

           <div className='overlay-text'>
            <h1>PeltaScan</h1>
            <h2>"Preserving Nature"</h2>
            <p className='overlay-para'>Empowering Conservation Efforts Through Innovative Wildlife 
              Monitoring. Our technology revolutionizes wildlife surveillance, 
              ensuring round-the-clock protection of endangered species and their habitats. 
              With PeltaScan, we're redefining conservation practices, providing real-time 
              data to aid in the preservation of biodiversity. <br />"Join us in our mission to 
              safeguard wildlife and preserve the natural world for future generations."</p>
              </div>
           </div>

           <div className='sliderimg-container'>
           <img src={image4} className='sliderimg' alt="" />

           <div className='overlay-text'>
            <h1>PeltaScan</h1>
            <h2>"Join us in protecting biodiversity"</h2>
            <p className='overlay-para'>Empowering Conservation Efforts Through Innovative Wildlife 
              Monitoring. Our technology revolutionizes wildlife surveillance, 
              ensuring round-the-clock protection of endangered species and their habitats. 
              With PeltaScan, we're redefining conservation practices, providing real-time 
              data to aid in the preservation of biodiversity. <br />"Join us in our mission to 
              safeguard wildlife and preserve the natural world for future generations."</p>
              </div>
           </div>

           {/* <img src={image2} className='sliderimg' alt="" />
           <img src={image3} className='sliderimg' alt="" />
           <img src={image4} className='sliderimg' alt="" /> */}

        </AliceCarousel>
        </div>
    </div>
  )
}

export default home