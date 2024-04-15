import { useState } from 'react'
import './App.css'
import Window from './Window.jsx'
import Nav from './Nav.jsx'
import background from "./assets/beach.gif";

function App() {
  // creates setter function for state of windows open
  const [listOpen, setListOpen] = useState([])

  function closeWindow(title) {
    // creates new list for react to see when closed 
    setListOpen(listOpen.filter(window => window.title != title)) 
  }

  // append new window title(and content) to listOpen list 
  function openWindow(title, content){
    // Check if a window with the same title already exists
    const windowExists = listOpen.some(window => window.title === title);
  
    if(windowExists) {
      // If it does, return early to prevent opening a duplicate window
      return;
    }
  
    setListOpen(function(listOpen){
      // create a copy of the array for react
      listOpen = listOpen.slice()
      
      // opens new object with our title and content
      listOpen.push({ title:title, content: content})
      console.log(title, content)
  
      return listOpen
    })
  }

  console.log(listOpen)
  return (
    <>
      <div className='container' style={{ backgroundImage: `url(${background})` }}>
      <Nav openWindow={openWindow}/>
      
     {/* close window mapped */}
    {listOpen.map((item,index) => (<Window key={index} windowTitle={item.title} windowContent={item.content} closeWindow={closeWindow}></Window>))}
      </div>
    </>
  )
}

export default App
