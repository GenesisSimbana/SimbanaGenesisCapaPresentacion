import React, { useState } from 'react';
import { createUsuario } from '../../services/usuarioService';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const [usuario, setUsuario] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    fechaNacimiento: '',
    creadoEn: '', 
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const usuarioConFecha = {
        ...usuario,
        fechaNacimiento: new Date(usuario.fechaNacimiento),
        creadoEn: new Date(), // Establecer la fecha y hora actuales
      };
      await createUsuario(usuarioConFecha);
      alert('Usuario creado exitosamente');
      navigate('/usuarios');
    } catch (error) {
      console.error('Error al crear usuario:', error);
      alert('Hubo un error al crear el usuario. Por favor, inténtelo nuevamente.');
    }
  };

  const handleGoBack = () => {
    navigate('/usuarios');
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow-lg p-4" style={{ width: '50%' }}>
        <h2 className="text-center mb-4">Crear Usuario</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              value={usuario.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Apellido</label>
            <input
              type="text"
              className="form-control"
              name="apellido"
              value={usuario.apellido}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={usuario.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Teléfono</label>
            <input
              type="text"
              className="form-control"
              name="telefono"
              value={usuario.telefono}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Fecha de Nacimiento</label>
            <input
              type="date"
              className="form-control"
              name="fechaNacimiento"
              value={usuario.fechaNacimiento}
              onChange={handleChange}
              required
            />
          </div>
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-success">
              Crear
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleGoBack}
            >
              Regresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
