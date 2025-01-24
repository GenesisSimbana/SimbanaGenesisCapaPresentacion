import React, { useState, useEffect } from "react";
import api from "../services/api";

const Matriculas = () => {
    const [cursos, setCursos] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [cursoId, setCursoId] = useState("");
    const [error, setError] = useState(""); // Para manejar errores

    useEffect(() => {
        // Obtener los cursos al cargar el componente
        api.getCursos()
            .then(response => setCursos(response.data))
            .catch(err => setError("Error al cargar los cursos"));
    }, []);

    const handleVerUsuarios = () => {
        if (cursoId) {
            api.obtenerUsuariosPorCurso(cursoId)
                .then(response => {
                    setUsuarios(response.data);
                    setError(""); // Limpiar el error si la solicitud es exitosa
                })
                .catch(err => setError("Error al obtener los usuarios"));
        }
    };

    return (
        <div>
            <h1>Ver Usuarios Matriculados</h1>

            {error && <div style={{ color: 'red' }}>{error}</div>} {/* Mostrar errores si los hay */}

            <select
                value={cursoId}
                onChange={e => setCursoId(e.target.value)}
            >
                <option value="">Seleccionar Curso</option>
                {cursos.map(curso => (
                    <option key={curso.id} value={curso.id}>
                        {curso.nombre}
                    </option>
                ))}
            </select>

            <button onClick={handleVerUsuarios}>Ver Usuarios</button>

            <div>
                {usuarios.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>ID Usuario</th>
                                <th>Nombre</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map(usuario => (
                                <tr key={usuario.id}>
                                    <td>{usuario.id}</td>
                                    <td>{usuario.nombre}</td>
                                    <td>{usuario.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No hay usuarios para este curso.</p> // Mensaje si no hay usuarios
                )}
            </div>
        </div>
    );
};

export default Matricula;