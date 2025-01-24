import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Usuarios from './pages/Usuarios';
import Cursos from './pages/Cursos';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/cursos" element={<Cursos />} />
    </Routes>
  </Router>
);

export default App;