import axios from 'axios';

const API_URL = 'http://localhost:8002/api/cursos';

export const getCursos = () => axios.get(API_URL);
export const createCurso = (curso) => axios.post(API_URL, curso);
export const deleteCurso = (id) => axios.delete(`${API_URL}/${id}`);
export const updateCurso = (curso) => axios.post(API_URL, curso);

export const matricularUsuario = async (cursoId, usuarioId) => {
  return await axios.post(`${API_URL}/${cursoId}/matricular`, { usuarioId });
};

export const desmatricularUsuario = async (cursoId, usuarioId) => {
  return await axios.post(`${API_URL}/${cursoId}/desmatricular`, { usuarioId });
};

export const getUsuariosMatriculados = async (cursoId) => {
  return await axios.get(`${API_URL}/${cursoId}/usuarios`);
};

