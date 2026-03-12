import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import './styles/Navbar.css';
import Home from './pages/Home.js';
import './styles/Home.css';

function App() {

    return (
        <BrowserRouter>
            <div className = "app-container">
                <Navbar />
                <Home/>
            </div>
        </BrowserRouter>
  );
}

export default App;
