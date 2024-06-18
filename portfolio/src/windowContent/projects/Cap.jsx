import './Projects.css'
import cap1 from '../../img/cap1.jpg'
import cap2 from '../../img/cap2.jpg'


export default function SynthUX() {

    return (
        <>

        <div className='post-container'>
        <img className='blog-photo-a' src={cap1} /> 
        <p className='blog-text'> <br></br>
        For my senior capstone project, I developed a hands-free
         pedal aimed at enriching an artist’s live performance 
         experience both visually and vocally.

        </p>    
        <p className='blog-text-b'>  I used
          Electrosmith’s Daisy Seed microcomputer and C++ 
          to incorporate delay,reverb, and bitcrush 
          into live vocals. CAD, 
           laser-cutting, and 3D printing were employed
            to craft a concert-durable and visually
            appealing enclosure, hence the name: Pretty Pedal.
        </p>   
        <img className='blog-photo-b' src={cap2} /> 
        </div>
      
        </>
    )
}