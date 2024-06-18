
import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import './Projects.css'
import pom1 from '../../img/pom1.jpg'
import pom2 from '../../img/pom2.jpg'


export default function SynthUX() {

    return (
        <>

        <div className='pom-container'>
        <img className='blog-photo-a' src={pom1} /> 
        <p className='blog-text'> 
          After the passing of my cat in my senior year of 
          college, I struggled with maintaining focus and
           productivity. I set out to build a cat-themed 
           timer app using the “Pomodoro Technique",a time 
           management method that involves alternating between
          25-minute periods of focused work and five-minute breaks. After four consecutive work intervals, a longer break of 15–30 minutes is taken.
        </p>    
        <p className='blog-text-b'> 
        I started by hand-drawing icons then digitized them in 
        Photoshop into polished assets for the app. I translated 
        these designs into detailed wireframes using Figma,and
        implemented the app in Swift, combining functionality
        with heartfelt aesthetic. The project not only helped
        me regain productivity but also became a meaningful 
        homage to my kitty.

        </p>   
        <img className='blog-photo-b' src={pom2} /> 
        <YoutubeEmbed embedId="D2P2egjJAH4" />
        </div>
        </>
    )
}