import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/pages/Navbar';
import ListarMatriculados from './components/Cursos/ListarMatriculados';
import UsuarioCurso from './components/Cursos/UsuarioCurso';
import ListUser from './components/Usuarios/ListUser';
import CreateUser from './components/Usuarios/CreateUser';
import EditUser from './components/Usuarios/EditUser';
import EditCourse from './components/Cursos/EditCourse';
import CreateCourse from './components/Cursos/CreateCourse';
import ListCourse from './components/Cursos/ListCourse';





const App = () => (
  <Router>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/matricular" element={<UsuarioCurso />} />
        <Route path="/cursos/:id/usuarios" element={<ListarMatriculados />} />

        <Route path="/usuarios/crear" element={<CreateUser />} />
        <Route path="/usuarios/editar/:id" element={<EditUser />} />
        <Route path="/cursos/crear" element={<CreateCourse />} />
        <Route path="/cursos/editar/:id" element={<EditCourse />} />
        <Route path="/usuarios" element={<ListUser />} />
        <Route path="/cursos" element={<ListCourse />} />

      </Routes>
    </div>
  </Router>
);

export default App;
