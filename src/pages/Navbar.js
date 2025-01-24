import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaBook, FaHome } from 'react-icons/fa';

const Navbar = () => (
  <nav
    className="navbar navbar-expand-lg"
    style={{
      backgroundColor: '#000000',
            padding: '10px 20px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    }}
  >
    <div className="container-fluid">
      <Link
        className="navbar-brand"
        to="/"
        style={{
          color: '#fff',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <FaHome style={{ marginRight: '8px' }} /> Gestión de Cursos y Usuarios
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{ borderColor: '#fff' }}
      >
        <span className="navbar-toggler-icon" style={{ color: '#fff' }}></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/usuarios"
              style={{ color: '#fff', fontWeight: '500', display: 'flex', alignItems: 'center' }}
            >
              <FaUser style={{ marginRight: '5px' }} /> Usuarios
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/cursos"
              style={{ color: '#fff', fontWeight: '500', display: 'flex', alignItems: 'center' }}
            >
              <FaBook style={{ marginRight: '5px' }} /> Cursos
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
