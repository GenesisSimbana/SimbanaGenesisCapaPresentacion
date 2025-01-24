import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';

const MatricularUsuario = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [form, setForm] = useState({ usuarioId: '', cursoId: '', nombre: '', apellido: '', email: '', telefono: '', fechaNacimiento: '' });

  useEffect(() => {
    const fetchData = async () => {
      const usuariosResponse = await axios.get('http://localhost:8003/api/usuarios');
      const cursosResponse = await axios.get('http://localhost:8002/api/cursos');
      setUsuarios(usuariosResponse.data);
      setCursos(cursosResponse.data);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Función para crear el usuario
  const handleSubmitNuevoUsuario = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8002/api/cursos/usuarios', {
        nombre: form.nombre,
        apellido: form.apellido,
        email: form.email,
        telefono: form.telefono,
        fechaNacimiento: form.fechaNacimiento,
        creadoEn: new Date().toISOString(), // Se asume que creas la fecha actual
      });

      // Si la creación fue exitosa, muestra el mensaje
      alert('Usuario creado exitosamente');
      // Actualiza la lista de usuarios con el nuevo usuario creado
      setUsuarios([...usuarios, response.data]);
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      alert('Error al crear el usuario');
    }
  };

  // Función para matricular al usuario en el curso
  const handleSubmitMatricular = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`http://localhost:8002/api/cursos/${form.cursoId}`, { id: form.usuarioId });
      alert('Usuario matriculado correctamente');
    } catch (error) {
      console.error('Error al matricular al usuario:', error);
      alert('Error al matricular al usuario');
    }
  };

  const handleGoBack = () => {
    window.history.back(); // Regresa a la página anterior
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Matricular Usuario</h2>

      <button className="btn btn-secondary mb-4" onClick={handleGoBack}>
        <i className="fas fa-arrow-left"></i> Regresar
      </button>

      {/* Parte de Matricular Usuario en Curso */}
      <div className="card shadow-lg mb-4">
        <div className="card-body">
          <h4 className="text-center">Matricular Usuario en Curso</h4>
          <form onSubmit={handleSubmitMatricular}>
            <div className="mb-3">
              <label className="form-label">Usuario:</label>
              <select className="form-control" name="usuarioId" onChange={handleChange} required>
                <option value="">Seleccione un usuario</option>
                {usuarios.map((usuario) => (
                  <option key={usuario.id} value={usuario.id}>
                    {usuario.nombre} {usuario.apellido}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Curso:</label>
              <select className="form-control" name="cursoId" onChange={handleChange} required>
                <option value="">Seleccione un curso</option>
                {cursos.map((curso) => (
                  <option key={curso.id} value={curso.id}>
                    {curso.nombre}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-3">
              <i className="fas fa-check-circle"></i> Matricular
            </button>
          </form>
        </div>
      </div>

      {/* Parte de Crear Nuevo Usuario */}
      <div className="card shadow-lg">
        <div className="card-body">
          <h4 className="text-center">Crear Nuevo Usuario</h4>
          <form onSubmit={handleSubmitNuevoUsuario}>
            <div className="mb-3">
              <label className="form-label">Nombre:</label>
              <input type="text" className="form-control" name="nombre" onChange={handleChange} value={form.nombre} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Apellido:</label>
              <input type="text" className="form-control" name="apellido" onChange={handleChange} value={form.apellido} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input type="email" className="form-control" name="email" onChange={handleChange} value={form.email} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Teléfono:</label>
              <input type="text" className="form-control" name="telefono" onChange={handleChange} value={form.telefono} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Fecha de Nacimiento:</label>
              <input type="date" className="form-control" name="fechaNacimiento" onChange={handleChange} value={form.fechaNacimiento} required />
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-3">
              <i className="fas fa-check-circle"></i> Crear Usuario
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MatricularUsuario;
