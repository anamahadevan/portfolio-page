
import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import './Projects.css'
import pom1 from '../../img/pom1.jpg'
import pom2 from '../../img/pom2.jpg'


export default function SynthUX() {

    return (
        <>

        <div className='post-container'>
        <img className='blog-photo-a' src={pom1} /> 
        <p className='blog-text'> 
        After my cat passed away senior year of 
        college, I found myself struggling to focus on work.
        I set out to build a cat-themed timer app to help
        using the “Pomodoro Technique", and started  
        hand-drawing icons based on my pet.
        </p>    
        <p className='blog-text-b'> 
        I digitized assets in Photoshop, translated 
        sketches into detailed wireframes using Figma,and then
        implemented the app in Swift. The project not only helped
        me manage time but also became a meaningful 
        homage to my kitty.
        </p>   
        <img className='blog-photo-b' src={pom2} /> 
        <br></br>
        <YoutubeEmbed embedId="D2P2egjJAH4" />
        </div>
        </>
    )
}