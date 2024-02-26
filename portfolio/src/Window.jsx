import { useState } from "react"
import './Window.css'

 // creating window object with content and title
export default function Window({windowTitle, windowContent, closeWindow}){
    
    return (
        <div className="window">
            <div className="title-bar"> 
                <div className="title-text">{windowTitle}</div>
                {/* button for close and fullscreen */}
                <button onClick={()=> closeWindow(windowTitle)}>x</button>
            </div>

            <div className="window-content">
                {windowContent}
            </div>
            
            <div className="status-bar"></div>
        </div>
    )

}