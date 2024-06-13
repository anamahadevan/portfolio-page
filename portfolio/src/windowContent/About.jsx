import './WindowContent.css'
import profilepic from '../img/profilepic.png'
import profilepic2 from '../img/profilepic2.jpg'


export default function About() {

    return (
        <>
         <div className="window-container">
            <div className="window-body">
                <div className='profile-section'>
                <img className='profile-pic' src={profilepic} /> 
                    <div className='profile-info'>
                    <div className='profile-info-head'><strong>☆ hi my name is ana ☆</strong></div> 
                    <p className='profile-info-text'>
                        i just graduated from the university of colorado with 
                        a bs in creative technology design & a focus in ui/ux 
                        design  
                    </p>
                    </div>
                </div>
                <div className='int-section'>
                    {/* <br /><strong>name:</strong> ana mahadevan <br />
                    <strong>pronouns:</strong> they/she <br /> */}
                     <ul>
                        <li><b>name:</b> ana mahadevan</li>
                        <li><b>pronouns:</b>they / she </li>
                        <li><b>sign:</b> ☼ pisces / ☽ capricorn</li>
                        <li><b>fav software:</b> figma</li>
                        <li><b>fav animal:</b> cats</li>
                    </ul>
                    <img src={profilepic2} /> 
                </div>        
            </div>
         </div>
        </>
    )
}

