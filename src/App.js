import React from 'react'
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import Register from './Pages/Register';

function App() {
  if (window.location.pathname==="/"){
    window.location.href="/home"
  }
  return (
   <Routes>
    <Route path="/home" element={<Homepage/>}/>
    <Route path="/register" element={<Register/>}/>

   </Routes>

  );
}

export default App;
