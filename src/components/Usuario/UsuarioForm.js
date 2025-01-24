// src/components/UsuarioForm.js

import React, { useState, useEffect } from 'react';
import { createUsuario, updateUsuario } from '../../services/usuarioService';

const UsuarioForm = ({ usuario, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        fechaNacimiento: '',
    });

    useEffect(() => {
        if (usuario) {
            setFormData(usuario);
        }
    }, [usuario]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (usuario) {
            // Actualizar usuario
            await updateUsuario(usuario.id, formData);
        } else {
            // Crear nuevo usuario
            await createUsuario(formData);
        }
        onSave();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
            </div>
            <div>
                <label>Apellido:</label>
                <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
                <label>Teléfono:</label>
                <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} required />
            </div>
            <div>
                <label>Fecha de Nacimiento:</label>
                <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} required />
            </div>
            <button type="submit">{usuario ? 'Actualizar' : 'Crear'} Usuario</button>
            <button type="button" onClick={onCancel}>Cancelar</button>
        </form>
    );
};

export default UsuarioForm;
