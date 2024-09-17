import { useState } from 'react'
import './Projects.css'
import synth from '../../img/synthcover.jpg'
import cap from '../../img/capcover.jpg'
// import site from '../../img/site1.jpg'
import bea from '../../img/beacover.jpg'
import pom from '../../img/pomcover.jpg'
import Synth from '../projects/SynthUX.jsx'
import Cap from '../projects/Cap.jsx'
// import Site from '../projects/Site.jsx'
import Bea from '../projects/Bea.jsx'
import Pom from '../projects/Pom.jsx'


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
      windowContent:   <Cap/>,
      preview : cap
    },
    {
      title: "pomcat app",
      windowContent: <Pom/>,
      preview : pom
    },
    {
      title: "mixed-media animation",
      windowContent: <Bea/>,
      preview : bea
    }
  ]

  // ,
  //   {
  //     title: "making this site",
  //     windowContent: <Site/>,
  //     preview : site
  //   }

  // use open window function , passing in whole projectPreview items
  function ProjectItem({projectPreview, openWindow}) {
    return(
  
      // add onclick event that opens new window, takes in the title key and pulls the content from the title
    <div className='overflow'>
        <button className= "project-item" onClick={()=> openWindow(projectPreview.title, projectPreview.windowContent)}>
          <img className="content-preview" src={projectPreview.preview}/>
          <p className='content-title'> {projectPreview.title}  </p>
      </button>
    </div>

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