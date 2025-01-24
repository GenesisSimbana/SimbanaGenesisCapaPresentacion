import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';

const UsuariosMatriculados = () => {
  const { id } = useParams(); 
  const [usuarios, setUsuarios] = useState([]);
  const [curso, setCurso] = useState(''); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const responseUsuarios = await axios.get(`http://localhost:8002/api/cursos/${id}/usuarios`);
        setUsuarios(responseUsuarios.data);

        const responseCurso = await axios.get(`http://localhost:8002/api/cursos/${id}`);
        setCurso(responseCurso.data.nombre); 
      } catch (error) {

      }
    };
    fetchUsuarios();
  }, [id]);

  const handleDesmatricular = async (usuarioId) => {
    if (window.confirm('¿Está seguro de que desea desmatricular a este usuario?')) {
      try {
        await axios.delete(`http://localhost:8002/api/cursos/${id}/usuarios/${usuarioId}`);
        setUsuarios(usuarios.filter(usuario => usuario.id !== usuarioId));
      } catch (error) {
        console.error('Error al desmatricular el usuario', error);
        alert('Hubo un error al desmatricular al usuario.');
      }
    }
  };

  const handleGoBack = () => {
    navigate('/cursos'); 
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Usuarios Matriculados en el Curso: <strong>{curso}</strong></h2>

      <button className="btn btn-secondary mb-4" onClick={handleGoBack}>
        <i className="fas fa-arrow-left"></i> Regresar a la Lista de Cursos
      </button>

      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.length > 0 ? (
              usuarios.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.nombre} {usuario.apellido}</td>
                  <td>{usuario.email}</td>
                  <td>
                    <button 
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDesmatricular(usuario.id)}
                    >
                      <i className="fas fa-user-times"></i> Desmatricular
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">No hay usuarios matriculados.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsuariosMatriculados;
