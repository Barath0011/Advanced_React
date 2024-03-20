import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Contactus from './pages/Contactus'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Aboutus from './pages/Aboutus'
import Service from './pages/Service'


function App() {


  return (
    <BrowserRouter>
      <div>

        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/contactus' element={<Contactus/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/aboutus' element={<Aboutus/>}/>
          <Route path='/service' element={<Service/>}/>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
