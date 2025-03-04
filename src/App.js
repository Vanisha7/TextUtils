import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');      // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }



  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#0f1a24';
      showAlert("Dark mode has been enabled", "success")
      document.title = "CaseFlex - Dark Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
       document.title = "CaseFlex - Light Mode"

    }
  }

  const togglemode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#041a10';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")

    }
  }

  return (
    <>
{/*   
    <Navbar title = "TextUtils" aboutText = "About"/>  */}
     {/* <Navbar/> */}
     <Router>
      <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode} togglemode = {togglemode} />
      <Alert alert={alert}/>
      <div className = "container my-3">
      <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element = {<TextForm showAlert = {showAlert} heading = "Enter the text to analyze below" mode = {mode}/>} />
        </Routes>
        </div>
        </Router>
  
 
      
    </>
  );
}

export default App;
