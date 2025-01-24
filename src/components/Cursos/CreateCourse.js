import React, { useState } from 'react';
import { createCurso } from '../../services/cursoService';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CreateCourse = () => {
  const [curso, setCurso] = useState({ nombre: '', descripcion: '', creditos: 0 });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurso({ ...curso, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCurso(curso);
    navigate('/cursos');
  };

  const handleGoBack = () => {
    navigate('/cursos');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Crear Nuevo Curso</h2>

      <button className="btn btn-secondary mb-4" onClick={handleGoBack}>
        <i className="fas fa-arrow-left"></i> Regresar a la Lista de Cursos
      </button>

      <div className="card shadow-lg">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nombre del Curso</label>
              <input
                type="text"
                className="form-control"
                name="nombre"
                value={curso.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Descripción</label>
              <textarea
                className="form-control"
                name="descripcion"
                value={curso.descripcion}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Créditos</label>
              <input
                type="number"
                className="form-control"
                name="creditos"
                value={curso.creditos}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100 mt-3">
              <i className="fas fa-plus-circle"></i> Crear Curso
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
