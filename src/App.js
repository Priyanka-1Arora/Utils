import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,Routes,
//   Link
// } from "react-router-dom";
function App() {
  const[bg,setBg]=useState('#FFFFFF')
  const [mode,setMode]=useState('light');
  const[txt,setText]=useState('Enable Dark Mode')
  const[alert,setAlert]=useState('null')
  const showAlert=(type,message)=>{
    setAlert({
      type:type,
      message:message
    })
    setTimeout(()=>{setAlert('null')},1500)
  }
  const toggl=()=>{
    if(mode==='light'){
      //to update title dynamically use document.style("whatever you want to write")
      setMode('dark')
      setText('Disable Dark Mode')
      if(bg==='#FFFFFF'){
        document.body.style.backgroundColor='grey'
      }
      else{
        document.body.style.backgroundColor=bg
      }
      document.title="Dark Mode"
      showAlert('success','Dark Mode enabled')
    }
    else{
      setMode('light')
      setText('Enable Dark Mode')
      document.body.style.backgroundColor='white'
      showAlert('success','Light Mode enabled')
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" about="About" mode={mode} toggle={toggl} text={txt} background={setBg}/>
    <Alert alert={alert} />
    <div className='container my-3'>
    {/* <Routes> */}
          {/* <Route exact path="/about" element={<About />}> */}
          <TextForm name="Enter text to analyze" color={bg} mode={mode} alert={showAlert}/>
          <About/>
          {/* </Route> */}
          {/* <Route exact path="/" element={<TextForm  name="Enter text to analyze" color={bg} mode={mode} alert={showAlert}/>}> */}
          {/* </Route> */}
        {/* </Routes> */}
</div>{/* </Router> */}
    </>
  );
}

export default App;
