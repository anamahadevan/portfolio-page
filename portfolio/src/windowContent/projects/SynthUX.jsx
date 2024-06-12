import './Projects.css'
import synth1 from '../../img/beacover.jpg'


export default function SynthUX() {

    return (
        <>

        <div className='post-container'>
        <img className='blog-photo' src={synth1} /> 
        <p className='blog-text'> For the 2024 SynthUX Hackathon, 
            our team  presented 'The Collaborator.' to address
            the theme of 'Virtual Human Connection' by 
            exploring how technology can facilitate shared 
            musical experiences. the Collaborator brings 
            together four individuals, regardless of their 
            musical background, to jam together using abstract 
            quantized inputs to control drums, bass, chords, 
            and melody, along with a host of effects
        </p>    

        </div>
      
        </>
    )
}