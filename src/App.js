import React from 'react';
import './App.css';
import './style.css'
import Profile from './profile/profile';
import Img from './img/frusciante.jpg';


function App() {
  
  function clickHandler(){
        alert();
  }
  return(
    <Profile img={Img} name="ahmed" bio ="hbsjdhbjsdbc" pro = "developer" clickHandler={clickHandler()}  />
  )
}

export default App;
