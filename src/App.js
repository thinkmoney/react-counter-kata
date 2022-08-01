import './App.css';
import NavBar from './components/NavBar';
import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import About from './pages/About'
import Home from './pages/Home'

function App() {
  return (
    <Router className="App">
      <header className="App-header">
        <NavBar/>
        <h2 className="App-header">
            {`Count: 0`}
        </h2>
      </header>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
