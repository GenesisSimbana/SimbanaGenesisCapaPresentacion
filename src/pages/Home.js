import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="text-center">
    <h1>Bienvenido a la Gestión de Cursos</h1>
    <p>Elige una opción para comenzar:</p>
    <div className="d-flex justify-content-center">
      <Link to="/usuarios" className="btn btn-primary mx-2">Gestión de Usuarios</Link>
      <Link to="/cursos" className="btn btn-success mx-2">Gestión de Cursos</Link>
      <Link to="/matricula" className="btn btn-dark mx-2">Gestión de Matricula</Link>
    </div>
  </div>
);

export default Home;
