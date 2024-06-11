import './WindowContent.css'
import profilepic from '../img/ghost.png'


export default function About() {

    return (
        <>
         <div className="about-container">
         <div className="about-back">
            <div className="window-body">
                <div className='profile-section'>
                <img className='profile-pic' src={profilepic} /> 
                    <div className='profile-info'>
                    <div className='profile-info-head'><strong>☆ hi my name is ana ~ ☆</strong></div> 
                    <br /> i just graduated from the university of colorado with a bs in creative technology design & a focus in ui/ux design  <br />
                    </div>
                </div>
                <div className='int-section'>
                    <br /><strong>name:</strong> ana mahadevan <br />
                    <strong>pronouns:</strong> they/she <br />
                </div>        
            </div>

         </div>
         </div>
        </>
    )
}