import { useState } from 'react'
import './Nav.css'
//importing new window content 
import About from './windowContent/About.jsx'
import Resume from './windowContent/Resume.jsx'
import Projects from './windowContent/projects/Projects.jsx'
import iconOne from './img/miffy.png'
import iconTwo from './img/cherry.png'
import iconThree from './img/shell.png'
import iconFour from './img/ghost.png'

//static data of possible windows that can be added to openList from nav bar 
const navWindows =
  {
    "about" : {
      title: "about", 
      windowContent: <About/>,
      img : iconOne
    },
    "resume / cv" : {
      title: "resume / cv",
      windowContent: <Resume/>,
      img : iconTwo
    },
    "projects" : {
      title: "projects",
      windowContent: <></>,
      img : iconThree
    },
    "contact" : {
      title: "contact",
      windowContent: <></>,
      img : iconFour
    }
  }
  
// adding to nav titles list 
var navTitles = []
for (const [key] of Object.entries(navWindows)) {
  navTitles.push(key)
}

// 
function NavItem({imgsrc, title, openWindow}) {
  let window 
  if (title == 'projects'){
    // gives us access to openWindow in Projects.jsx
   window = <Projects openWindow={openWindow}/>; 
  }
  else {
    // when its not projects, window is else 
    window = navWindows[title].windowContent;
  }
  return(

    // add onclick event that opens new window, takes in the title key and pulls the content from the title
    <button className= "nav-item" onClick={()=> openWindow(title, window)}>
      <br/>
        <img className="nav-icon" src={imgsrc}/>
        <p> {title} ★ </p>
    </button>
  )
}

export default function Nav({openWindow}) {

  return (
    <div className="nav">
      { navTitles.map((title, index) => (<NavItem openWindow={openWindow} key={index} imgsrc={navWindows[title].img} title={title}/>) )}
    </div>
  )

}

