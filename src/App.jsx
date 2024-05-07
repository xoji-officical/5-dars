import { useContext, useState } from 'react'
import './App.css'

function App() {
  const {
    state: {darkmode}, 
    ChangeMode, 
  } = useContext(darkMode);


  function setDarkMode(){
    if (!darkmode){
    document.body.classList.add("darkmode")
    } else {
      document.body.classList.remove("darkmode")
    }

    ChangeMode();
  }
  return (
    <>
      <button className='btn' onClick={() => setDarkMode()}>
        {darkmode ? "LightMode" : "DarkMode"}
        </button>
    </>
  )
}

export default App()
