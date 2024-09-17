import './WindowContent.css'
import profilepic from '../img/profilepic.png'
import profilepic2 from '../img/profilepic2.jpg'
import './WindowContent.css';
import github from '../img/github.png';
import behance from '../img/behance.png';


// Static data for social media links
const socialLinks = [
    { href: "https://www.linkedin.com/in/ana-mahadevan-4ab433199/", src: "https://cdn.icon-icons.com/icons2/2873/PNG/512/linkedin_pixel_logo_icon_181925.png", text: "linkedin" },
    { href: "https://github.com/anamahadevan", src: github, text: "github" },
    { href: "https://www.behance.net/anamahadevan", src: behance, text: "behance" }
];


function SocialItem({ link }) {
    return (
        <li>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
                <img src={link.src} className="contact-icon" alt={link.text} />
                <br />
                {/* <span>{link.text}</span> */}
            </a>
        </li>
    );
}

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
                <div className="window-container" id='contact-container'>
                <h1> where to find me! </h1>
                <div className='contacts'>
                    <ul>
                    {socialLinks.map((link, index) => (
                        <SocialItem key={index} link={link} />
                    ))}
                    </ul> 
                </div>    
                </div>   
            </div>
         </div>
        </>
    )
}

