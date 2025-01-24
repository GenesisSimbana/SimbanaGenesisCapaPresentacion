// src/components/UsuariosList.js

import React, { useState, useEffect } from 'react';
import { getUsuarios, deleteUsuario } from '../../services/usuarioService';
import { Link } from 'react-router-dom';

const UsuariosList = ({ onEdit }) => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetchUsuarios();
    }, []);

    const fetchUsuarios = async () => {
        try {
            const response = await getUsuarios();
            setUsuarios(response.data);
        } catch (error) {
            console.error('Error fetching usuarios:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteUsuario(id);
            fetchUsuarios(); // Recargar lista después de eliminar
        } catch (error) {
            console.error('Error deleting usuario:', error);
        }
    };

    return (
        <div>
            <h2>Usuarios</h2>
            <Link to="/usuarios/nuevo">Nuevo Usuario</Link>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.apellido}</td>
                            <td>{usuario.email}</td>
                            <td>
                                <button onClick={() => onEdit(usuario)}>Editar</button>
                                <button onClick={() => handleDelete(usuario.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsuariosList;
