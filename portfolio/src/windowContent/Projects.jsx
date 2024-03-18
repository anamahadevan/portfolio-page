

//static data of possible windows that can be added to openList from nav bar 
const projectPreviews =
  {
    "project one" : {
      title: "about", 
      windowContent:  <></>,
      icon : '/img/miffy.png'
    },
    "project two" : {
      title: "resume / cv",
      windowContent:  <></>,
      icon : '/img/cherry.png'
    },
    "project three" : {
      title: "projects",
      windowContent: <></>,
      icon : '/img/shell.png'
    },
    "project four" : {
      title: "contact",
      windowContent: <></>,
      icon : '/img/ghost.png'
    }
  }

  // use open window function , properties 
  function ProjectItem({imgsrc, title, openWindow}) {
    return(
  
      // add onclick event that opens new window, takes in the title key and pulls the content from the title
      <button className= "nav-item" onClick={()=> openWindow(title, navWindows[title].windowContent)}>
        <br/>
          <img className="nav-icon" src={imgsrc}/>
          <p> {title} ★ </p>
      </button>
    )
  }
  

export default function Projects() {

    return (
        <>
        <div className = "project-container">
            <div></div>

        </div>
        </>
    )
}