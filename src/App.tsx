//import { useState } from 'react'
import './App.css';
//import User from './models/type';
import {Stars} from './components/stars';

//const count: number = '2'; 
function App() {
  
  return (
    <div>
      <Stars count={2}/>
      <Stars count={5}/>
    </div>
    
  )
}

export default App
