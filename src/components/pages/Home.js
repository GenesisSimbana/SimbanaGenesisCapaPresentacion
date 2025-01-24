import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="d-flex justify-content-center align-items-center vh-100">
    <div className="text-center">
      <h1 className="display-4 font-weight-bold mb-4">Bienvenido a la Gestión de Cursos y Usuarios</h1>
      <p className="lead mb-5">Elige una opción para comenzar:</p>
      <div className="d-flex justify-content-center">
        <Link to="/usuarios" className="btn btn-primary mx-3 px-5 py-3 btn-lg shadow-lg rounded-pill">
          <i className="fa fa-users me-2"></i> Gestión de Usuarios
        </Link>
        <Link to="/cursos" className="btn btn-success mx-3 px-5 py-3 btn-lg shadow-lg rounded-pill">
          <i className="fa fa-graduation-cap me-2"></i> Gestión de Cursos
        </Link>
        <Link to="/matricula" className="btn btn-dark mx-3 px-5 py-3 btn-lg shadow-lg rounded-pill">
          <i className="fa fa-book me-2"></i> Gestión de Matricula
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
