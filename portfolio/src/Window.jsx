import { useState } from "react"
import './Window.css'

 // creating window object with content and title
export default function Window({windowTitle, windowContent, closeWindow}){
    
    return (
        <div className="window">
            <div className="title-bar"> 
                <div className="title-text">{windowTitle}</div>
                {/* button for close and fullscreen */}
                <div className="title-bar-controls">
                    <button onClick={()=> closeWindow(windowTitle)}>x</button>
                </div>
            </div>

            <div className="window-content">
                {windowContent}
            </div>
            
            <div class="status-bar">
                <p class="status-bar-field">Press F1 for help</p>
                <p class="status-bar-field">CPU Usage: 77.7%</p>
            </div>
        </div>
    )

}