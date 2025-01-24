import React, { useEffect, useState } from 'react';
import { getCursos, deleteCurso } from '../../services/cursoService';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ListCourse = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    fetchCursos();
  }, []);

  const fetchCursos = async () => {
    const { data } = await getCursos();
    setCursos(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Está seguro de que desea eliminar este curso?')) {
      await deleteCurso(id);
      fetchCursos();
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Lista de Cursos</h2>
      <Link to="/cursos/crear" className="btn btn-success mb-4">
        <i className="fas fa-plus-circle"></i> Crear Curso
      </Link>

      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Créditos</th>
              <th>Acciones</th>
              <th>Ver Usuarios</th>
            </tr>
          </thead>
          <tbody>
            {cursos.map(curso => (
              <tr key={curso.id}>
                <td>{curso.nombre}</td>
                <td>{curso.descripcion}</td>
                <td>{curso.creditos}</td>
                <td>
                  <div className="d-flex gap-2">
                    <Link to={`/cursos/editar/${curso.id}`} className="btn btn-warning btn-sm">
                      <i className="fas fa-edit"></i> Editar
                    </Link>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(curso.id)}>
                      <i className="fas fa-trash-alt"></i> Eliminar
                    </button>
                  </div>
                </td>
                <td>
                  <Link to={`/cursos/${curso.id}/usuarios`} className="btn btn-info btn-sm">
                    <i className="fas fa-users"></i> Ver Usuarios
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListCourse;
