import { useState } from 'react'
import './Nav.css'
//importing new window content 
import About from './windowContent/About.jsx'
import Resume from './windowContent/Resume.jsx'
import Projects from './windowContent/Projects.jsx'

//static data of possible windows that can be added to openList from nav bar 
const navWindows =
  {
    "about" : {
      title: "about", 
      windowContent: <About/>,
      img : '/img/y2k/miffy.png'
    },
    "resume / cv" : {
      title: "resume / cv",
      windowContent: <Resume/>,
      img : '/img/y2k/cherry.png'
    },
    "projects" : {
      title: "projects",
      windowContent: <></>,
      img : '/img/y2k/shell.png'
    },
    "contact" : {
      title: "contact",
      windowContent: <></>,
      img : '/img/y2k/ghost.png'
    }
  }
  
// adding to nav titles list 
var navTitles = []
for (const [key] of Object.entries(navWindows)) {
  navTitles.push(key)
}

// 
function NavItem({imgsrc, title, openWindow}) {
  return(

    // add onclick event that opens new window, takes in the title key and pulls the content from the title
    <button className= "nav-item" onClick={()=> openWindow(title, navWindows[title].windowContent)}>
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

