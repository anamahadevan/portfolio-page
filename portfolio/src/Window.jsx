import { useState } from "react"
import './Window.css'
import Draggable from 'react-draggable';

 // creating window object with content and title
export default function Window({windowTitle, windowContent, closeWindow}){
    
    return (
        <Draggable>
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
            
            <div className="status-bar">
                <button className="status-bar-field">Press F1 for help</button>
                <button className="status-bar-field">CPU Usage: 77.7%</button>
            </div>
        </div>
        </Draggable>
    )

}