import React from 'react';
import Intro from './Intro.js';
import 'tachyons';
import './App.css';
import Pa from './Page1.js';
import Pa2 from './Page2.js';





function App() {
  return(
    <div className='maindiv'>
    <Intro/>
    <Pa/>
    <Pa2/>
    </div>
  );
  
}

export default App;
