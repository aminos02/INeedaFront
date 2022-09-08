import React from 'react';
import './App.scss';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
       {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Login />} />
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;