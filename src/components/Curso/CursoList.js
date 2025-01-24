import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CursoList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8002/api/cursos') // Asegúrate de que esta URL es correcta
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Hubo un error al obtener los cursos', error);
      });
  }, []);

  const handleDeleteCourse = (courseId) => {
    axios.delete(`http://localhost:8002/api/cursos/${courseId}`)
      .then(() => {
        // Después de eliminar, actualizamos el estado
        setCourses(courses.filter(course => course.id !== courseId));
      })
      .catch(error => {
        console.error('Hubo un error al eliminar el curso', error);
      });
  };

  const handleEditCourse = (course) => {
    // Aquí puedes abrir un formulario de edición o hacer lo necesario
    console.log('Editando curso:', course);
  };

  return (
    <div>
      <h2>Lista de Cursos</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.name}
            <button onClick={() => handleEditCourse(course)} className="btn btn-warning btn-sm ml-2">
              Editar
            </button>
            <button onClick={() => handleDeleteCourse(course.id)} className="btn btn-danger btn-sm ml-2">
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CursoList;
