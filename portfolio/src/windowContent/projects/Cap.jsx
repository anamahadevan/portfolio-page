import './Projects.css'
import site1 from '../../img/site1.jpg'
import site2 from '../../img/synth2.jpg'


export default function SynthUX() {

    return (
        <>

        <div className='post-container'>
        <img className='blog-photo-a' src={site1} /> 
        <p className='blog-text'> 
        For my senior capstone project, I developed a hands-free
         pedal aimed at enriching an artist’s live performance 
         experience both visually and vocally. I utilized
          Electrosmith’s Daisy Seed microcomputer and C++ 
          to enable the incorporation of effects such as delay,
           reverb, and bitcrush into live vocals. CAD, 
           laser-cutting, and 3D printing were employed
            to craft a concert-durable and visually
            appealing enclosure, hence the name: Pretty Pedal.

        </p>    
        <p className='blog-text-b'> I then translated my
          concepts into digital mockups using Figma and brought 
          them to life with React for functionality. Art plays
        an integral role in my coding process, and I envisioned
         my website as a digital canvas, illustrating my evolution
          as both a designer and developer.
        </p>   
        <img className='blog-photo-b' src={site2} /> 
        </div>
      
        </>
    )
}