import './WindowContent.css';
import github from '../img/github.png';
import behance from '../img/behance.png';

// Static data for social media links
const socialLinks = [
    { href: "https://www.linkedin.com/in/ana-mahadevan-4ab433199/", src: "https://cdn.icon-icons.com/icons2/2873/PNG/512/linkedin_pixel_logo_icon_181925.png", text: "linkedin" },
    { href: "https://github.com/anamahadevan", src: github, text: "github" },
    { href: "https://cinni.dreamwidth.org/", src: behance, text: "behance" }
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

export default function Contact() {
    return (
        <div className="window-container" id='contact-container'>
          <h1 className='contact-title'> where to find me! </h1>
          <div className='contacts'>
            <ul>
              {socialLinks.map((link, index) => (
                <SocialItem key={index} link={link} />
              ))}
            </ul> 
          </div>    
        </div>
    );
}

// <img className='profile-pic' src={icon1} /> 
