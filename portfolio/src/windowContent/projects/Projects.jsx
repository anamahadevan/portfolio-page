import { useState } from 'react'
import './Projects.css'
import synth from '../../img/synthcover.jpg'
import cap from '../../img/capcover.jpg'
import cat from '../../img/catcover.jpg'
import bea from '../../img/beacover.jpg'
import Synth from '../projects/SynthUX.jsx'


//static data of possible windows that can be added to openList from nav bar 
// project 
const projectPreviews =
  [
   {
      title: "synthUX hackathon winner", 
      windowContent:  <Synth/>,
      preview : synth
    },
   {
      title: "senior capstone project",
      windowContent:  <></>,
      preview : cap
    },
    {
      title: "cat toy robot",
      windowContent: <></>,
      preview : cat
    },
    {
      title: "mixed-media animation",
      windowContent: <></>,
      preview : bea
    },
    {
      title: "pomodoro app",
      windowContent: <></>,
      preview : cat
    }
  ]

  // use open window function , passing in whole projectPreview items
  function ProjectItem({projectPreview, openWindow}) {
    return(
  
      // add onclick event that opens new window, takes in the title key and pulls the content from the title
      <button className= "project-item" onClick={()=> openWindow(projectPreview.title, projectPreview.windowContent)}>
          <img className="content-preview" src={projectPreview.preview}/>
          <p className='content-title'> {projectPreview.title}  </p>
      </button>

    )
  }
  

export default function Projects({openWindow}) {

    return (
    
        <>
        <div className = "project-container">

        {/* // mapping //  */}
        {projectPreviews.map((projectPreview) => (<ProjectItem openWindow ={openWindow} key={projectPreview.title} projectPreview={projectPreview} />))}
        
        </div>
        </>
    )
}