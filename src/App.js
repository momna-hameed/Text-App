
import './App.css';
//import About from './compponents/About';
import Navbar from './compponents/Navbar';
import TextForm from './compponents/TextForm';
import React, { useState } from 'react';
import Alert from './compponents/Alert';
/*import {
  BrowserRouter ,
  Route,
  Routes
} from "react-router-dom";
*/

function App() {
  const [mode,setMode]=useState('light');

  const[alert , setAlert]=useState(null);

  
  const toggleRed=()=>
  {
    if(mode==='light')
    {
      setMode('red');
      document.body.style.backgroundColor='red';
      showAlert("red mode has been enabled", "success");

    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled", "success");

    }
  }

  const toggleBrown=()=>
  {
    if(mode==='light')
    {
      setMode('brown');
      document.body.style.backgroundColor='brown';
      showAlert("green mode has been enabled", "success");

    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled", "success");
      

    }
  }
  const showAlert=(message, type)=>
  {
    // alert as an object
    setAlert(
      {
        msg: message,
        type:type
      }
    )
    setTimeout(()=>
    {
setAlert(null);
    },1500);
  }
  const toggleMode=()=>
  {
    if(mode==='light')
    {
      
      setMode('dark');
      document.body.style.backgroundColor='rgb(38 38 39)';
      showAlert("dark mode has been enabled", "success");
    }

    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled" , "success");
    }

  }

  //state variable whether dark mode is enabled or not*/
  return (
<>
{/*<BrowserRouter>*/}
 <Navbar title="Text-Editor" mode={mode}  toggleMode={toggleMode} toggleRed={toggleRed} toggleBrown={toggleBrown}/>
 <Alert alert={alert}/>
<div className="container">
{/*<Routes>
      <Route exact path="/about" element={
      <About mode={mode}/>*/}
     { /* }></Route>

    <Route  exact path="/" element={*/}
      <TextForm showAlert={showAlert} heading= "Enter text to Analyze below" mode={mode} />
     {/* }>
      </Route>

  </Routes></>*/}
</div>
{/*</BrowserRouter>*/}
 </>
  );

  
}

export default App;

//import PropTypes
// props as argument
//props.variable
//prop as an object
//default prop

// manage state in app.js
//1- make a new state in app.js value='dark'
//2- pass proptype value mode={mode} into navbar
//if dark mode enable=true Dark
//so convert string into template literals
// switch in navbae to control light mode or dark mode
//change color of enable dark mode : fun  toggle mode={toggle mode}
//toggle fun run when someone turn on switch