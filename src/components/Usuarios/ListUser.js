import React, { useEffect, useState } from 'react';
import { getUsuarios, deleteUsuario } from '../../services/usuarioService';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


const ListUser = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    const { data } = await getUsuarios();
    setUsuarios(data);
  };

  const handleDelete = async (id) => {
    await deleteUsuario(id);
    fetchUsuarios();
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Lista de Usuarios</h2>
      <Link to="/usuarios/crear" className="btn btn-success mb-4">
        <i className="fas fa-user-plus"></i> Crear Usuario
      </Link>
      
      <div className="row">
        {usuarios.map(usuario => (
          <div className="col-md-4 mb-3" key={usuario.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{usuario.nombre} {usuario.apellido}</h5>
                <p className="card-text">Fecha de Nacimiento: {usuario.fechaNacimiento}</p>
                <p className="card-text">Email: {usuario.email}</p>
                <div className="d-flex justify-content-between">
                  <Link to={`/usuarios/editar/${usuario.id}`} className="btn btn-primary btn-sm">
                    <i className="fas fa-edit"></i> Editar
                  </Link>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(usuario.id)}>
                    <i className="fas fa-trash-alt"></i> Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListUser;
