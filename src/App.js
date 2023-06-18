import './App.css';
import About from './components/About';
import TextEditor from './components/TextEditor';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark'); //whether dark mode is enabled or not
  const [alert,setAlert]= useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
   
    },1500);
  }
return (
<>
<Router>
<Navbar title="EarlyCreature" aboutText="About us" mode={mode} />
<div className="container" >
  
  <Routes>
    <Route exact path="/about" element={<About/>}>
      {/* <--!About/> */}
    </Route>
    <Route exact path="/" element={<TextEditor showAlert={showAlert}/>}>
    {/* <Alert alert={alert}/> */}
 
    </Route>
  </Routes>
  </div>
</Router>

</>
);
}

export default App;
