import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';

import React, { useState } from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
function App() {
  
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-primary');
  // }
  const toggleMode=(cls)=>{
    // removeBodyClasses();
    // console.log(cls);
    // document.body.classList.add('bg-'+cls);
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      //document.title='TextUtils - Dark Mode';
      // setInterval(()=>{
      //   document.title='TextUtils is Amazing';
      // },2000);
      // setInterval(()=>{
      //   document.title='Install TextUtils Now';
      // },1500);

    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      //document.title='TextUtils - Light Mode';
    }
  }

  return (
  <>   
  <Router>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
  <Alert alert={alert}></Alert>
 

<div className="container my-3">
  <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextFrom showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra spaces" mode={mode}></TextFrom>
          </Route>
          
  </Switch>     

 {/* <TextFrom showAlert={showAlert} heading="Enter the text to analyse" mode={mode}></TextFrom>  */}
</div>

</Router>
</>
  );
}

export default App;
