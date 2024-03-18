import './WindowContent.css'
import profilePic from '/img/profile.jpg'

export default function About() {

    return (
        <>
            <div className="about-container">
                {/* <h1> hi im ana </h1>
                <div className="about-info">
                    <p> this is information about me blah blah who fucking cares </p>
                    <img src={profilePic} alt="photo of ana"/>
                </div> */}
                
            <div className="about-window">
                <menu className="about-menu">
                    <li>My PC</li>
                    <li>Stats</li>
                    <li>SNS</li>
                </menu>
            </div>
            </div>
        </>
    )
}