import React, { useState, useEffect } from 'react';
import { getUsers, createUser, deleteUser, updateUser } from '../services/usuarioService';

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [formData, setFormData] = useState({ id: '', nombre: '', email: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await getUsers();
      setUsuarios(response.data);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreateOrUpdate = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await updateUser(formData.id, { nombre: formData.nombre, email: formData.email });
      } else {
        await createUser({ nombre: formData.nombre, email: formData.email });
      }
      setFormData({ id: '', nombre: '', email: '' });
      setIsEditing(false);
      loadUsers();
    } catch (error) {
      console.error('Error al guardar usuario:', error);
    }
  };

  const handleEdit = (usuario) => {
    setFormData(usuario);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      loadUsers();
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    }
  };

  return (
    <div>
      <h2>Gestión de Usuarios</h2>
      <form onSubmit={handleCreateOrUpdate}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={formData.email}
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
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.email}</td>
              <td>
                <button onClick={() => handleEdit(usuario)} className="btn btn-warning btn-sm">
                  Editar
                </button>
                <button onClick={() => handleDelete(usuario.id)} className="btn btn-danger btn-sm ml-2">
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

export default Usuarios;
