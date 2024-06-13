import './Projects.css'
import site1 from '../../img/site1.jpg'
import site2 from '../../img/synth2.jpg'


export default function SynthUX() {

    return (
        <>

        <div className='post-container'>
        <img className='blog-photo-a' src={site1} /> 
        <p className='blog-text'> 
        When I set out to build my portfolio website from 
        scratch, my objective was to showcase both my design 
        work and coding abilities while also allowing my 
        personality to shine through. Drawing on the nostalgia
         of my coding origins in late Y2K web design, I began 
         with a set of wireframe sketches. 
        </p>    
        <p className='blog-text-b'> I then translated my
          concepts into digital mockups using Figma and brought 
          them to life with React for functionality. Art plays
        an integral role in my coding process, and I envisioned
         my website as a digital canvas, illustrating my evolution
          as both a designer and developer.
        </p>   
        <img className='blog-photo-b' src={site2} /> 
        {/* <img className='blog-photo-a' src={synth3} /> 
        <p className='blog-text'> Each component of the Collaborator
         offers unique functionalities: from generative drum patterns 
         controlled by thumb sticks to walking bass lines and chord variations
          controlled by buttons and touch sensors. The device also features parent 
          controls for tempo, pitch, and effects, fostering a seamless and immersive 
          collaborative music-making experience.

        </p> */}
        </div>
      
        </>
    )
}