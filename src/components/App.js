import React, {useState} from 'react';
import './App.css';

import Home from './Home.js'
import About from './About.js';
import Nav from './Nav';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
//in package.json in scripts maybe replace first three react-app-rewired instead of react-scripts
//call to action button always down right - circle with message icon

function App() {

  return (
    <div className="App">
      <Nav />
      <Home />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
