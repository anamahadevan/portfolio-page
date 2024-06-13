import './Projects.css'
import synth1 from '../../img/beacover.jpg'
import synth2 from '../../img/beacover.jpg'


export default function SynthUX() {

    return (
        <>

        <div className='post-container'>
        <img className='blog-photo-a' src={synth1} /> 
        <p className='blog-text'> For the 2024 SynthUX Hackathon, 
            our team  presented 'The Collaborator.' to address
            the theme of 'Virtual Human Connection' by 
            exploring how technology can facilitate shared 
            musical experiences.
        </p>    
        <p className='blog-text-b'>  the Collaborator brings 
            together four individuals, regardless of their 
            musical background, to jam together using abstract 
            quantized inputs to control drums, bass, chords, 
            and melody. Technical implementation involved Arduino, 
            Max, and Ableton and a laser cut enclosure. 
        </p>   
        <img className='blog-photo-b' src={synth2} /> 
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