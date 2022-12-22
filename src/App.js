// import logo from './logo.svg';
import './App.css';
import About from './Component/About';
import Experience from './Component/Experience';
import Home from './Component/Home';
// import { BrowserRouter } from 'react-router-dom';

import Nav from './Component/Nav';
import Project from './Component/Project';
import SocialLinks from './Component/SocialLinks';



function App() {
  return (
    <>
    
    <Nav/>
    <Home/>
    <About/>
    <Project/>
    <Experience/>

    <SocialLinks/>

    </>
  );
}

export default App;
