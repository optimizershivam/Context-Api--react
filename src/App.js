import logo from './logo.svg';
import './App.css';
import App1 from './components/Reducer';
import Navbar from './components/Navbar';
import Body from './components/Body';
import React ,{ useContext } from 'react';
import { Themecontext } from './context/ThemeContext';

function App() {
  const {islight}=useContext(Themecontext)
  console.log(islight)
  return (
    <div className={`App ${islight ? "light" : "dark"}`}>
      <Navbar/>
      <Body/> 
      <App1/>
    </div>
  );
}

export default App;
