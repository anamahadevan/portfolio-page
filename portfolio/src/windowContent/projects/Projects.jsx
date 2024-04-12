import { useState } from 'react'

//static data of possible windows that can be added to openList from nav bar 
// project 
const projectPreviews =
  [
   {
      title: "projects", 
      windowContent:  <></>,
      preview : '/'
    },
   {
      title: "projects 2",
      windowContent:  <></>,
      preview : '/'
    },
    {
      title: "project 3",
      windowContent: <></>,
      preview : '/'
    },
    {
      title: "projects 4",
      windowContent: <></>,
      preview : '/'
    }
  ]

  // use open window function , passing in whole projectPreview items
  function ProjectItem({projectPreview, openWindow}) {
    return(
  
      // add onclick event that opens new window, takes in the title key and pulls the content from the title
      <button className= "project-item" onClick={()=> openWindow(projectPreview.title, projectPreview.windowContent)}>
          <img className="content-preview" src={projectPreview.preview}/>
          <p> {projectPreview.title} ★ </p>
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