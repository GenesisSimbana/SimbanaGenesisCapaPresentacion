import React, { useState } from 'react';
import axios from 'axios';

const CursoForm = ({ onCourseCreated }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('API_URL/courses', { name })
      .then(response => {
        onCourseCreated();
        setName('');
      })
      .catch(error => {
        console.error('Hubo un error al crear el curso', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre del Curso:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <button type="submit">Crear Curso</button>
    </form>
  );
};

export default CursoForm;
