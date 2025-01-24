import React, { useState, useEffect } from 'react';
import { getCursos, createCurso, deleteCurso, updateCurso } from '../services/cursoService';

const Cursos = () => {
  const [cursos, setCursos] = useState([]);
  const [formData, setFormData] = useState({ id: '', nombre: '', descripcion: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    loadCursos();
  }, []);

  const loadCursos = async () => {
    try {
      const response = await getCursos();
      setCursos(response.data);
    } catch (error) {
      console.error('Error al obtener cursos:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreateOrUpdate = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await updateCurso(formData.id, { nombre: formData.nombre, descripcion: formData.descripcion });
      } else {
        await createCurso({ nombre: formData.nombre, descripcion: formData.descripcion });
      }
      setFormData({ id: '', nombre: '', descripcion: '' });
      setIsEditing(false);
      loadCursos();
    } catch (error) {
      console.error('Error al guardar curso:', error);
    }
  };

  const handleEdit = (curso) => {
    setFormData(curso);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteCurso(id);
      loadCursos();
    } catch (error) {
      console.error('Error al eliminar curso:', error);
    }
  };

  return (
    <div>
      <h2>Gestión de Cursos</h2>
      <form onSubmit={handleCreateOrUpdate}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del Curso"
          value={formData.nombre}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="descripcion"
          placeholder="Descripción"
          value={formData.descripcion}
          onChange={handleInputChange}
          required
        />
        <button type="submit" className="btn btn-primary">
          {isEditing ? 'Actualizar' : 'Crear'}
        </button>
      </form>

      <table className="table mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map((curso) => (
            <tr key={curso.id}>
              <td>{curso.id}</td>
              <td>{curso.nombre}</td>
              <td>{curso.descripcion}</td>
              <td>
                <button onClick={() => handleEdit(curso)} className="btn btn-warning btn-sm">
                  Editar
                </button>
                <button onClick={() => handleDelete(curso.id)} className="btn btn-danger btn-sm ml-2">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cursos;
